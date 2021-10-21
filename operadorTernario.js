const idadeMinima = 18;
let idadeCliente = 16;

//Construindo o fluxo usando o tradicional if/else

if (idadeCliente >= idadeMinima) {
    console.log("Você é maior de idade. Liberado para beber bebidas alcoolicas");
} else {
    console.log("Infelizmente, você é menor de idade. Não pode beber bebidas alcoolicas");
}

//Construindo a mesma lógica usando operador ternário

console.log(idadeCliente >= idadeMinima ? "Você é maior de idade. Liberado para beber bebidas alcoolicas" : "Infelizmente, você é menor de idade. Não pode beber bebidas alcoolicas");

// condição ? saida se true : saida se for false

let texto = idadeMinima < idadeCliente ? true : false;
console.log(texto);