      // comando de saída de dados:
      console.log('Olá, Javascript');
      // Sempre que trabalhar com textos, devemos colocá-lo entre aspas 'simples', "duplas", `crases`

      /* Variaveis e constantes
      espaços identificados na memória para armazenar dados temporariamente */

      // variavel (valor pode mudar) - usar let no JS mais moderno, mas antigamente usava "var"
      let ano = 2022


      // constante (valor fixo)
      // const aluno = "Tiago"

      const aluno = prompt(); /* comando de entrada para testes */

      /* Tipos de dados:
      Strings (ex. texto)
      int (inteiros) (ex. número)
      float (decimais)
      bigint
      array
      object */

      console.log(ano);
      console.log(aluno);
      console.log(ano, aluno)


      /* operações matemáticas: /, *, +, - (divisão, multiplicação, adição, subtração)*/

      let preco = 1500;
      let desconto = 250;
      let precoFinal = preco - desconto;
     

      console.log(preco, desconto, precoFinal) 
      
      /* nomenclatura para nomes de variáveis, constantes e funções: se precisar declarar um nome composto, colocar sempre o segundo nome em letra maiúscula e tudo junto (sintaxe camelCase = nomeComposto). */

      let produto = "TV led"

      // A TV led custava 1500 reais

      // 1ª forma (tradicional) - CONCATENAÇÃO
      console.log("A "+produto+" custava "+preco+" reais.")


      // 2ª forma (moderna) - template string/ literal
      console.log(`A ${produto} custava ${1500} reais.`)