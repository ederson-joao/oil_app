import { Router } from 'express';
import { loginUser } from '../services/login.service';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await loginUser(name, password);

    return res.json({
      message: 'Login realizado com sucesso',
      user,
    });
  } catch (error) {
    const message = (error as Error).message;

    if (message === "Usuário ou senha inválidos") {
      return res.status(401).json({ error: message });
    }

    if (message === "Usuário e senha são obrigatórios") {
      return res.status(400).json({ error: message });
    }

    return res.status(500).json({
      error: "Erro interno no servidor",
    });
  }
});

export default router;