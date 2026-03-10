import { Request, Response } from "express"
import { registerService } from "../services/registerService.js"
import bcrypt from "bcrypt"

export async function registerController(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await registerService({
      name,
      email,
      password: hashedPassword,
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