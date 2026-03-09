import { Request, Response } from "express"
import { registerService } from "../services/registerService.js"

export async function registerController(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body

    const user = await registerService({
      name,
      email,
      password,
    })

    return res.status(201).json({
      message: "Usuário criado com sucesso",
      user,
    })
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
    })
  }
}