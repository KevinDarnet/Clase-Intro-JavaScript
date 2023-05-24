//Variables let, var y const

// let nombre; // declaro la variable
// nombre = "kevin darnet"; // asigno el valor
// nombre = "kevin"; // reasignacion de valor
// //No puedo redeclarar con let
// console.log(nombre); // lo vemos en la consolas

// let alumno = "roberto"; // declaro y asigno valor

//let alumno = "kevin";

// Variable var, NO LA VAN A USAR, a menos que trabajen en un proyecto antiguo

// var auto; //declaración
// auto = "Fiat"; // asignación
// console.log(auto);
// var auto = "BMW"; // Re-declaración
// console.log(auto); // Re-asignación

//Variable const

// const DNI = 789546879; // Solo declaro y asigno, nada más.
// console.log(DNI);

//TIPOS DE DATOS

//STRING

// let mentora = "Flor"; //String con comillas dobles
// let mentora2 = "Cami"; //String con comillas simples ''
// let mentora3 = `Silvana`; //String con backtick

// console.log(mentora + " " + mentora2 + " " + mentora3);
// console.log(
//   `Estas son las mentoras del team: ${mentora} ${mentora2} ${mentora3}`
// );

// let edad = 29;
// let nombre = "Kevin";
// const HUMANO = true;

// /* console.log(
//   `Soy ${nombre}, tengo ${edad} y me dicen que soy humano: ${HUMANO}`
// ); */

// //NUMBER
// let numero = 29.5;

// //BOOLEAN
// let valor = true;
// let valor2 = false;

// //UNDEFINED
// let cohorte;
// console.log(cohorte); //Nos da undefined porque no está definido ningun valor.

// //NULL
// let program = null;
// console.log(program); //Es un valor nulo, vacío.

//OBJETO
// const PERSONA = {
//   nombre: "Kevin Darnet",
//   edad: 29,
//   colorCabello: "castaño oscuro",
//   bueno: true,
// };

// /* console.log(PERSONA.nombre);
// console.log(PERSONA.edad + 1); */

// let mascota = {
//   nombre: "roko",
//   edad: 5,
// };
// console.log(PERSONA.nombre);

// //ARRAY

// let frutas = ["manzana", "peras", "naranjas", "uvas", "kiwis", "mandarina"];

// console.log(frutas);
// console.log(frutas[1]);

// let fruits = [
//   { mandarina: true, dulce: false },
//   { manzana: true, dulce: true },
// ];

//SEGUNDA PARTE DEL WORKSHOP

//OPERADORES DE ASIGNACION
// let edad = 37;

// edad += 5; // esto es igual a edad = edad + 5

// // console.log(edad);

// //OPERADORES ARITMETICOS

// //SUMA

// let numero = 10;
// let numeroDos = 5;

// let resultado = numero + numeroDos;
// console.log(resultado);

// console.log(typeof resultado);

// console.log("------------------");

// //RESTA
// let numeroTres = 10;
// let numeroCuatro = 5;

// let resultadoResta = numero - numeroDos;
// console.log(resultadoResta);
// console.log(typeof resultado);
// console.log("------------------");

// //PRODUCTO O MULTIPLICACION
// let num = 10;
// let num2 = 5;

// let resultadoProducto = num * num2;
// console.log(resultadoProducto);
// console.log(typeof resultadoProducto);
// console.log("------------------");

// //DIVISION
// let num3 = 10;
// let num4 = 5;

// let resultadoDivision = num3 / num4;
// console.log(resultadoDivision);
// console.log(typeof resultadoDivision);
// console.log("------------------");

// //MODULO
// let numA = 15;
// let numB = 2;

// let resultadoModulo = numA % numB;
// console.log(resultadoModulo);
// console.log(typeof resultadoModulo);
// console.log("------------------");
// //EXPONENCIAL
// let numC = 15;
// let numD = 2;

// let resultadoExpo = numC ** numD;
// console.log(resultadoExpo);
// console.log(typeof resultadoExpo);
// console.log("------------------");

//OPERADORES DE COMPARACION
// let comparacion = 10 > 5;
// console.log(comparacion);

// let num1 = 10;
// let num2 = 1;
// let comp2 = num1 < num2;

// console.log(comp2);

// //== y ===
// console.log("------------------");
// let numUno = 10;
// let numDos = "10";
// let comparacion2 = numUno == numDos;
// console.log(comparacion2);

// console.log("------------------");

// let comparacion3 = numUno === numDos;
// console.log(comparacion3);

// // Distinto de y estrictamente distinto de ...
// console.log("------------------");

// let distintoDe = numUno != numDos;
// console.log(distintoDe);
// console.log("------------------");

// let distintoDe2 = numUno !== numDos;
// console.log(distintoDe2);

//OPERADORES LOGICOS

// &&
console.log("----OPERADORES LOGICOS-----");
let num = 10;
let num2 = 15;

let comp = num === num2 && num < 20;
// compara (sentencia 1) y (sentencia 2)
//             false     y   true

//          ESTO DA = FALSE
console.log(comp);
console.log("----------AMPERSAND &&--------");
console.log(comp);

let comp2 = true && true;
console.log(comp2, "si los dos VERDADEROS, la sentencia es verdadera");
console.log("------------------");
let comp3 = false && true;
console.log(comp3, "si es uno falso");

console.log("--------OR----------");
let comp4 = true || false;
console.log(comp4, "si es uno VERDADERO, la sentencia es verdadera");

console.log("----------! NOT --------");

let numerito = true;

let numerito2 = 5;
let numerito3 = 5;
let resultadoDos = numerito2 > 1 && numerito3 > 3;

console.log(!resultadoDos);
