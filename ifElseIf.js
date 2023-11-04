// let idadeJulia = 25;
// let idadeErick = 21;
// //let verificaIdadePessoas = '';
// /***** Não altere os códigos dentro desse bloco *****/

// function ifElseExercise() {
//  /***** Escreva seu if nas linhas abaixo *****/
//  if (idadeJulia > idadeErick) {
//   console.log('Julia é mais velha que Erick')
//  }
//  else if (idadeErick > idadeJulia) {
//   console.log('Erick é mais velho que Julia')
//  }
//  else {
//   console.log('Possuem a mesma idade')
//  }


// }

//Exercícios com if, else e else if 

/* Nesse exercício eu fiz a simualação de que se estiver chovendo for verdadeiro aparecerá no console 
"Abra o guarda-chuva!",mas caso seja falso aparecerá "Deixe o guarda-chuva fechado!"
*/
let estaChovendo = false
if (estaChovendo === true) {
 console.log("Abra o guarda-chuva!")
}
else {
 console.log("Deixe o guarda-chuva fechado!")
}


/* Nesse exercício eu fiz a simulação sobre a saída, caso a saída seja igual a 'Sol' aparecerá no console 
"Hoje está Sol, então você pode sair", caso a saída seja igual a 'Chuva' aparecerá "Hoje está chovendo, então fique em casa."
e caso a saída seja diferente aparecerá no console a saída que foi escrita e uma mensagem para a pessoa fazer o que achar melhor.
 */
let saida = 'Nublado'

if (saida === 'Sol') {
 console.log('\nHoje está Sol, então você pode sair.')
}

else if (saida === 'Chuva') {
 console.log('\nHoje está chovendo, então fique em casa.')
}

else {
 console.log('\nHoje está ' + saida + ', então faça o que achar melhor.')
}


/*Esse exercício mostra se o número é impar ou par e para isso utilizei o if para verificar se o resto da divisão
é igual a 0, se for aparecerá no console par e caso contrário aparecerá ímpar*/
let num = 25;

if (num % 2 === 0) {
 console.log('\n' + num + ' é par!')
} else {
 console.log('\n' + num + ' é ímpar!')
}


/* Nesse exercício nós temos duas notas, depois somamos as duas notas e dividimos por 2, caso o
resultado seja igual ou maior que 7 a pessoa foi aprovada e caso contrário a pessoa não foi aprovada. */
let nota1 = 1;
let nota2 = 3;
let media;
media = (nota1 + nota2) / 2      //Cálculo para saber a média

if (media >= 7) {
 console.log('\nAprovado(a)!')
} else {
 (media < 7)
 console.log('\nNão foi aprovado(a)!')
}


/* Nesse exercício o nome de usuário e senha precisam ser o mesmo que está na variável, se foi igual
vai aparecer no console 'Autenticação válida!' e caso contrário aparecerá 'Login e/ou senha incorretos' */
let usuario = 'user';
let senha = 'abc.123';

if (usuario === 'user' && senha === 'abc.123') {
 console.log('\nAutenticação válida!')
} else {
 console.log('\nLogin e/ou senha incorretos.')
}



/*Nesse exercício eu coloco um número na variável, caso o número seja menor que 4 aparecerá no console 'Guerreiro(a)',
se o número foi maior ou igual a 4 E menor que 8 aparecerá 'Ladino(a)', se o número foi maior ou igual a 8 E menor que 12
aparecerá 'Curandeiro (a)', se o número foi maior ou igual a 12 E menor que 16 aparecerá 'Arqueiro (a)' 
e caso o número for um número de 16 pra cima aparecerá 'Feiticeiro(a)'  */
let dadoNumero = 15

if (dadoNumero < 4) {
 classe = 'Guerreiro(a)'
}
else if (dadoNumero >= 4 && dadoNumero < 8) {
 classe = 'Ladino(a)'
}
else if (dadoNumero >= 8 && dadoNumero < 12) {
 classe = 'Curandeiro (a)'
}
else if (dadoNumero >= 12 && dadoNumero < 16) {
 classe = 'Arqueiro (a)'
} else {
 classe = 'Feiticeiro(a)'
}

console.log('\nSua classe é: ' + classe)



/*Esse exercício mostra se o mes de um determinado ano tem, 28, 29, 30 ou 31 dias.
Se for mês 1, 3, 5, 7, 8, 10 ou 12 aparecerá 'Tem 31 dias', se for maior que 12 ou menor que 1,
aparecerá 'que o mês é inválido', se for mês, 4, 6, 9 ou 11 aparecerá 'Tem 30 dias'e se o mes for 2,
primeiro faremos o cálculo para saber se é ano bissexto, se for bissexto aparecerá 'Tem 29 dias' e 
caso contrário aparecerá 28 dias */
let ano = 1998
let mes = 5

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes == 12) {
 console.log('\nO mês ' + mes + ' tem 31 dias no ano de ' + ano)
} else if (mes > 12 || mes < 1) {
 console.log('\nMês inválido!')
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
 console.log('\nO mês ' + mes + ' tem 30 dias de ' + ano)
} else if (mes === 2) {

 let anoBissexto = ((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 === 0) //Cálculo base para saber se o ano é bissexto
 if (anoBissexto) {
  console.log('\nO mês ' + mes + ' tem 29 dias de ' + ano)
 } else {
  console.log('\nO mês ' + mes + ' tem 28 dias de ' + ano)
 }
}
