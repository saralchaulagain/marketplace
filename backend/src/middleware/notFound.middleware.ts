import type { NextFunction, Request, Response } from 'express';
import ApiError from '../utils/ApiError.js';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(
    new ApiError(
      404,
      `Route not found:${req.method}, ${req.originalUrl}
  `,
    ),
  );
};

export default notFound;
