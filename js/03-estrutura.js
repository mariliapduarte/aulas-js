'use strict';
/*  Estrutura de Dados no JS
ARRAY (Vetor [indicado por colchetes])
Lista de dados indexados*/

let alunos = ["Tiago", "João", "Marilia", "Vagner" ];

// Acessando o aluno armazenado no índice 1 e 3 

console.log(alunos[1]); /* João */
console.log(alunos[3]); /* Vagner */

// Abaixo, é uma forma de ver todos os índices pela inspeção do console no navegador:
console.log(alunos);

// exemplo de como usar o ARRAY:

let pessoa = ["Maria do Carmo", 20, "São Pedro", "SP"] /* quando for número deixar somente o número inteiro */

console.log(
    `${pessoa[0]} mora na cidade de ${pessoa[2]} e tem ${pessoa[1]} anos`
    );

console.log("----------------------------")

/* OBJETO {indicado por chaves} - É a estrutura de dados mais importante do JS
É uma lista de dados também, porém não-indexado (sem os índices)

Objetos são compostos por pares "propriedade: valor*/

let filme = {
    // propriedade: valor
    titulo: "Homem Aranha", 
    ano: 2021,
    genero: "Ação/Ficção"
    
};

console.log(filme.titulo);
console.log(filme.genero);
console.log(filme.ano);
console.log(`${filme.titulo} foi lançado em ${filme.ano}.`)

/* Exercicio de objeto*/

let pedido = {
    data: "07/04/2022",
    produto: "Par de meias",
    preco: 10,
    prazo: 7
}

console.log(
    `O produto ${pedido.produto} foi comprado em ${pedido.data} com entrega em ${pedido.prazo} dias úteis`
);



