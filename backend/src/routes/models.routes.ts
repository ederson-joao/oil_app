import { Router } from 'express';
import { ModelsResponse, getModels } from '../services/models.service';

const router = Router();

router.get('/models', async (req, res) => {
  try {
    const { year, brand } = req.query;

    if (!year || !brand) {
      res.status(422).json({ error: "Year or brand query parameter is required" });
      return;
    }

    const models:ModelsResponse = await getModels(
      Number(year),
      String(brand)
    );

    res.json(models);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;