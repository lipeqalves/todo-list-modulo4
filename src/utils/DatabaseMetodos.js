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
}

export default DatabaseMetodos;