/* Estrutura condicional 
if (se), else (senão) and else if (senão se)

Opeadores relacionais (usados em condicionais):
> maior que
< menor que
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente
*/


// Exemplo 1: condional SIMPLES (if)
let numero = 1;

// o que está dentro dos () é a condição
if(numero > 0){
    console.log(`${numero} é maior que 0`);
}

if (numero < 2){
    console.log(`${numero} é menor que 2`);
}

// Exemplo 2: condicional COMPOSTA (if e else)
let aluno = "João";
let nota1 = 5;
let nota2 = 8;
let media = (nota1 + nota2)/ 2; /* utiliza () para indicar a prioridade da conta (+), se não ele calcularia a divisão primeiro. */

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media.toFixed(2)}`);

if( media >=7 ){
    console.log("Aprovado");

} else {
    console.log("Reprovado");

}

/* REFATORAÇÃO: significa melhorar, otimizar, simplificar o código, abaixo o código está melhorado

let situacao; // undefined
if( media >=7 ){
    situacao = "Aprovado";

} else {
     situacao = "Reprovada";

}

log.console(situacao);
*/ 

// Exemplo 3: condicional ENCADEADA (if, else if, else):

let desempenho;

if( media < 3 ){
    desempenho = "pessimo";

} else if ( media < 5 ) {
    desempenho = "ruim";

} else if ( media < 9 ) {
    desempenho = "bom";

} else{
    desempenho = "ótimo"; 
}

console.log(desempenho);






