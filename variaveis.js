//var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

/*O JS lê todo o programa, carrega as variáveis do tipo var primeiro. Por isso, é possível começar a usar elas antes de declarar. */

//let
let forma = "retangulo";
let altura = 5;
let comprimento = 7;
let area;

if (forma == 'retangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}
console.log(area);


//const
/*A const é uma constante. Ou seja, uma vez que a colocamos no programa, não conseguimos alterá-la. */

const anoDoDescobrimento = 1500;
//anoDoDescobrimento = 1250; //Impossível de alterar pois estamos lidando com uma variável constante