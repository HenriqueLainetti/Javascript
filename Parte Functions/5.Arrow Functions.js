/*  Functions / Funções

    function padrão -> function() {}
    arrow function -> () => {}

    Não escrevemos "function".
    Além disso, usamos o sinal de "=>" para criá-la,
    o que lembra uma flwcha, fazendo jus ao nome "Arrow Functions".
*/


function sum2 (number1, number2){
    return number1 + number2
}

console.log(sum2(2, 3))

const sum = (number1, number2) => number1 + number2

console.log(sum(2, 3))