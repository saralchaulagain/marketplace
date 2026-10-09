import { Router, type Request, type Response } from 'express';
import { ApiResponse } from '../utils/ApiResponse.js';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  const response = new ApiResponse(200, {}, 'Api is working successfully');

  return res.status(response.statusCode).json(response);
});

export default router;
