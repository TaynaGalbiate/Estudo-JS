//Exercícios para entender o funcionamento dos operadores de comparação.


//Nesse exercício se a idade for maior ou igual a 'idade' que o filme indica aparecerá no console aparecerá 'true'
let idade = 15
let filme = 16
console.log(idade >= filme) //Aparecerá false porque a idade é menor que o indicado para o filme


//Nesse exercício se a variável minhaIdade for igual a váriável idadeAleatória no console aparecerá 'true'
let minhaIdade = 25
let idadeAleatoria = '25'
console.log(minhaIdade === idadeAleatoria) //Aparecerá false, porque 25 é do tipo number e '25' é do tipo string.


//Exercícios sobre true e false
let minhaIdadeCorreta = 25
console.log(minhaIdadeCorreta === 25) //Aparecerá true, porque 25 é igual a 25

let idadeDiferente = 30
console.log(idadeDiferente !== 30) //Aparecerá false, porque o ! é uma negação, então estou negando.


//Nesse exercício vamos somar o valor da roupa1 + a roupa2, caso o valor for menor ou igual a 60 aparecerá true no console.
roupa1 = 35
roupa2 = 20
compras = roupa1 + roupa2
orcamento = compras <= 60
console.log(orcamento)