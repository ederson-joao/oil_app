import { Router } from 'express';
import { VersionsResponse, getVersions } from '../services/versions.service';

const router = Router();

router.get('/versions', async (req, res) => {
  try {
    const { year, brand, model } = req.query;

    if (!year || !brand || !model) {
      res.status(422).json({ error: "Year, brand or model query parameter is required" });
      return;
    }

    const versions:VersionsResponse = await getVersions({
      year: Number(year),
      brand: brand as string,
      model: model as string,
  });

    res.json(versions);
  }
  catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

export default router;
