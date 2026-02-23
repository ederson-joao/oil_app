import { prisma } from "../lib/prisma";

export type RecommendationResponse = {
  car: {
    year: number;
    brand: string;
    model: string;
    version: string;
    id: string;
    oil_quantity: number;
    coolant_quantity: number;
    oil_engine_id: string;
    oil_transmission_id: string;
    oil_filter_id: string;
    fuel_filter_id: string;
    engine_air_filter_id: string;
    cabin_filter_id: string;
    cabin_filter_with_coal_id: string;
    coolant_id: string;
  }
}

type RecommendationParams = {
  year: number;
  brand: string;
  model: string;
  version: string;
};

export async function getRecommendations(params: RecommendationParams) : Promise<RecommendationResponse> {
  const { year, brand, model, version } = params;

  const car = await prisma.car.findFirstOrThrow({
    where: {
      year: year,
      brand: brand,
      model: model,
      version: version,
    }
  });

  return {
    car: {
      ...car,
      oil_quantity: Number(car.oil_quantity),
      coolant_quantity: Number(car.coolant_quantity),
    },
  };
}