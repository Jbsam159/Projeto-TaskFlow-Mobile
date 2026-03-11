import { prisma } from "../config/prisma.js"

interface CreateTaskDTO {
  title: string
  priority: "LOW" | "MEDIUM" | "HIGH"
  userId: string
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