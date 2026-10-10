import type { NextFunction, Request, Response } from 'express';
import ApiError from '../utils/ApiError.js';
import { logger } from '../utils/logger.js';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: err.success,
      message: err.message,
    });
  }
  logger.data(err);

  return res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
};
