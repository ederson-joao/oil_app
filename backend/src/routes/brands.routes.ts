import { Router } from 'express';
import { getBrands } from '../services/brands.service';

const router = Router();

router.get('/brands', async (req, res) => {
  try {
    const { year } = req.query;

    const brands = await getBrands(Number(year));

    res.json(brands);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;