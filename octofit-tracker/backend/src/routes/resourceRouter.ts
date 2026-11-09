import { Router } from 'express';
import mongoose, { type Model } from 'mongoose';

interface ResourceOptions<T extends object> {
  model: Model<T>;
  writableFields: readonly string[];
  requiredFields: readonly string[];
}

function selectWritableFields(
  input: unknown,
  writableFields: readonly string[],
): Record<string, unknown> | null {
  if (typeof input !== 'object' || input === null || Array.isArray(input)) {
    return null;
  }

  const body = input as Record<string, unknown>;
  return Object.fromEntries(
    writableFields
      .filter((field) => Object.hasOwn(body, field))
      .map((field) => [field, body[field]]),
  );
}

export function createResourceRouter<T extends object>({
  model,
  writableFields,
  requiredFields,
}: ResourceOptions<T>): Router {
  const router = Router();

  router.get('/', async (_request, response) => {
    const records = await model.find().lean().exec();
    response.json(records);
  });

  router.get('/:id', async (request, response) => {
    const { id } = request.params;
    if (!mongoose.isValidObjectId(id)) {
      response.status(400).json({ error: 'Invalid record ID' });
      return;
    }

    const record = await model.findById(id).lean().exec();
    if (!record) {
      response.status(404).json({ error: 'Record not found' });
      return;
    }
    response.json(record);
  });

  router.post('/', async (request, response) => {
    const values = selectWritableFields(request.body, writableFields);
    if (!values) {
      response.status(400).json({ error: 'Request body must be a JSON object' });
      return;
    }

    const missingFields = requiredFields.filter(
      (field) =>
        !Object.hasOwn(values, field) ||
        values[field] === null ||
        values[field] === '',
    );
    if (missingFields.length > 0) {
      response.status(400).json({
        error: 'Required fields are missing',
        fields: missingFields,
      });
      return;
    }

    const record = await model.create(values as Partial<T>);
    response.status(201).json(record);
  });

  router.put('/:id', async (request, response) => {
    const { id } = request.params;
    if (!mongoose.isValidObjectId(id)) {
      response.status(400).json({ error: 'Invalid record ID' });
      return;
    }

    const values = selectWritableFields(request.body, writableFields);
    if (!values || Object.keys(values).length === 0) {
      response.status(400).json({
        error: 'Request body must include at least one writable field',
      });
      return;
    }

    const record = await model
      .findByIdAndUpdate(id, values, {
        new: true,
        runValidators: true,
      })
      .lean()
      .exec();
    if (!record) {
      response.status(404).json({ error: 'Record not found' });
      return;
    }
    response.json(record);
  });

  router.delete('/:id', async (request, response) => {
    const { id } = request.params;
    if (!mongoose.isValidObjectId(id)) {
      response.status(400).json({ error: 'Invalid record ID' });
      return;
    }

    const record = await model.findByIdAndDelete(id).lean().exec();
    if (!record) {
      response.status(404).json({ error: 'Record not found' });
      return;
    }
    response.status(204).end();
  });

  return router;
}
