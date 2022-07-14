import TarefaModel from "../models/TarefaModel.js"

class Tarefas{
    static rotas(app){
    app.get("/tarefas" ,(req, res) => {

        const tarefa = new TarefaModel("Estudar Flutter", "entender a diferença entre stateless e statefull", "1 dia", "alta")
        res.send(tarefa)
    })}
}
export default Tarefas