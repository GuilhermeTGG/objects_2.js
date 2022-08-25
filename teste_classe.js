class User {
    constructor() {
     this.nome = 'Camila'
     this.email = 'c@c.com'
     this.cpf = '12312312312'
   }
    exibirInfos() {
     return `${this.nome}, ${this.email}, ${this.cpf}`
   }
   
   static exibeNome(nome) {
     return nome
   }
   }

   const novoUser = new User('Carol', 'c@c.com', '12312312312')
const nomeUser = novoUser.nome
console.log(User.exibeNome(nomeUser)) //Camila

console.log(User.exibeNome('Jaqueline')) //Jaqueline