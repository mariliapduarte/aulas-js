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
// Obs. a função dentro do listener, é chamada de Callback
formulario.addEventListener("submit", function(event){ 
    event.preventDefault();//aqui anulamos o comportamento padrão do navegador de redirecionar o submit do formulário. Nós quem programamos isso

    // 1) Capturar os dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat (campoNota1.value);
    let nota2 = parseFloat (campoNota2.value);
    
    // 2) Calcular a média das notas e criar variável situação
    let media = (nota1 + nota2) / 2;
    let situacao; 
    if( media >=7 ){
        situacao = "Aprovado";
    
    } else {
         situacao = "Reprovada";
    }

    // 3) Criando elemento dinamicamentevia JS

    // 3.1) Criar o elemento/tag
    let paragrafo = document.createElement("p")

    // 3.2) Montar o conteúdo da tag
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - <b>${situacao}</b>`;

    // 3.3) Adicionar tag/conteúdo à div de resultados
    divResultados.appendChild(paragrafo);

    formulario.reset(); //para resetar o formulário depois de enviar

    //campoNome.value=""; - seria utilizado para cada campo

    // == comparação - = atribuição

    
});




  