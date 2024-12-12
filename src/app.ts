import express from 'express';
import livroRoutes from 'C:/Projeto- CRUD Gerenciamento de Livros em uma Biblioteca/crud-project-typescript/src/routes/livroRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/livros', livroRoutes);

export default app;