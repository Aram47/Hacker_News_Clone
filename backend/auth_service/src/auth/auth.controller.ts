import { Request, Response } from "express";
import AuthService from "./auth.service";
import LoginUserDto from "./dto/login-user.dto";
import RegisterUserDto from "./dto/register-user.dto";

class AuthController {
  authService: AuthService;
  constructor() {
    this.authService = new AuthService()
  }

  async login(req: Request, res: Response): Promise<void> {
    res.status(200).json(await this.authService.login());;
  }

  async register(req: Request, res: Response): Promise<void> {
    res.status(200).json(await this.authService.register());
  }
}

const controller: AuthController = new AuthController();
export default controller;