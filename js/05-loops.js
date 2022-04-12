'use strict';
/* Estruturas tradicionais:

while - enquanto
do/while - faça enquanto
for - para
*/

// Exemplo loop while:
console.log("while");

// Variável de controle do loop - i=contador (utilizados para estrutura de repetição (i,j e k))
let i = 1;

while ( i <= 10) {
    console.log(`Valor de contador: ${i}`);
    i++; /* ++ = incremento */
}


console.log("-----------------");

console.log("do/while");

let j = 1; // Variável de controle
do{
    console.log(`J vale ${j}`);
    j++;
} while ( j <= 3) // ou j < 4


console.log("-----------------");

console.log("for");

 // aqui só posso utilizar o "i" novamente por estar atrelado ao "for"
 for ( let i =1; i <= 5; i++) { //( let i =1; "((variavel de controle))" i <= 5; "((condição))" i++ "((atualizacao de variavel))")

    console.log(`I vale: ${i}`)
}

console.log("-----------------");

console.log("Loop e Estrutura de Dados");

//Array (vetor)
let alunos = ["Eduardo", "Vagner", "Thalia","Claudio", "Jessica"];

for( let i = 0; i < 5; i++ ){
    console.log( alunos[i] );
}

console.log("-----------------");

console.log("Loops Exclusivos para JS"); //for/of - somente para arrays

for( let aluno of alunos){ // ele pega cada aluno dentro de alunos
    console.log(aluno);
}

console.log("-----------------");

//objeto
let livro = {
    titulo: "Senhor dos Anéis",
    ano: 1954,
    volume: 3,
    
};

// for/in - somente para objetos

for( let dados in livro ){
    console.log(livro[dados]);
}







