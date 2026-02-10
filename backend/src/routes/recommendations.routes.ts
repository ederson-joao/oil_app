import { Router } from 'express';
import { prisma } from "../lib/prisma";

const router = Router();

router.get('/recommendations', async (req, res) => {
  const { year, brand, model, version } = req.query;

  if (!year || !brand || !model || !version) {
    return res.status(400).json({ error: 'All parameters are required' });
  }

  const car = await prisma.car.findFirst({
    where: {
      year: Number(year),
      brand: String(brand),
      model: String(model),
      version: String(version),
    },
    include: {
      oil_engine: true,
      oil_transmission: true,
      oil_filter: true,
      fuel_filter: true,
      engine_air_filter: true,
      cabin_filter: true,
      coolant: true,
    },
  });

  if (!car) {
    return res.status(404).json({ error: 'Car not found' });
  }

  res.json(car);
});

export default router;
