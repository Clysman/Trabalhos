import { PrismaClient, Livro } from '@prisma/client';

const prisma = new PrismaClient();

export const createLivro = async (data: Livro): Promise<Livro> => {
  return await prisma.livro.create({ data });
};

export const getAllLivros = async (): Promise<Livro[]> => {
  return await prisma.livro.findMany();
};

export const getLivroById = async (id: number): Promise<Livro | null> => {
  return await prisma.livro.findUnique({ where: { id } });
};

export const updateLivro = async (id: number, data: Livro): Promise<Livro | null> => {
  return await prisma.livro.update({
    where: { id },
    data,
  });
};

export const deleteLivro = async (id: number): Promise<Livro | null> => {
  return await prisma.livro.delete({ where: { id } });
};