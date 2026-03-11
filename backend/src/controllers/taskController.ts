import { Request, Response } from "express"
import { createTask } from "../services/taskService.js"

export async function createTaskController(req: Request, res: Response) {
  try {

    const { title, priority } = req.body

    const userId = req.userId

    if (!title || !priority) {
      return res.status(400).json({
        error: "Title e priority são obrigatórios"
      })
    }

    const task = await createTask({
      title,
      priority,
      userId
    })

    return res.status(201).json(task)

  } catch (error) {

    console.error("Erro ao criar tarefa:", error)

    return res.status(500).json({
      error: "Erro ao criar tarefa"
    })

  }
}