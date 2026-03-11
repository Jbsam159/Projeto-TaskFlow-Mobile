import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createTaskController, listTasksController, updateTaskController } from "../controllers/taskController.js"

const router = Router()

router.use(authMiddleware)

router.post("/", createTaskController)
router.get("/", listTasksController)
router.patch("/:id", updateTaskController)

export { router as taskRoutes }