// tipos de dados

//boolean
console.log(true, false);

//Undefined and Null
console.log(undefined, null);

//number
console.log(1, 1.89, 2.998e8);
console.log(Infinity, -Infinity, NaN);

//Strings
console.log('Matheus Fernando', "Melissa");

//adicionar aspas simples em uma palavra
console.log("Mc Donald's");
console.log('"lorem lorem"');

//permite pular linha
console.log(`matheus fernando
fernado matheus
`);

//symbols - unico e imutavel
console.log(Symbol('My name'));

//Valores considerados falsos no Js
/**
 * 0, -0, null, false, NaN, undefined, ""
 */


//Operações sobre dados
//Operadores lógicos (&&, ||, !)
console.log(true && false, true || false, !false);

//operadores aritméticos
console.log('soma: ', 1 + 2);
console.log('subtração ', 2 - 1);
console.log('multiplicação', 3 * 3);
console.log('divisão: ', 8 / 4);
console.log('modeulo: ', 8 % 3);
console.log('potencia: ', 2 ** 8);

//operadores de igualdade
//mesmo valor
console.log("==", 3 == 4, 4 == 4);
//mesmo valor
console.log("!=", 3 != 4, 4 != '4');
//mesmo tipo e mesmo valor
console.log("===", 3 === '3', '4' === '4');
console.log("!==", 3 !== 4, 4 !== 4);

//operadores relacionais
console.log("<", 3 < 4);
console.log("<=", 3 <= 4);
console.log(">", 3 > 4);
console.log(">", 3 >= 4);
console.log("<", 'a' < 'c');

//operador de concatenação
console.log("matheus" + "fernando");
console.log("matheus" + 3);

//operadores unários
console.log(typeof(10));
console.log(!false);
console.log(-10);

//operador ternário
console.log( (10 > 15) ? "Matheus" : "João");


//variaveis
var idade = 10, nome = "João", sobrenome = "Pedro";

console.log('A idade de ' + nome + ' é ' + idade);

idade += 10;

//shift + alt + a = adicionar comentário em um bloco de texto no vscode
//ctrl + ; adicionar comentário em uma unica linha

var texto = `A idade de ${nome} é ${idade}`;
console.log(texto);

//let e const
let id = 10;
const PI = 3.14; //não pode ter seu valor alterado







