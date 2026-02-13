import { prisma } from "../lib/prisma";

export async function loginUser(name: string, password: string) {
  if (!name || !password) {
    throw new Error("Usuário e senha são obrigatórios");
  }

  const user = await prisma.user.findFirst({
    where: { name },
  });

  if (!user) {
    throw new Error("Usuário ou senha inválidos");
  }

  if (user.password !== password) {
    throw new Error("Usuário ou senha inválidos");
  }

  return {
    id: user.id,
    name: user.name,
  };
}