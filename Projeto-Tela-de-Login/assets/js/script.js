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

     console.log('Formulário enviado! Aqui vai o Ajax.');
 });