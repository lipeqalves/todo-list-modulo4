import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesService from "../services/ValidacoesService.js";
import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class Usuarios{
    static rotas(app){
        app.get("/usuarios",(req, res) => {
            const response = DatabaseMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuarios/:email",(req, res) => {
            const email = DatabaseMetodos.listarEmail(req.params.email)
            res.status(200).json(email)
        })

        app.post("/usuarios",(req, res) => {
            const isValid = ValidacoesService.validaNome(req.body.nome)
           
            if(isValid){
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirUsuario(usuario)
                res.status(201).json(response)
            }else{
             res.status(400).send("Erro")
            }

        app.delete("/usuario/:id", (req, res) => {
            const usuario = DatabaseMetodos.detaUsuarioPorId(req.params.index)
            res.status(200).json(usuario)
        })     
        })
    }
}
export default Usuarios;