// == comparação implicita: compara-se apenas o valor das variáveis

const numero = 5;
const texto = "5";

//o Js fez a conversão do tipo String para Numero e fez a comparação
console.log(numero == texto);

// === comparação explicita: comparam-se valores e os tipos de dados das nossas variáveis
console.log(numero === texto);

//typeof
console.log(typeof(numero)); //Number
console.log(typeof(texto)); //String

//Métodos de conversão explicita
Number();
String();
toString();

/*Outros operadores
    || operador OU
    && operador E
    != e !==  Operadores “não igual” e “estritamente não igual”
 */

let primeiroNumero = 1;
let segundoNumero = 2;

console.log(primeiroNumero < segundoNumero && segundoNumero > 3 ); // Apenas a primeira afirmação é verdadeira, por isso o resultado é false
console.log(primeiroNumero < segundoNumero || segundoNumero > 3 ); // Basta uma das afirmações ser verdadeira, que o resultado é true
console.log(primeiroNumero != "1"); 
console.log(primeiroNumero !== "1"); 

