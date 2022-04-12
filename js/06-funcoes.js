'use strict'; //MODO ESTRITO DA LINGUAGEM

console.log("Funções!");

/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação.

Usar funções também é uma forma de separar a lógica e organizar melhor sua programação.*/

//Sintaze tradicional
function linha(){
    console.log("------------------");
}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha(); //chamada de função
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);
linha();

              //Parâmetros ou argumentos
function soma(valor1, valor2){
    let total = valor1 + valor2 //variável local, não vai funcionar fora da "função soma", porisso no lugar de usar com console.log de total, usar:
    return total;
}

console.log( soma(10,5) );

