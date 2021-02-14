function calculaTabuada(){

    let tabuada = document.querySelector("#tabuada tbody");
    let valorA = parseInt(document.querySelector("#valorA").value);

    tabuada.innerHTML = '';

    for (let valorB = 0; valorB <= 10; valorB++) {

        let resultado = valorA * valorB;

        let template = `
                <td>${valorA}</td>
                <td>*</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            `;
        let tr = document.createElement('tr');//Cria a linha tr e insere com o comando abaixo todos os comados de 'template'.

        tr.innerHTML = template;

        tabuada.append(tr);
    }
    
}

calculaTabuada();

document.querySelector("#valorA").addEventListener('change', calculaTabuada);