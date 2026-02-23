import { Router } from 'express';
import { RecommendationResponse, getRecommendations } from '../services/recommendations.service';

const router = Router();

router.get('/recommendations', async (req, res) => {
  try {
    const { year, brand, model, version } = req.query;

    if (!year || !brand || !model || !version) {
      res.status(422).json({ error: "The query parameters required are year, make, model, or version." });
      return;
    }

    const car:RecommendationResponse = await getRecommendations({
      year: Number(year),
      brand: brand as string,
      model: model as string,
      version: version as string,
    });

    res.json(car);
  } catch (error) {
    const message = (error as Error).message;

    if (message === "Car not found") {
      return res.status(404).json({ error: message });
    }

    res.status(400).json({ error: message });
  }
});

export default router;