import { NextFunction, Request, Response } from 'express'
import { NotFoundError } from '../errors/not-found-error'

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotFoundError()
  }

  next()
}
