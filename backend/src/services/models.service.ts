import { prisma } from "../lib/prisma";

export async function getModels(year: number, brand: string) {
    if (!year || !brand) {
    throw new Error("Year and brand are required");
    }

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

  return models.map(item => item.model);
}