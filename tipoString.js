/* Qualquer cadeia de caracteres, conjunto de caracteres que nós colocamos entre aspas (sejam duplas ou simples),
 *  o JavaScript vai considerar como um dado do tipo string.*/

const texto2 = "Olá, mundo!";
const apresentacao = "Meu nome é Allana :)"

const senha = "SenhaSuperSegura12345";

const citacao = 'O Leo disse : "Quero ir mais cedo"'
console.log(citacao);

//Concatenando usando o +

const fraseConcatenada = texto2 + " " + apresentacao;
console.log(fraseConcatenada);

//Usando template String
const capital = "Recife";
const capital2 = "recife";

const frase = `A capital de Pernambuco é ${capital}`;
console.log(frase);

// --------- Trabalhando com Strings -----------

//Comparando Strings
console.log("As capitais são iguais? " + (capital == capital2)) 
// O  JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

//Convertendo todos os caracteres em Letra Minúscula e Maiúscula
const capital2Maiusculo = capital2.toUpperCase(); //Maiuscula
const capitalMaiusculo = capital.toUpperCase(); //Maiuscula

const capital2Minusculo = capital2.toLowerCase(); //Minuscula
const capitalMinusculo = capital.toLowerCase(); //Minuscula


//Comparando Strings depois de formatadas igualmente
console.log("As capitais são iguais? " + (capitalMaiusculo == capital2Maiusculo)) 

//Tamanho de uma String - através do length

console.log(capital.length);