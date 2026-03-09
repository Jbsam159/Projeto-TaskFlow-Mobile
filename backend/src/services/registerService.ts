//importando conexão
import {prisma} from "../config/prisma.js";

interface RegisterRequest{
  name: string
  email: string
  password: string
}

export async function registerService({

  name,
  email,
  password,

}: RegisterRequest){

  if(!name || !email || !password){
    throw new Error("Todos os campos são obrigatórios")
  }

  const userAlreadyExists = await prisma.user.findUnique({
    where: { email },
  })

  if (userAlreadyExists) {
    throw new Error("Email já está em uso")
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })

  return user

}