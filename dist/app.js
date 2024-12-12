"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const livroRoutes_1 = __importDefault(require("C:/Projeto- CRUD Gerenciamento de Livros em uma Biblioteca/crud-project-typescript/src/routes/livroRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/livros', livroRoutes_1.default);
exports.default = app;
