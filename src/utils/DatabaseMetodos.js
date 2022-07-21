import { Database } from "../infra/Database.js";
class DatabaseMetodos{
    static listarTodoBanco(){
        return Database;
    }
    static listarTodoUsuarios(){
        return Database.Usuarios
    }
    static inserirUsuario(usuario){
        Database.Usuarios = [...Database.Usuarios, usuario]
        return Database.Usuarios;
    }
    static listarEmail(email){
        return  Database.Usuarios.filter((user) => 
                 user.email == email)
    }
    static deletaUsuarioPorId(id){
        const usuarios = Database.Usuarios.filter((usuario, index) => {
            return id != index
        })
        Database.Usuarios = usuarios
        return {id: id, success: "usuario excluido com sucesso!"}
    }
}

export default DatabaseMetodos;