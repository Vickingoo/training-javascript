// -----------------TANDA DE EJERCICIOS 1-----------------

// EJERCICIO 1--------------------------------------------

// Solución con las funciones predefinidas
// let hoy = new Date();
// let diasEnElMesActual = new Date(
//   hoy.getFullYear(),
//   hoy.getMonth() + 1,
//   0
// ).getDate();
// console.log("Este mes tiene: ", diasEnElMesActual, " días");

// Solución sin funciones predefinidas

// let hoy = new Date();

// let tomarMesActual = hoy.getMonth();
// let respuesta = "El mes actual tiene: ";
// switch (1) {
//   case 0:
//     console.log(respuesta + 31 + " días");
//     break;
//   case 1:
//     console.log(respuesta + 28 + " días");
//     break;
//   case 2:
//     console.log(respuesta + 31 + " días");
//     break;
//   case 3:
//     console.log(respuesta + 30 + " días");
//     break;
//   case 4:
//     console.log(respuesta + 31 + " días");
//     break;
//   case 5:
//     console.log(respuesta + 30 + " días");
//     break;
//   case 6:
//     console.log(respuesta + 31 + " días");
//     break;
//   case 7:
//     console.log(respuesta + 31 + " días");
//     break;
//   case 8:
//     console.log(respuesta + 30 + " días");
//     break;
//   case 9:
//     console.log(respuesta + 31 + " días");
//     break;
//   case 10:
//     console.log(respuesta + 30 + " días");
//     break;
//   case 11:
//     console.log(respuesta + 31 + " días");
//     break;
//   default:
//     respuesta = "Mes desconocido";
//     console.log(respuesta);
//     break;
// }

// EJERCICIO 2--------------------------------------------

// Guardando un nombre de mes dado por el usuario

// let eleccionUsuario = prompt("Por favor, introduce un nombre de mes");
// console.log(eleccionUsuario);
// switch (eleccionUsuario.toLowerCase()) {
//   case "enero":
//     console.log(31);
//     // alert(31); //otra forma de mostrar el resultado mediante alert
//     break;
//   case "febrero":
//     console.log(28);
//     break;
//   case "marzo":
//     console.log(31);
//     break;
//   case "abril":
//     console.log(30);
//     break;
//   case "mayo":
//     console.log(31);
//     break;
//   case "junio":
//     console.log(30);
//     break;
//   case "julio":
//     console.log(31);
//     break;
//   case "agosto":
//     console.log(31);
//     break;
//   case "septiembre":
//     console.log(30);
//     break;
//   case "octubre":
//     console.log(31);
//     break;
//   case "noviembre":
//     console.log(30);
//     break;
//   case "diciembre":
//     console.log(31);
//     break;
//   default:
//     console.log("Eso no es un mes real");
//     break;
// }

// EJERCICIO 3--------------------------------------------

// let temp = prompt("¿Qué temperatura hace fuera?");
// console.log(typeof temp);
// switch (true) {
//   case temp < 15:
//     alert("¡Abrígate!");
//     break;
//   case temp <= 25:
//     alert("Disfruta del tiempo");
//     break;
//   case temp <= 38:
//     alert("¡Tómate un refresco!");
//     break;
//   case temp > 38:
//     alert("Estás en plena Feria de Málaga, ¡disfrútala!");
//     break;
//   default:
//     alert("Escribe un dato real");
//     break;
// }

// opción 2------------------

// let temp = prompt("¿Qué temperatura hace fuera?");
// console.log(typeof temp);
// if (temp < 15) {
//   alert("¡Abrígate!");
// } else if (temp <= 25) {
//   alert("Disfruta del tiempo");
// } else if (temp <= 38) {
//   alert("¡Tómate un refresco!");
// } else if (temp > 38) {
//   alert("Estás en plena Feria de Málaga, ¡disfrútala!");
// } else {
//   alert("Escribe un dato real");
// }

// EJERCICIO 4 (Semáforo) -------------------------------------------

// let estaVerde = true;
// if (estaVerde) {
// console.log("Puedes cruzar");
// } else {
//   console.log("Por favor espera");
// }

