import dotenv from "dotenv"
import { dot } from "node:test/reporters"

dotenv.config()

function getEnvVariable(key: string): string {

  const value = process.env[key]

  if(!value){
    throw new Error(`❌ Faltando Variável de Ambiente: ${key}`)
  }

  return value

}

export const env = {
  PORT: Number(getEnvVariable("PORT")),
  NODE_ENV: getEnvVariable("NODE_ENV"),
  DATABASE_URL: getEnvVariable("DATABASE_URL")
}