//Arrow function 
//Não podem ser nomeadas
//Jeito rápido e curto de escrever nossa função

const apresentarArrow = (nome) => { `meu nome é ${nome}` }; //Não precisamos usar o return aqui porque só estamos passando instrução de uma linha

const apresentarArrow1 = nome => `meu nome é ${nome}`; //Não precisamos usar o return aqui porque só estamos passando instrução de uma linha

const soma = (num1, num2) => { num1 + num2 }; //Não precisamos usar o return aqui porque só estamos passando instrução de uma linha

//Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10) {
        return "Digite apenas números de 1 a 9";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(15,5));

//Atenção: A arrow function não tem suporte à hoisting.