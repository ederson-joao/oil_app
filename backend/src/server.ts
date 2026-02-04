import express from 'express';

import brandsRoutes from './routes/brands.routes';
import modelsRoutes from './routes/models.routes';
import versionsRoutes from './routes/versions.routes';
import recommendationsRoutes from './routes/recommendations.routes';

const app = express();

app.use(express.json());

app.use(brandsRoutes);
app.use(modelsRoutes);
app.use(versionsRoutes);
app.use(recommendationsRoutes);

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});