//usando el operador de negación

// let estaVerde = true;
// if (!estaVerde) {
// console.log("Por favor espera");
// } else {
//   console.log("Puedes cruzar");
// }

//Solución de Giovanna, comprueba si los minutos de la hora actual son pares o impares
//si son pares muestra mensaje de "Puedes cruzar"
//si son impares muestra mensaje de "Por favor espera"

// let fechaActual = new Date();
// let horaActual = fechaActual.getMinutes();
// console.log(horaActual);
// let estaVerde = horaActual % 2 == 0;
// switch (estaVerde) {
//   case true:
//     console.log("Puedes cruzar");
//     break;
//   case false:
//     console.log("Por favor espera");
//     break;
//   default:
//     console.log("¡Cuidado!, las luces de tráfico están averiadas");
//     break;
// }

// EJERCICIO 5 (Conversor de temperaturas) -------------------------------------------

// let temp = "Cero absoluto";
// switch (temp) {
//     case "Cero absoluto":
//       console.log("En ºF", (-273.15 * 9) / 5 + 32);
//       break;
//     case "Punto de congelación":
//       console.log("En ºF", (0 * 9) / 5 + 32);
//       break;
//     case "Temperatura corporal":
//       console.log("En ºF", (37 * 9) / 5 + 32);
//       break;
//     case "Punto de ebullición":
//       console.log("En ºF", (100 * 9) / 5 + 32);
//       break;
//     default:
//       console.log("¡Hay más grados en mi cerveza!");
//   }

// Solución de Erika

// const CELSIUS = prompt ("Escribe la temperatura en grados centígrados");
// let celsius = parseFloat(prompt("¿A cuántos grados Fahrenheit?"));
// const FAHRENHEIT = (celsius + 9) / 5 + 32;
// alert(`${CELSIUS} grados celsius es igual a ${FAHRENHEIT} grados fahrenheit`);

// EJERCICIO 6 (Login de usuario) -------------------------------------------

// let email = "tolkien@lordofrings.com";
// let password = "123asd";
// let userEmail = prompt("Por favor, introduce tu email");
// let userPassword = prompt("Por favor, introduce tu contraseña");

// if (email == userEmail && password == userPassword) {
//   alert("Bienvenido Sr. Tolkien");
// } else {
//   alert("email o contraseña equivocados")
// }

// Solución de Julio

// let email = prompt("Por favor, introduce tu email");
// let password = prompt("Por favor, introduce tu contraseña");

// if (email == "tolkien@lordofrings.com" && password == "123asd") {
//   alert("Bienvenido Sr. Tolkien");
// } else {alert(("email o contraseña equivocados"));
// }

// EJERCICIO 7 (Conversor de divisas) -------------------------------------------

// let dinero = 500;
// let convertirA = "dolar";
// let dolar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franco = 1.03;

// switch (convertirA) {
//   case "dolar":
//     console.log(`El valor de ${dinero}€ en dólares es: `, dinero * dolar);
//     break;
//   case "yen":
//     console.log(`El valor de ${dinero}€ en yenes es: `, dinero * yen);
//     break;
//   case "libra":
//     console.log(`El valor de ${dinero}€ en libras es: `, dinero * libra);
//     break;
//   case "franco":
//     console.log(`El valor de ${dinero}€ en francos es: `, dinero * frnaco);
//     break;
//   default:
//     console.log("Introduce una cantidad válida");
//     break;
// }

// EJERCICIO (Evaluando calificaciones, solución con switch)-------------------------------------------

// let calification = prompt("Por favor, introduce tus calificaciones:");
// switch (parseInt(calification)) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     alert("suspenso");
//     break;
//   case 5:
//     alert("aprobado");
//     break;
//   case 6:
//     alert("bien");
//     break;
//   case 7:
//   case 8:
//     alert("notable");
//     break;
//   case 9:
//   case 10:
//     alert("sobresaliente");
//     break;
//   default:
//     alert("fuera de rango");
// }

// EJERCICIO 8 (Calculadora manual)-------------------------------------------

