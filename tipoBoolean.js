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