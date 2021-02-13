let email = 'genilson.cavalcante105@gmail.com.br';

console.log(email);//Será fisível no console do navegador!
console.log('O seu e-mail é: '+ email);
console.log(`O seu e-mail é: ${email}`);

 //Utilize sempre 'let' para variável e 'const' para contantes.

 document.getElementById('btn-submit').addEventListener('click', e => {
     console.log('O botão foi clicado!');
 });

 document.getElementById('form-login').addEventListener('mouseenter', e => {
     console.log('O mouse está sobre o formulário.');
 });

 document.querySelector('#form-login').addEventListener('mouseleave', e => {
     console.log('O mouse está fora do formulário.');
 });

 document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();//Cancela a ação padrão do navegador.

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    //console.log(email, password);

    let json = {//Formato JSON
        email: email,
        password: password
    };

    /*   TRABALHANDO COM JSON
    console.log(json);

    let stringJSON = JSON.stringify(json);//Transformando em forma de String.

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);//Fazendo o processo inverso de conversão.

    console.log(jsonParse);
    */

    //VALIDAÇÃO DE DADOS COM JAVASCRIPT

    if (!json.email) {

        console.error("O campo email deve ser preenchido!");

    } else if(!json.password) {

        console.error("O campo senha deve ser preenchido!");

    } else {
        console.info("Dados validados com sucesso!");
    }

 });