import { prisma } from "../config/prisma.js"

interface CreateTaskDTO {

  title: string
  priority: "LOW" | "MEDIUM" | "HIGH"
  userId: string

}

interface UpdateTaskDTO {
  taskId: string
  userId: string
  title?: string
  priority?: "LOW" | "MEDIUM" | "HIGH"
  completed?: boolean
}

export async function createTask(data: CreateTaskDTO) {
  const task = await prisma.task.create({
    data: {
      title: data.title,
      priority: data.priority,
      userId: data.userId
    }
  })

  return task
}

export async function getTasksByUser(userId: string) {
  const tasks = await prisma.task.findMany({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return tasks
}

export async function updateTask(data: UpdateTaskDTO) {

  const task = await prisma.task.findFirst({
    where: {
      id: data.taskId,
      userId: data.userId
    }
  })

  if (!task) {
    throw new Error("Task não encontrada")
  }

  const updatedTask = await prisma.task.update({
    where: {
      id: data.taskId
    },
    data: {
      title: data.title,
      priority: data.priority,
      completed: data.completed
    }
  })

  return updatedTask
}
