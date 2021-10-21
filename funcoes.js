//O Javascript executa uma linha depois da outra

//As funções isolam um bloquinho de código

//1. Declarando a função
function imprimeTexto(valor) {
    console.log(valor);
}
//2. Executando a função
imprimeTexto("Olá, mundo");


//3. Criando outra função
function soma(valor1, valor2) {
    return valor1 + valor2; // A clausula return tem que ser a última linha antes de fecharmos o bloco da função
}
//4. Uma função dentro da outra
imprimeTexto(soma(5, 8));

