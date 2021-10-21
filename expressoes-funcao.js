
// forma declarativa de função - 
function minhaFunc() {
    //bloco de código
}
minhaFunc();

//expressão de função - outra forma de escrever funções em JS - funções anônimas
const soma = function (num1, num2) {
    return num1 + num2;
}
console.log(soma(1, 2));

/*A diferença principal entre elas é:

HOISTING->  içar, levantar, trazer todas essas declarações para cima do nosso código, no topo dele
o JavaScript antes de fazer qualquer coisa no código, ele lista as funções que são declaradas e o 
que é declarado como var, e antes de começar qualquer coisa, ele já sabe o que é. Por isso o código abaixo é possível e executável
Se declaramos uma expressão de função (usando o const), o hoisting não é possível.
*/
console.log(subtrai(5, 3));

function subtrai(num1, num2) {
    return num1 - num2;
}
