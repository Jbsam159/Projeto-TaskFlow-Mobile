import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createTaskController, listTasksController } from "../controllers/taskController.js"

const router = Router()

router.use(authMiddleware)

router.post("/", createTaskController)
router.get("/", listTasksController)

export { router as taskRoutes }