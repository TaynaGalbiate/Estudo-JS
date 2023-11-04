//As variáveis mais utilizadas são : let e const, o valor de let pode ser alterado sempre que necessário.
//Já o const não, o valor dessa constância não pode ser alterado. 
//No exemplo a seguir podemos ver que eu utilizei const para o nome "Tayna" e não posso alterá-lo para "Janey", pois dá erro.

const nome = 'Tayna'


nome = 'Janey'

console.log(nome) //Ocorre erro porque a variável const não pode alterar o valor, mas caso comente a linha número 8, funcionará normalmente.
