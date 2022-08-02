//AULA 011 - Obejtos - 01/08/2022
/*
const estudante = {
    nome: "Letícia",
    sobrenome: "Correia",
    numeroDaMatricula: 12345,
    notas: [7, 9.5, 10]
}
console.log ('Objeto estudante: ',estudante);

//Adicionando uma nova propriedade ao objeto estudante

estudante.modulo = "HTML/CSS"
console.log ("Objeto com nova propriedade: ", estudante);

///Imprimindo informações do objeto estudante

console.log("Nome da pessoa estudante: ", estudante.nome);

console.log("Segunda nota do semestre : ", estudante.notas[1]);

console.log("Módulo atual: ", estudante.modulo);

// Cópia do objeto estudante

const copiaEstudante = {...estudante}

console.log("Cópia do objeto estudante :", estudante);

// Alterando o valor da propiedade nome 

copiaEstudante.nome = "Lívia"
console.log("Cópia com o nome alterado:", copiaEstudante);

// Adicionando a nota 5.0 às notas do semestre  

//copiaEstudante.notas.push(5.0)
copiaEstudante.notas = [...copiaEstudante.notas, 5.0]
console.log("Cópia com nova nota adicionada:", copiaEstudante);

// Alterando o valor da propiedade módulo

copiaEstudante.modulo = "Java Script"
console.log("Cópia com módulo alterado: ", copiaEstudante);

//Cridando array e adicionando objetos 

//const estudantesLabenu = [estudante, copiaEstudante]

const estudantesLabenu = []
estudantesLabenu.push(estudante)
estudantesLabenu.push(copiaEstudante)

console.log("Array com os objetos estudante e copiaEstudante:", estudantesLabenu);
*/

//EXERCÍCIO DE FIXAÇÃO

//criando ojeto "carrinho"

const carrinho = {
    nome:"Letícia",
    forma: "Dinheiro",
    endereco: "Rua Monsenhor Magalhães, 310"
}
console.log(carrinho);

//Adicionando Array de objetos chamado "compras"

const objeto01 = {
    nome: "Arroz",
    valor: 3.0 ,
    quantidade: 5 
}

const objeto02 = {
    nome: "feijão",
    valor: 8.0,
    quantidade: 2
}

const objeto03 = {
    nome: "ovo",
    valor: 10,
    quantidade: 12
}

carrinho.compras = []
carrinho.compras.push(objeto01);
carrinho.compras.push(objeto02);
carrinho.compras.push(objeto03);

console.log("Carrinho com compras: ",carrinho);

//imprimir a quantidade de comprar que tem no carrinho

console.log("Quantidade de compras: ", carrinho.compras.length);

//Criando cópia cartão presente 

const cartaoPresente = {... carrinho}

// Alterando o valor da propiedade nome 

cartaoPresente.nome = "Emily"
console.log("Cópia com o nome alterado:", cartaoPresente);

// Alterando a forma de pagamento 

cartaoPresente.forma = "Cartão Presente"
console.log("Cópia com a forma de pagamento alterado:", cartaoPresente);







