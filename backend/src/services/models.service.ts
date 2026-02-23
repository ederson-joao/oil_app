import { prisma } from "../lib/prisma";

export type ModelsResponse = {
  model: string[];
}

export async function getModels(year: number, brand: string) : Promise<ModelsResponse> {

    const models = await prisma.car.findMany({
    where: {
      year: year,
      brand: brand,
    },
    distinct: ["model"],
    select: {
      model: true,
    },
  });

  return { 
    model : models.map(item => item.model)
  }
}