import { Request, Response, NextFunction } from "express";

class AuthMiddleware {
  loginMiddleware(req: Request, res: Response, next: NextFunction): void {
    next();
  }

  registerMiddleware(req: Request, res: Response, next: NextFunction): void {
    next();
  }
}

const middleware: AuthMiddleware = new AuthMiddleware();
export default middleware;