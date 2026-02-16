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

  if (!name || !password) {
    throw new Error("Usuário e senha são obrigatórios");
  }

  const user = await prisma.user.findFirstOrThrow({
    where: { name },
  });

  if (user.password !== password) {
    throw new Error("Usuário ou senha inválidos");
  }

  return {
    user: {
      id: user.id,
      name: user.name,
    },
  };
}