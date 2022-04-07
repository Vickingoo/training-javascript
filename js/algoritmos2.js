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
