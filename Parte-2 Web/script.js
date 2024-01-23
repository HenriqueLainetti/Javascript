/* 

documento -> HTML

getElementById -> trás UM elemento pelo ID
getElementByClassName -> Trás TODOS os elementos com essa CLASSE
getElementByTagName -> Trás TODOS os elementos com essa TAG
getElementByName -> Trás TODOS os elementos com esse NAME

*/

/* const input = document.getElementById('main-input')

console.log(input) */

/* const elements = document.getElementsByClassName('paragraph-js')

console.log(elements) */

/* const elements = document.getElementsByTagName('p')

console.log(elements) */

/* const elements = document.getElementsByName('nome-completo')

console.log(elements) */
//__________________________________________________________________

/*

querrySelector -> Trás UM elemento, o PRIMEIRO que encontrar
querySelectorAll -> Trás TODOS os elementos que encontrar

. = class
# = id

*/

/* const elements = document.querySelector("p")

console.log(elements) */

/* const elements = document.querySelectorAll("p")

console.log(elements) */

/* const elements = document.querySelector("#main-input")

elements.placeholder = 'Novo texto'
console.log(elements.placeholder) */
//___________________________________________________________________

/* 

Alterando e Acessando textos

textContent -> Pega todo o conteúdo
innerText -> pega apenas o texto
innerHTML -> Permite adicionar HTML e texto

*/

/* const element = document.querySelector('.paragraph-js')
console.log(element.textContent) //SÓ HTML
console.log(element.innerText) //LEVA EM CONTA O CSS
console.log(element.innerHTML) // TRÁS TUDO -> Permite adicionar HTML
 */
//____________________________________________________________________

/* 
Alterando CSS(estilos) no JavaScript
*/

/* const button = document.querySelector('.main-button')

button.style.backgroundColor = "red" */
//____________________________________________________________________

/* 
Eventos
*/

/* function cliqueiNoBotao(){
    alert('Botão clicado com sucesso!')
} */

const input = document.querySelector('#main-input')
const select = document.querySelector('select')
const button = document.querySelector('.main-button')

select.addEventListener('change', function(){
    console.log('Troquei de valor')
})