import { Request, Response } from "express"
import { createTask, getTasksByUser, updateTask, deleteTask } from "../services/taskService.js"

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

export async function listTasksController(req: Request, res: Response) {
  try {

    const userId = req.userId

    const tasks = await getTasksByUser(userId)

    return res.status(200).json(tasks)

  } catch (error) {

    console.error("Erro ao listar tarefas:", error)

    return res.status(500).json({
      error: "Erro ao listar tarefas"
    })

  }
}

export async function updateTaskController(req: Request, res: Response) {

  try {

    const taskId = req.params.id as string
    const userId = req.userId

    const { title, priority, completed } = req.body

    const task = await updateTask({
      taskId,
      userId,
      title,
      priority,
      completed
    })

    return res.status(200).json(task)

  } catch (error) {

    console.error("Erro ao atualizar tarefa:", error)

    return res.status(400).json({
      error: "Não foi possível atualizar a tarefa"
    })

  }
}

export async function deleteTaskController(req: Request, res: Response) {

  try {

    const taskId = req.params.id as string
    const userId = req.userId

    const result = await deleteTask({
      taskId,
      userId
    })

    return res.status(200).json(result)

  } catch (error) {

    console.error("Erro ao deletar tarefa:", error)

    return res.status(404).json({
      error: "Tarefa não encontrada"
    })

  }
}