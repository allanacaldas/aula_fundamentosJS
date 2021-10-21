function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(65, 78));

//parâmetros x argumentos

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(multiplica(soma(2,3))); // o 1º argumento sobreescreve o 1º param da função multiplica. Já como não temos o segundo argumento, ele usa o que está declarado no 2º da função multiplica  