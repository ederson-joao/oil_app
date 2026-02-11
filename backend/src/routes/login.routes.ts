import { Router } from 'express';
import { prisma } from "../lib/prisma";

const router = Router();

router.post('/login', async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({
            error: 'Usúario e senha são obrigatórios',
        });
    }

    try {
        const user = await prisma.user.findFirst({
            where: { name }
        });

        if (!user) {
            return res.status(401).json({
                error: 'Usúario ou senha inválidos',
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                error: 'Usúario ou senha inválidos',
            });
        }

        return res.json({
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                name: user.name
            },
        });
    }
    catch (error) {
        return res.status(500).json({
            error: 'Erro interno no servidor'
        });
    }
});

export default router;