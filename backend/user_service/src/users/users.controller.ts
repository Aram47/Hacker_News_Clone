import { Request, Response } from "express";
import UsersService from "./users.service.js";

class UsersController {
  private readonly usersService: UsersService;
  constructor() {
    this.usersService = new UsersService();
  }

  getAll(req: Request, res: Response): void {
    this.usersService.getAll(req);
    res.status(200).json();
  }
  
  getById(req: Request, res: Response): void {
    this.usersService.getById(req);
    res.status(200).json();
  }
  
  create(req: Request, res: Response): void {
    this.usersService.create(req);
    res.status(200).json();
  }
  
  update(req: Request, res: Response): void {
    this.usersService.update(req);
    res.status(200).json();
  }
  
  updatePartial(req: Request, res: Response): void {
    this.usersService.updatePartial(req);
    res.status(200).json();
  }
  
  delete(req: Request, res: Response): void {
    this.usersService.delete(req);
    res.status(200).json();
  }
}

const controller: UsersController = new UsersController();
export default controller;