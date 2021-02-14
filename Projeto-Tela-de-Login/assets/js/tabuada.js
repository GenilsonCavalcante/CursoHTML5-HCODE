/**
 * COMENTÁRIO DE BLOCO;
 * OBS: Normalmente não comentamos nossos códigos, apenas quando estamos iniciando e aprendendo. O seu código deve ser auto-explicativo para que outros programadores possam entender. Por isso devemos aprender a trazer bons códigos, códigos limpos.
 */

//COMENTÁRIO DE LINHA
function calculaTabuada(){

    //Obtendo do DOM o 'tbody' da tabela;
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o valor A do campo input number e convertendo em inteiro.
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limpando o conteúdo do 'tbody';
    tabuada.innerHTML = '';
    //Criando um laço de repetição de 0 à 10.
    for (let valorB = 0; valorB <= 10; valorB++) {
        //Calculando o resultado da linha atual;
        let resultado = valorA * valorB;
        //Criando o template das colunas da linha atual.
        let template = `
                <td>${valorA}</td>
                <td>*</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            `;
        //Criando o elemento 'tr'
        let tr = document.createElement('tr');//Cria a linha tr e insere com o comando abaixo todos os comados de 'template'.
        //Inserindo as colunas na tabela;
        tr.innerHTML = template;
        //Inserindo a linha na tabela;
        tabuada.append(tr);
    }//Fechando o for
    
}//Fechando a função

//Chamando a nossa função pela primeira vez;
calculaTabuada();
//Adicionando o evento de alteração ao campo número.
document.querySelector("#valorA").addEventListener('change', calculaTabuada);