import { prisma } from "../lib/prisma";

export type LoginResponse = {
  user: {
    id: number;
    name: string;
  };
};

type LoginParams = {
  name: string;
  password: string;
};

export async function loginUser(
  params: LoginParams
): Promise<LoginResponse> {
  const { name, password } = params;

  const user = await prisma.user.findFirstOrThrow({
    where: { name },
  });

  if (user.password !== password) {
    throw new Error("Invalid username or password");
  }

  return {
    user: {
      id: user.id,
      name: user.name,
    },
  };
}