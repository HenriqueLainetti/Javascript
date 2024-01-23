/*  Controlador de Fluxo
        - If(Se) -> Faça ISSO
        - Else (Se não) -> Executa o Else
    
        Operadores de comparação 
            > maior que
            < menor que
            == igual que
*/

const notaDoAluno = 10
const notaDeCorte = 5

if(notaDoAluno > notaDeCorte){ //O QUE SERÁ EXECUTADO SE O IF FOR VERDADEIRO
    console.log('Parabéns, você foi aprovado.')
} 
else { //SE O IF FOR FALSO, ELE ENTRA AQUI
    console.log('Você foi reprovado')
}