// let num1 = parseFloat(prompt("Introduce el primer número"));
// let num2 = parseFloat(prompt("Introduce el segundo número"));
// let operacion = prompt(
//   "Elige una opción: sumar, restar, multiplicar o dividir"
// );
// switch (operacion) {
//   case "sumar":
//     console.log(num1 + num2);
//     break;
//   case "restar":
//     console.log(num1 - num2);
//     break;
//   case "multiplicar":
//     console.log(num1 * num2);
//     break;
//   case "dividir":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Elige una opción válida");
//     break;
// }

// Solución Kai (con if)

// let x = prompt("introduce el primer número");
// let y = prompt("Introduce el segundo número");
// let calculo = prompt("Elige una opción: +, -, *, /");
// if (calculo == "+") {
//   console.log(parseFloat(x) + parseFloat(y));
// } else if (calculo == "-") {
//   console.log(parseFloat(x) - parseFloat(y));
// } else if (calculo == "*") {
//   console.log(parseFloat(x) * parseFloat(y));
// } else if (calculo == "/") {
//   console.log(parseFloat(x) / parseFloat(y));
// } else {
//   console.log("Introduce valores válidos");
// }

// EJERCICIO 9 (DNI con códigos ASCII)-------------------------------------------

// let data = prompt("Introduce tu DNI o NIE:");
// // verifica la longitud de data
// if (data.length == 9) {
//   //comprueba si data empieza por X, Y o Z
//   if (
//     data.charCodeAt(0) == 88 ||
//     data.charCodeAt(0) == 89 ||
//     data.charCodeAt(0) == 90
//   ) {
//     //comprueba si el último char es una letra también
//     if (
//       data.charCodeAt(data.length - 1) >= 65 &&
//       data.charCodeAt(data.length - 1) <= 90
//     ) {
//       if (
//         //comprobando si la otra parte del string está rellenada por números
//         data.charCodeAt(1) >= 48 &&
//         data.charCodeAt(1) <= 57 &&
//         data.charCodeAt(2) >= 48 &&
//         data.charCodeAt(2) <= 57 &&
//         data.charCodeAt(3) >= 48 &&
//         data.charCodeAt(3) <= 57 &&
//         data.charCodeAt(4) >= 48 &&
//         data.charCodeAt(4) <= 57 &&
//         data.charCodeAt(5) >= 48 &&
//         data.charCodeAt(5) <= 57 &&
//         data.charCodeAt(6) >= 48 &&
//         data.charCodeAt(6) <= 57 &&
//         data.charCodeAt(7) >= 48 &&
//         data.charCodeAt(7) <= 57
//       ) {
//         console.log("NIE válido");
//       } else {
//         console.log("NIE inválido, comprueba tu NIE");
//       }
//     }
//   } else if (
//     //si el NIE falla entonces comprueba el DNI
//     data.charCodeAt(0) >= 48 &&
//     data.charCodeAt(0) <= 57 &&
//     data.charCodeAt(1) >= 48 &&
//     data.charCodeAt(1) <= 57 &&
//     data.charCodeAt(2) >= 48 &&
//     data.charCodeAt(2) <= 57 &&
//     data.charCodeAt(3) >= 48 &&
//     data.charCodeAt(3) <= 57 &&
//     data.charCodeAt(4) >= 48 &&
//     data.charCodeAt(4) <= 57 &&
//     data.charCodeAt(5) >= 48 &&
//     data.charCodeAt(5) <= 57 &&
//     data.charCodeAt(6) >= 48 &&
//     data.charCodeAt(6) <= 57 &&
//     data.charCodeAt(data.length - 1) >= 65 &&
//     data.charCodeAt(data.length - 1) <= 90
//   ) {
//     console.log("DNI válido");
//   } else {
//     console.log("DNI inválido, comprueba tu DNI");
//   }
// } else {
//   console.log("Por favor, introduce datos válidos");
// }

// Solución Fran (hay errores)

