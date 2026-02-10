import { Router } from 'express';
import { prisma } from "../lib/prisma";

const router = Router();

router.get('/versions', async (req, res) => {
  const { year, brand, model } = req.query;

  if (!year || !brand || !model) {
    return res.status(400).json({ error: 'Year, brand and model are required' });
  }

  const versions = await prisma.car.findMany({
    where: {
      year
: Number(year),
      brand: String(brand),
      model: String(model),
    },
    distinct: ['version'],
    select: {
      version: true,
    },
  });

  res.json(versions.map(item => item.version));
});

export default router;
