import { Request, Response } from 'express';
import * as livroService from 'C:/Projeto- CRUD Gerenciamento de Livros em uma Biblioteca/crud-project-typescript/src/services/livroService';

export const createLivro = async (req: Request, res: Response): Promise<void> => {
  try {
    const livro = await livroService.createLivro(req.body);
    res.status(201).json(livro);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getAllLivros = async (req: Request, res: Response): Promise<void> => {
  try {
    const livros = await livroService.getAllLivros();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getLivroById = async (req: Request, res: Response): Promise<void> => {
  try {
    const livro = await livroService.getLivroById(Number(req.params.id));
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateLivro = async (req: Request, res: Response): Promise<void> => {
  try {
    const livro = await livroService.updateLivro(Number(req.params.id), req.body);
    if (livro) {
      res.status(200).json(livro);
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteLivro = async (req: Request, res: Response): Promise<void> => {
  try {
    const livro = await livroService.deleteLivro(Number(req.params.id));
    if (livro) {
      res.status(200).json({ message: 'Livro deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};