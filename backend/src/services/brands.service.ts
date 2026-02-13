import { prisma } from "../lib/prisma";

export type BrandsResponse = {
  brand: string[];
}

export async function getBrands(year: number): Promise<BrandsResponse> {
  const brands = await prisma.car.findMany({
    where: {
      year: year,
    },
    distinct: ["brand"],
    select: {
      brand: true,
    },
  });

  return {
    brand: brands.map(item => item.brand),
  };
}