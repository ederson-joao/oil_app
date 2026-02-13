import { Router } from 'express';
import { getVersions } from '../services/versions.service';

const router = Router();

router.get('/versions', async (req, res) => {
  try {
    const { year, brand, model } = req.query;

    const versions = await getVersions({
      year: Number(year),
      brand: String(brand),
      model: String(model),
  });

    res.json(versions);
  }
  catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
