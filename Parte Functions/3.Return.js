/*  Functions / Funções

    Função void (vazia), não retorna nada.
    Função return, retorna um valor para quem chamou a função
*/

/* function sum(value, value2) { // void
    console.log(value + value2)
} */

/* function sum(value, value2) {
    const result = value + value2
    return result
}

const myResult = sum(10, 20)
console.log(myResult + " resultado") */



const cart = [10, 32, 65, 15, 28, 120]
let finalValue = 0
let totalValue = 0


function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {
    if (value > 30){
        const discount = calculateDiscount(value, 10)
        finalValue = finalValue + (value - discount)
    } else {
        finalValue += value
    }
});

cart.forEach(price => {
    totalValue += price
});

let totalDiscount = totalValue - finalValue

console.log(`O valor final da compra foi de R$ ${totalValue.toFixed(2)},
porém, você teve desconto, irá pagar apenas R$ ${finalValue.toFixed(2)},
desconto total de R$ ${totalDiscount.toFixed(2)}`)