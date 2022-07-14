class ValidacoesService{
    static validaNome(nome){
        return nome.length >= 3
    }
    static validaEmail(email){
         return true
     }
     static validaTelefone(Telefone){
         return true
     }
}

export default ValidacoesService