import { Request, Response } from "express";

export class GetHomePageController {
  async handle(_: Request, response: Response) {
    return response.json({ message: "Hello World" });
  }
}
