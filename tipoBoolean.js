const primeiroNumero = 5;
const segundoNumero = "5";

//Comparações retornam true ou false
console.log(primeiroNumero === segundoNumero);


const texto1 = "Alura";
const texto2 = "A";
console.log(texto1 === texto2);

//Truthy e Falsy

//1 -> true
//0 -> false

console.log("O resultado da comparação entre 0 e false é: " + (0 == false));
console.log("O resultado da comparação entre 1 e true é: " + (1 == true));


console.log("O resultado da comparação entre string vazia e false é: " + (" " == false));

//Null e undefined 
/*Quando iniciamos uma variável com o let e deixamos ela sem valor nenhum, ela ganha, automaticamente,
pelo JavaScript o valor de undefined. Ou seja, ela não foi definida, mas, ela pode ser utilizada
*/
 let minhaVariavel;
 let variavelNull = null;

 console.log(minhaVariavel);
 console.log(variavelNull);

//Typeof é usado pra descobrir o tipo de dado que está sendo guardado naquela variável
console.log(typeof(variavelNull)); // o null foi criado como um objeto
console.log(typeof(minhaVariavel));




