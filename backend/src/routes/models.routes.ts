import { Router } from 'express';
import { getModels } from '../services/models.service';

const router = Router();

router.get('/models', async (req, res) => {
  try {
    const { year, brand } = req.query;

    const models = await getModels(
      Number(year),
      String(brand)
    );

    res.json(models);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;