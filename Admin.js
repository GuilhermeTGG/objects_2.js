import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return `curso de ${nomeDoCurso}, criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com','2022-21-11');

//console.log(novoAdmin)
//console.log(novoAdmin.exibirInfos())

//console.log(novoAdmin.criarCurso('JS', 20))