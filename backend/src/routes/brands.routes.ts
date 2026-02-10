import { Router } from 'express';
import { prisma } from "../lib/prisma";

const router = Router();

router.get('/brands', async (req, res) => {
  const { year } = req.query;

  if (!year) {
    return res.status(400).json({ error: 'Year is required' });
  }

  const brands = await prisma.car.findMany({
    where: {
      year: Number(year),
    },
    distinct: ['brand'],
    select: {
      brand: true,
    },
  });

  res.json(brands.map(item => item.brand));
});

export default router;
