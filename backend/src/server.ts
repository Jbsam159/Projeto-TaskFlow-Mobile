// Importando lib para criar o servidor
import express from "express"
// Importando variáveis env
import {env} from "../src/config/env.js"

// Criando instância do app
const app = express()

app.use(express.json())

// Criando rota de teste
app.get("/health", (req, res) => {
  return res.json({ status: 'ok' });
})

// Escutando a porta
app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
})