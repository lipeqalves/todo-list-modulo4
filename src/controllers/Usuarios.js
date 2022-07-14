import UsuarioModel from "../models/UsuarioModel.js";
import ValidacoesService from "../services/ValidacoesService.js";

class Usuarios{
    static rotas(app){
        app.get("/usuarios",(req, res) => {
            const nome = "Fulano das Quantas";
            if(ValidacoesService.validaNome(nome)){
                const usuario = new UsuarioModel(nome,"fulano@email","819929329")
                res.send(usuario)
            }
             else{
                res.status(400).send("Erro")
            }
        })
    }
}
export default Usuarios;