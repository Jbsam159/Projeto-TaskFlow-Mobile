import { prisma } from "../config/prisma.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { env } from "../config/env.js"

interface LoginRequest {
  email: string
  password: string
}

export async function loginService({ email, password }: LoginRequest) {

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    throw new Error("Credenciais inválidas")
  }

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error("Credenciais inválidas")
  }

  const token = jwt.sign(
    { userId: user.id },
    env.JWT_SECRET,
    { expiresIn: "1d" }
  )

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  }
}