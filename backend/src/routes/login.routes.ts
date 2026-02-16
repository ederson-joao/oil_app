import { Router } from 'express';
import { LoginResponse, loginUser } from '../services/login.service';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(422).json({
        error: "Usuário e senha são obrigatórios",
      });
    }

    const result: LoginResponse = await loginUser({
      name: String(name),
      password: String(password),
    });

    return res.json({
      message: "Login realizado com sucesso",
      ...result,
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(401).json({
        error: "Usuário ou senha inválidos",
      });
    }

    if (error.message === "Usuário ou senha inválidos") {
      return res.status(401).json({
        error: error.message,
      });
    }

    if (error.message === "Usuário e senha são obrigatórios") {
      return res.status(400).json({
        error: error.message,
      });
    }

    return res.status(500).json({
      error: "Erro interno no servidor",
    });
  }
});

export default router;