// let userDniNie = prompt("Introduce tu DNI o NIE");
// if (userDniNie.length == 9) {
//   let primerCaracter = userDniNie.charCodeAt(0);
//   let ultimoCaracter = userDniNie.charCodeAt(userDniNie.length - 1);
//   if (
//     //if NIE
//     (primerCaracter == 88 || primerCaracter == 89 || primerCaracter == 90) &&
//     !isNaN(userDniNie.substring(1, userDniNie.length - 1)) &&
//     ultimoCaracter >= 65 &&
//     ultimoCaracter <= 90
//   ) {
//     console.log("NIE correcto");
//   } else if (
//     // if DNI
//     !isNaN(
//       userDniNie.substring(0, userDniNie.length - 1) &&
//         ultimoCaracter >= 65 &&
//         ultimoCaracter <= 90
//     )
//   ) {
//     console.log("DNI correcto");
//   } else {
//     console.log("Tu DNI o NIE es inválido");
//   }
// }

// Solución Kai

// let identificacion = prompt("¿Se va a registarr con DNI o NIE?").toUpperCase();
// switch (identificacion) {
//   case "DNI":
//     var DNI = prompt("Introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("Te has registrado correctamente");
//     } else {
//       alert("DNI es inválido");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("Introduzca su NIE");
//     if (
//       NIE.charCodeAt(0) >= 88 ||
//       NIE.charCodeAt(0) >= 89 ||
//       NIE.charCodeAt(0) >= 90 ||
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//       alert("Te has registrado correctamente");
//     } else {
//       alert("NIE inválido");
//     }
//     break;
//   default:
//     alert("Opción incorrecta");
// }

// EJERCICIO 10 (Juego dados aleatorio)-------------------------------------------

// let max = 6;
// let min = 1;
// let randomNumber1 = (Math.floor(Math.random() * 10) % 6) + 1;
// let randomNumber2 = Math.floor(Math.random() * max) + min;
// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2) {
//   console.log("Jugador 1 gana");
// } else if (randomNumber1 < randomNumber2) {
//   console.log("Jugador 2 gana");
// } else {
//   console.log("Empate");
// }

// -----------------TANDA DE EJERCICIOS 2-----------------

// EJERCICIO 1 (Deletrear la palabra PALÍNDROMO)--------------------------------------------
// -----------opc 1--------------
// let text = "PALINDROMO";
// for(i = 0; text.length > i ; i++) {
//     console.log(text.charAt(i));
// }
// -----------opc 2--------------
// let text = "PALINDROM=";
// for (let number = 0; number <= text.length - 1; number++) {
//   console.log(`${number + 1}. ${text[number]}`);
// }
// console.log("letters quantity: ", text.length);

// EJERCICIO 2 (Palíndromo)--------------------------------------------

// let text = "NO LEMON, NO MELON";
// for (i = text.length; i >= 0; i--) {
//     console.log(text.charAt (i));
// }

// EJERCICIO 3 (4 líneas de 4 *)--------------------------------------------
// -----------opc 1--------------
// let texto = "";
// for (i = 0; i <= 3; i++) {
//     texto = texto + "\n"
//   for (j = 0; j < 4; j++) {
//     texto = texto + "*";
//   }
// }
// console.log(texto);

// -----------opc 2--------------
// let asterisks = "";
// for (let i = 0; i < 4 ; i++) {
//     asterisks +="* * * *\n";
// }
// console.log(asterisks);

// EJERCICIO 4 (Temperatura media)--------------------------------------------
// // -----------opc 1--------------
// let mediaTemp = 0;
// let counter = 0;
// for (let i= 18,
//     mar18 = 17,
//     mar19 = 17,
//     mar20 = 16,
//     mar21 = 14,
//     mar22 = 17,
//     mar23 = 15,
//     mar24 = 14;
//     i < 25;
//     i++, counter++) {
// mediaTemp += eval(`mar${i}`);
//     }
//     console.log("7-Day temp media: " , mediaTemp / counter);

// -----------opc 2-------------- (Jhony)
// let temp1 = 16.3;
// let temp2 = 18;
// let temp3 = 17;
// let temp4 = 17;
// let temp5 = 16;
// let temp6 = 14;
// let temp7 = 17;

