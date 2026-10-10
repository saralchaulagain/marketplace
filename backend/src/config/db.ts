import mongoose from 'mongoose';
import env from './env.js';
import { logger } from '../utils/logger.js';
const connectDB = async () => {
  if (!env.DB) {
    throw new Error('Database is missing');
  }
  await mongoose.connect(env.DB);
  logger.info('Database connected!');
};
export default connectDB;
