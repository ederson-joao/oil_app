import { prisma } from "../lib/prisma";

export async function getBrands(year: number) {
  if (!year) {
    throw new Error("Year is required");
  }

  const brands = await prisma.car.findMany({
    where: {
      year: year,
    },
    distinct: ["brand"],
    select: {
      brand: true,
    },
  });

  return brands.map(item => item.brand);
}