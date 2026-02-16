import { Router } from 'express';
import { LoginResponse, loginUser } from '../services/login.service';

const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(422).json({
        error: "Username and password are required.",
      });
    }

    const result: LoginResponse = await loginUser({
      name: String(name),
      password: String(password),
    });

    return res.json({
      message: "Login successfully",
      ...result,
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(401).json({
        error: "Invalid username or password",
      });
    }

    if (error.message === "Invalid username or password") {
      return res.status(401).json({
        error: error.message,
      });
    }

    if (error.message === "Username and password are required.") {
      return res.status(400).json({
        error: error.message,
      });
    }

    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

export default router;