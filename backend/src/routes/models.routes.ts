import { Router } from 'express';
import { prisma } from "../lib/prisma";

const router = Router();

router.get('/models', async (req, res) => {
  const { year, brand } = req.query;

  if (!year || !brand) {
    return res.status(400).json({ error: 'Year and brand are required' });
  }

  const models = await prisma.car.findMany({
    where: {
      year: Number(year),
      brand: String(brand),
    },
    distinct: ['model'],
    select: {
      model: true,
    },
  });

  res.json(models.map(item => item.model));
});

export default router;
