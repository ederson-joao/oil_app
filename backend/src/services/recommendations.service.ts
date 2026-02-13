import { prisma } from "../lib/prisma";

type RecommendationParams = {
  year: number;
  brand: string;
  model: string;
  version: string;
};

export async function getRecommendations(params: RecommendationParams) {
  const { year, brand, model, version } = params;

  if (!year || !brand || !model || !version) {
    throw new Error("All parameters are required");
  }

  const car = await prisma.car.findFirst({
    where: {
      year: year,
      brand: brand,
      model: model,
      version: version,
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
    throw new Error("Car not found");
  }

  return car;
}