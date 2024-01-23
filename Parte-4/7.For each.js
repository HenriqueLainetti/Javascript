/* 

    ForEach(item, index, array)

*/

const users = [
    {name: 'Henrique' , age: '27' , contact: '(11) 93333-3333'},
    {name: 'Augusto' , age: '30' , contact: '(11) 93333-2222'},
    {name: 'Paula' , age: '28' , contact: '(11) 93333-5555'},
    {name: 'Maria' , age: '33' , contact: '(11) 93333-4444'},
]

users.forEach((item, index, array) => {
    console.log(index)
    // console.log(item)
    console.log(`Nome: ${item.name}, Idade: ${item.age}`)
    console.log(array)
});