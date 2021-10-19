# Fundamentos do Javascript : tipos, variáveis e funções

## Tipos Primitivos (aula 01)
### Formatando numeros em Java
https://www.alura.com.br/artigos/formatando-numeros-no-javascript

### Ordenando numeros no Javascript
https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona

**Atenção!** o JavaScript é case-sensitive, ou seja, diferencia maiúsculas e minúsculas.

### Tipos null e undefined

O **null** é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável. Já o tipo **undefined** representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).

 ## Declarando variáveis (aula 02)

 ### Var, let e const

 var -> funciona em qualquer parte do código.

 const -> A const é uma constante. Ou seja, uma vez que a colocamos no programa, não conseguimos alterá-la.

 ### Resuminho
- var tem um escopo global, então funciona em qualquer parte do código, o que pode gerar possíveis problemas em relação à lógica da aplicação.
- let e const têm escopo local, sendo assim, não podem ser acessadas em outros escopos, e const não pode ter seu valor alterado depois de definido.
- O JavaScript considera alguns valores como false durante comparações, como com null, undefined, 0, NaN e Strings vazias.
- null é usado quando não queremos dar um valor para uma variável, mas também não queremos deixá-lo como undefined (não definido).
- null é um objeto no JavaScript, diferente de undefined, que tem seu próprio tipo, e isso pode causar problemas se não tomarmos cuidado ao utilizá-lo.
- O JavaScript converte automaticamente entre tipos de valores, como números para texto e para booleanos, porém não é interessante deixá-lo fazer isso automaticamente, pois podem ocorrer erros.
- Temos como forçar uma mudança de tipo utilizando os métodos Number() e String(), onde Number() converte as variáveis para números ou NaN caso tenha algum erro na conversão, e String() converte as variáveis para texto.