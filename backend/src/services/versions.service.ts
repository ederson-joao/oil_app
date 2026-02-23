import { prisma } from "../lib/prisma";

export type VersionsResponse = {
  version: string[];
}

type VersionParams = {
  year: number;
  brand: string;
  model: string;
};

export async function getVersions(params: VersionParams) : Promise<VersionsResponse> {
    const { year, brand, model } = params;

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

  return {
    version : versions.map(item => item.version)
  }
}