import { Request, Response, NextFunction } from 'express';

class UsersMiddleware {
  getAll(req: Request, res: Response, next: NextFunction): void {
    next();
  }

  getById(req: Request, res: Response, next: NextFunction): void {
    next();
  }

  create(req: Request, res: Response, next: NextFunction): void {
    next();
  }

  update(req: Request, res: Response, next: NextFunction): void {
    next();
  }

  updatePartial(req: Request, res: Response, next: NextFunction): void {
    next();
  }

  delete(req: Request, res: Response, next: NextFunction): void {
    next();
  }
}

const middleware: UsersMiddleware = new UsersMiddleware();
export default middleware;