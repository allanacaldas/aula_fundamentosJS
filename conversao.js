//conversao implicita
const numero = 3;
const numeroString = "3" ;

console.log(numero === numeroString);
//Estamos comparando tanto o valor como o tipo das variáveis, por isso o resultado sai diferente

console.log(numero == numeroString);
//Aqui compara-se somente o valor. O JS faz uma conversão implicita de Number para String e faz a comparação, cujo resultado é true pois ambos tem o mesmo valor

console.log(numero + Number(numeroString)); // Em vez de somar, ele concatenou.
//Mais uma vez, o JS converteu nosso número. O sinal de + então só fez concatenar as duas Strings. Por isso, o resultado sai 33 em vez de6

//conversao explicita
console.log(numero + numeroString);