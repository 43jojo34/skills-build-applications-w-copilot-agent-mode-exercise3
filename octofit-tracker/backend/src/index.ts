import express, { type ErrorRequestHandler } from 'express';
import mongoose from 'mongoose';
import { connectDatabase } from './config/database.js';
import apiRouter from './routes/index.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-${port}.app.github.dev`
  : `http://localhost:${port}`;

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    response.status(204).end();
    return;
  }
  next();
});

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' });
});

app.use('/api', apiRouter);

app.use('/api', (_request, response) => {
  response.status(404).json({ error: 'API route not found' });
});

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (
    error instanceof mongoose.Error.ValidationError ||
    error instanceof mongoose.Error.CastError
  ) {
    response.status(400).json({ error: 'Request data is invalid' });
    return;
  }

  if (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 11000
  ) {
    response.status(409).json({ error: 'A record with these unique values already exists' });
    return;
  }

  if (typeof error === 'object' && error !== null && 'status' in error) {
    const status = error.status;
    if (status === 400) {
      response.status(400).json({ error: 'Malformed JSON request body' });
      return;
    }
  }

  if (mongoose.connection.readyState !== 1) {
    response.status(503).json({ error: 'Database is unavailable' });
    return;
  }

  console.error('API request failed:', error);
  response.status(500).json({ error: 'Internal server error' });
};

app.use(errorHandler);

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit Tracker API listening at ${baseUrl}`);
});

void connectDatabase().catch((error: unknown) => {
  console.error('Error connecting to octofit_db:', error);
});
