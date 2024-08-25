// * crear un comentario en el código y colocar la url del lenguaje escogido.
//    https://www.javascript.com

// * Representar diferentes sintaxis de comentario en javascript
// Est es un comentario de una linea

/*
Este es otro
comentario de 
varias lineas
*/

// Crea variables representando todos los tipos de datos primitvos de javascript
// var myVariable // Declara una variable de ámbito global
// let myVariable // Declara una variable de ámbito de bloque
// const myConstante = 3.14 // Declara un nombre de constante de sólo lectura y ámbito de bloque

// let bool = true
//  let _null = null
//  let _undefined = undefined
//  let num = 14
//  let pi = 3.14
//  let bigint = 123456789876543234567n
// let str = "Hola Mundo"

// Imprime por la terminal  el texto: 'Hola , y el nombre del lenguaje javascritp'

//console.log('Hola javascritp');

/*   Operadores y estructuras de control  */

// Crea ejemplos utilizando todos los tipos de operadores de javascript

let n1 = 3
let n2 = 6

// Operadores de comparación
console.log(3 == n1); // Igual
console.log(n1 != 4); // No es igual
console.log('3' === n1); // Estrictamente igual
console.log(n1 !== '3'); // Desigualdad estricta
console.log(n1 > n2); // Mayor que
console.log(n1 >= n1); // Mayor o igual que
console.log(n1 > n2); // Menor que
console.log(n1 <= n2); // Menor o igual que

// Operadores aritméticos
console.log(n1 + n2); // Suma
console.log(n1 - n2); // Resta
console.log(n1 * n2); // Multiplicación
console.log(n1 / n2); // División
console.log(n1 % n2); // Residuo
console.log(n1++); // Incremento
console.log(n1--); // Decremento

// Operadores lógicos
let p = 8;
let q = 3;

let resultado1 = (p > q) && (q > 0);  // true && true => true
console.log(resultado1);  // Salida: true

let resultado2 = (p < q) || (q > 0);  // false || true => true
console.log(resultado2);  // Salida: true

let resultado3 = !(p < q);  // !false => true
console.log(resultado3);  // Salida: true

let m = false;
let n = true;
let o = false;

let resultado4 = m || n && o;  // false || true && false => false || false => false
console.log(resultado4);  // Salida: false

let resultado5 = !(m || (n && o));  // !(false || (true && false)) => !(false || false) => !false => true
console.log(resultado5);  // Salida: true

// Operadores de cadena
let r = 'JavaScript'
console.log("Hola mundo desde " + r); // Operador de concatenación

let s = 'Java'
s += 'Script' // Operador de concatenación abreviada
console.log(s);

// Operador condicional (Ternario)
let edad = 18
let resultado = edad >= 18 ? 'Es mayor de edad.' : 'Es menor de edad.'
console.log(resultado);