/* 
    Estrutura de Repetição - LOOP
        - FOR OF
*/

const users = { name: 'Henrique', age: 27, street: 'Rua José de sá'}

/* 
users.name -> Henrique
users['name'] -> Henrique
*/


for (const key in users) {
    console.log(`${key} : ${users[key]}`)
}