/*Operadores lógicos:
|| = OU
&& = E
! = NEGAÇÃO
*/


//Nesse exemplo se o carro estiver abastecido OU a estrada for boa será 'true'
let carroAbastecido = true
let estradaBoa = false
console.log(carroAbastecido || estradaBoa)

//Nesse exemplo tem que ser fim de semana e tem que tem dinheiro para aparecer 'true'
let fimDeSemana = true
let temDinheiro = false
console.log(fimDeSemana && temDinheiro) //é final de semana, mas não tem dinheiro, então é 'false'


//Nesse exemplo está de dia é verdadeiro e está de noite é igual o contrário de estar de dia, então será 'false'
let estaDeDia = true
let estaDeNoite = !estaDeDia
console.log(estaDeNoite)