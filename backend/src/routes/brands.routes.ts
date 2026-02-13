import { Router } from 'express';
import { BrandsResponse, getBrands } from '../services/brands.service';

const router = Router();

router.get('/brands', async (req, res): Promise<void> => {
  try {
    const { year } = req.query;

    if (!year) {
      res.status(422).json({ error: "Year query parameter is required" });
      return;
    }

    const brands:BrandsResponse = await getBrands(Number(year));

    res.json(brands);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;