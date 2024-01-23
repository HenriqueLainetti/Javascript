/* 
Operadores Ternário

? if (se)
: else (se não)
salary < 3000 ? console.log("O colaborador é Junior") : console.log("Ele é Senior")

&& (if sem else)
salary < 3000 && console.log("O colaborador é Junior")

*/

const salary = 15000

/* if(salary < 3000) {
    console.log("O colaborador é Junior")
} else if(salary >= 3000 && salary < 10000) {
    console.log("Ele é Senior")
} else {
    console.log("Ele é diretor")
} */

//ELSE IF
salary < 3000 ? console.log("O colaborador é Junior") : salary >= 3000 && salary < 10000 ? console.log("Ele é Senior") : console.log("Ele é diretor") 