// console.log((temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7) / 7);

// -----------opc 3-------------- (Kai)
// var t1, t2, t3, t4, t5, t6, t7, temperature;
// (t1 = 14.8),
//   (t2 = 14.6),
//   (t3 = 14.7),
//   (t4 = 14.3),
//   (t5 = 14.5),
//   (t6 = 14),
//   (t7 = 14),
//   (temperature = (t1 + t2 + t3 + t4 + t5 + t6 + t7) / 7);
// console.log(
//   `La temperatura media de la anterior semana fue de ${Math.floor(temperature)} ºC`);

// EJERCICIO 5 (Adivinar numero de 0 a 10)--------------------------------------------

// let toGuess = Math.floor(Math.random() * 11); //esto es para buscar un numero aleatorio
// console.log(toGuess);
// let attemps = 3;
// let userWon = false;
// console.log("¡Juguemos!");
// let userNumber = prompt("Introduce un número entre 0 y 10");
// while (attemps >= 0 && !userWon) {
//   if (toGuess == userNumber) {
//     alert("¡Tu ganas!");
//     userWon = true;
//   } else if (--attemps > 0) {
//     userNumber = prompt(`Inténtalo de nuevo, tienes ${attemps} intentos más`);
//   }
// }
// if (!userWon) {
//   alert("Se siente, prueba de nuevo");
// }

// EJERCICIO 6 (Generador de contraseñas) LEVEL NIGHTMARE--------------------------------------------

// let length = parseInt(prompt("Please enter the password length (8 - 16)"));
// length = length >= 8 && length <= 16 ? length : 8;

// let includeLowers = prompt(
//   "Would you like to include lowers (y for yes n for no)"
// ).toLowerCase();
// let withLowers = includeLowers == "n" ? false : true; //operador ternario ?, despues de operación boleana se introduce ? y si es true lo que hay a su izq se ejecuta el primer termino y si es false se ejecta el segundo termino

// let includeUppers = prompt(
//   "Would you like to include uppers (y for yes n for no)"
// ).toLowerCase();
// let withUppers = includeUppers == "n" ? false : true;

// let includeNumbers = prompt(
//   "Would you like to include numbers (y for yes n for no)"
// ).toLowerCase();
// let withNumbers = includeNumbers == "n" ? false : true;

// let includeSymbols = prompt(
//   "Would you like to include symbols (y for yes n for no)"
// ).toLowerCase();
// let withSymbols = includeSymbols == "n" ? false : true;

// !withLowers &&
//   !withUppers &&
//   !withNumbers &&
//   !withSymbols &&
//   (withLowers = !withLowers);
// let password = "";
// let repeatedChar = false;
// while (
//   (withLowers && !/a-z/.test(password)) || //expresión regular !/a-z/
//   (withLowers && !/A-Z/.test(password)) ||
//   (withLowers && !/0-9/.test(password)) ||
//   (withLowers &&
//     !/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|-|.|[/])+/.test(password)) ||
//   repeatedChar
// ) {
//   password = "";
//   repeatedChar = false;
//   for (let i = 0, newChar = false; i < length; i++) {
//     while (!newChar) {
//       switch (Math.floor(Math.random() * 4) + 1) {
//         case 1:
//           if (withLowers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (122 - 97 + 1)) + 97
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 2:
//           if (withUppers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (90 - 65 + 1)) + 65
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 1:
//           if (withNumbers) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (57 - 48 + 1)) + 48
//             );
//             newChar = !newChar;
//           }
//           break;
//         case 1:
//           if (withSymbols) {
//             password += String.fromCharCode(
//               Math.floor(Math.random() * (47 - 33 + 1)) + 33
//             );
//             newChar = !newChar;
//           }
//           break;
//       }
//     }
//     for (let i = 0; i < password.length - 1; i++) {
//       if (password[i] == password[i + 1]) {
//         repeatedChar = true;
//         break;
//       }
//     }
//   }
// }
// alert(`Your password: ${password}`);

