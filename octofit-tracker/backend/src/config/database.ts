import mongoose from 'mongoose';

const connectionString =
  process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db';

export async function connectDatabase(): Promise<void> {
  await mongoose.connect(connectionString, { serverSelectionTimeoutMS: 5000 });
  console.log('Connected to octofit_db');
}
