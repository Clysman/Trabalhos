import app from 'C:/Projeto- CRUD Gerenciamento de Livros em uma Biblioteca/crud-project-typescript/src/app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});