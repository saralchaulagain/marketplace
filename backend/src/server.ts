import 'dotenv/config';
import app from './app.js';
import env from './config/env.js';
import connectDB from './config/db.js';
import { logger } from './utils/logger.js';

if (!env.DB) {
  throw new Error('DB is missing');
}
const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      logger.info(`Listening on Port: ${env.port}`);
    });
  } catch (err) {
    logger.error('Server statup failed: ', err);
    process.exit(1);
  }
};
startServer();
