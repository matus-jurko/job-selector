import { NextFunction, Request, Response } from 'express';

export const validMatrix = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, data } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({
      error: 'Name is required',
    });
  }

  if (!data || typeof data !== 'object') {
    return res.status(400).json({
      error: 'Data is required',
    });
  }

  next();
};
