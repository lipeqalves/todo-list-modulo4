import TarefaModel from "../models/TarefaModel.js"

class Tarefas{
    static rotas(app){
    app.get("/tarefas" ,(req, res) => {
        const tarefa = new TarefaModel("Estudar Flutter", "entender a diferença entre stateless e statefull", "1 dia", "alta")
        res.status(200).json({...tarefa, verbo: "get"})
        })
    app.post("/tarefas" ,(req, res) => {
        const tarefa = new TarefaModel("Estudar Flutter", "entender a diferença entre stateless e statefull", "1 dia", "alta")
        res.status(201).json({...tarefa, verbo: "post"})
        })
    }
}
export default Tarefas