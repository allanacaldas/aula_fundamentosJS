function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(65, 78));

/*parâmetros x argumentos
Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros
no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os
 dados que utilizamos para executar a função (ou seja, 30, 45, etc).
*/

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(multiplica(soma(2,3))); // o 1º argumento sobreescreve o 1º param da função multiplica. Já como não temos o segundo argumento, ele usa o que está declarado no 2º da função multiplica  