import { prisma } from "../lib/prisma";

type VersionParams = {
  year: number;
  brand: string;
  model: string;
};

export async function getVersions(params: VersionParams) {
    const { year, brand, model } = params;

    if (!year || !brand || !model) {
    throw new Error("Year, brand and model are required");
    }

    const versions = await prisma.car.findMany({
    where: {
      year: year,
      brand: brand,
      model: model,
    },
    distinct: ["version"],
    select: {
      version: true,
    },
  });

  return versions.map(item => item.version);
}