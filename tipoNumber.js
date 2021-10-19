
//Tipo Number

/*A variável idade é o nome que usamos para identificar um espaço na memória, que guarda um dado específico
e esse dado é um dado do tipo número e o valor dele é 29.*/

let idade = 29;
const anoDoDescobrimento = 1500;

const primeiroNumero = 1;
const segundoNumero = 2;

// Operação de soma
const operacaoMatematica = primeiroNumero + segundoNumero;
console.log(operacaoMatematica);

//Operação de multiplicação
const operacaoMultiplicacao = primeiroNumero * segundoNumero;
console.log(operacaoMultiplicacao);

//Operação de divisao
const operacaoDivisao = primeiroNumero / segundoNumero;
console.log(operacaoDivisao); //Chamamos esse resultado de 0.5 de número flutuante

const numeroPontoFlutuante = 3.3;

//Operação de subtração
const operacaoSubtracao = numeroPontoFlutuante - operacaoMultiplicacao;
console.log(operacaoSubtracao);

//Conhecendo o Not a Number - Dividinndo uma variável do tipo Number por uma do tipo String
const nome = 'Allana';
const notANumber = nome/segundoNumero;
console.log(notANumber);