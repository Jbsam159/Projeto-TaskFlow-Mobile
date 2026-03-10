import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/health', (req, res) => {
  res.send('API funcionando 🚀');
});

router.get("/health/private", authMiddleware, (req, res) => {
  return res.json({
    status: "ok",
    message: "Rota protegida funcionando",
    userId: req.userId
  })
})

export { router };