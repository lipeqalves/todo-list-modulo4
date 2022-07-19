import express  from "express";
import * as dotenv from "dotenv";
import Usuarios from "./src/controllers/Usuarios.js";
import Tarefas from "./src/controllers/Tarefas.js";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express()
app.listen(port,()=>{
console.log(`Service rodando em http://localhost:${port}`);
})
Usuarios.rotas(app);
Tarefas.rotas(app);