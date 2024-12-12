import { Router } from 'express';
import { createLivro, getAllLivros, getLivroById, updateLivro, deleteLivro } from 'C:/Projeto- CRUD Gerenciamento de Livros em uma Biblioteca/crud-project-typescript/src/controllers/livroController';

const router = Router();

router.post('/', createLivro);
router.get('/', getAllLivros);
router.get('/:id', getLivroById);
router.put('/:id', updateLivro);
router.delete('/:id', deleteLivro);

export default router;