/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

// Monitor/Ouvinte de Evento
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Oláaaaaaaa!!!";
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "yellow";
});

subExemplo01.addEventListener("dblclick", function(){ 
    msg.textContent = "";
});

/* Exemplo 02: modo noturno */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
});

// Se o texto do botão for ativar
if ( botao.textContent == 'Ativar' ) {
    //então, mudamos para Desativar:
    botao.textContent = "Desativar";
} else {
    // senão, mudamos para Ativar
    botao.textContent = "Ativar";
}

/* Exemplo 3: simulação de cadastro */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

//Detextar o acionamento do formulário
formulario.addEventListener("submit", function(){});