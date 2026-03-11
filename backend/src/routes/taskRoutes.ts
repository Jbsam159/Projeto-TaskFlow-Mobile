import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createTaskController } from "../controllers/taskController.js"

const router = Router()

router.use(authMiddleware)

router.post("/", createTaskController)

export { router as taskRoutes }