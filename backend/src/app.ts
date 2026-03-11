// Importando lib para criar o servidor
import express from "express"

import { router } from "./routes/index.js"
import { authRoutes } from "./routes/authRoutes.js"
import { taskRoutes } from "./routes/taskRoutes.js"

// Criando instância do app
const app = express()

app.use(express.json())
app.use(router)
app.use(authRoutes)
app.use("/tasks", taskRoutes)

export {app}