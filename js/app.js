//  EJERCICIO JAVASCRIPT 1-------------------------------

// let actualDate = new Date();
// console.log(actualDate);
// let actualMonth = actualDate.getMonth();
// console.log("Mes actual:", actualMonth);
// switch (actualMonth) {
//   case 0:
//     console.log("Enero 31 dias");
//     break;
//   case 1:
//     console.log("Febrero 28 dias");
//     break;
//   case 2:
//     console.log("Marzo 31 dias");
//     break;
//   case 3:
//     console.log("Abril 30 dias");
//     break;
//   case 4:
//     console.log("Mayo 31 dias");
//     break;
//   case 5:
//     console.log("Junio 30 dias");
//     break;
//   case 6:
//     console.log("Julio 31 dias");
//     break;
//   case 7:
//     console.log("Agosto 31 dias");
//     break;
//   case 8:
//     console.log("Septiembre 30 dias");
//     break;
//   case 9:
//     console.log("Octubre 31 dias");
//     break;
//   case 10:
//     console.log("Noviembre 30 dias");
//     break;
//   case 11:
//     console.log("Diciembre 31 dias");
//     break;
//   default:
//     console.log("");
// }

// EJERCICIO JAVASCRIPT 2-------------------------------

// let userChoice = prompt("Introduce el nombre del mes");
// console.log(userChoice);
// switch (userChoice) {
//   case 0:
//     console.log("Enero".toLowerCase);
//     break;
//   case 1:
//     console.log("Febrero".toLowerCase);
//     break;
//   case 2:
//     console.log("Marzo".toLowerCase);
//     break;
//   case 3:
//     console.log("Abril".toLowerCase);
//     break;
//   case 4:
//     console.log("Mayo".toLowerCase);
//     break;
//   case 5:
//     console.log("Junio".toLowerCase);
//     break;
//   case 6:
//     console.log("Julio".toLowerCase);
//     break;
//   case 7:
//     console.log("Agosto".toLowerCase);
//     break;
//   case 8:
//     console.log("Septiembre".toLowerCase);
//     break;
//   case 9:
//     console.log("Octubre".toLowerCase);
//     break;
//   case 10:
//     console.log("Noviembre".toLowerCase);
//     break;
//   case 11:
//     console.log("Diciembre".toLowerCase);
//     break;
//   default:
//     console.log("that's not real month");
// }

// EJERCICIO JAVASCRIPT 3-------------------------------

// let temperature = prompt("¿Qué temperatura hace fuera?");
// console.log(temperature);
// switch (true) {
//   case temperature < 15:
//     alert("coge bufanda");
//     break;
//   case temperature >= 15 && temperature <= 25:
//     alert("vamos a pedregalejo");
//     break;
//   case temperature >= 25:
//     alert("cuélate en la piscina del vecino");
//     break;
//   default:
//     alert("pregúntale a Roberto Brasero");
// }

// EJERCICIO JAVASCRIPT 3 opcion 2 con IF y ELSE pendiente de revisar
// 
// let temperature = 0;
// temperature = prompt("¿Qué temperatura hace fuera?");

// if (temperature < 15) {
//     alert("coge bufanda")
//   }
//   else if (temperature >= 15 && temperature <= 25) {
//     alert("vamos a pedregalejo");
//   }
//   else if (temperature >= 25):
//     alert("cuélate en la piscina del vecino") {
// }
//   default:
//     alert("pregúntale a Roberto Brasero");
// }

// EJERCICIO JAVASCRIPT 4-------------------------------

// con opcion de negacion (!) que seria igual que false
// let isGreen = true;
// if (!isGreen) {
//     console.log("Cross the road");
// } else {
//     console.log("Please await");
// }
// con opcion simple
// let isGreen = true;
// if (isGreen) {
//     console.log("Cross the road");
// } else {
//     console.log("Please await");
// }

// EJERCICIO JAVASCRIPT 5-------------------------------

// let temperature = "Freezing point";
// switch (temperature) {
//   case "Absolute Zero":
//     console.log((-273.15 * 9) / 5 + 32);
//     break;
//   case "Freezing point":
//     console.log((0 * 9) / 5 + 32);
//     break;
//   case "Body temperature":
//     console.log((37 * 9) / 5 + 32);
//     break;
//   case "Boiling point":
//     console.log((100 * 9) / 5 + 32);
//     break;
//   default:
//     console.log("There are more grades in my beer!");
//     break;
// }

// EJERCICIO JAVASCRIPT 6-------------------------------

// let email = "tolkien@lordofrings.com";
// let password = "123456789";

// let userMail = prompt("Please, enter your mail");
// let userPassword = prompt("Please, enter your password");

// if (email == userMail && password == userPassword) {
//   alert("Welcome Mr Tolkien");
// } else {
//   alert("Wrong password or email");
// }

// EJERCICIO JAVASCRIPT 7-------------------------------

// let money = 1;
// let convertTo = "yen";
// let dollar = 1.10;
// let yen = 132.87;
// let libra = 0.83;
// let franco = 1.03;
// switch (convertTo) {
//   case "dollar":
//    console.log(money * dollar);
//     break;
//   case "yen":
//    console.log(money * yen);
//     break;
//   case "libra":
//    console.log(money * libra);
//     break;
//     case "franco":
//    console.log(money * franco);
//     break;
//   default:
//     console.log("sin blanca");
// }

// EJERCICIO EXTRA DE CLASE-------------------------------

// let calification = prompt("Please, enter your calification");
// console.log(calification);
// switch (parseInt(calification)) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     alert("la cagaste");
//     break;
//   case 5:
//     alert();
//     "la cagaste";
//     break;
//   case 6:
//     alert();
//     "aprobado";
//     break;
//   case 7:
//     alert();
//     "bien";
//     break;
//   case 8:
//     alert();
//     "notable";
//     break;
//   case calification >= 9 && calification <= 10:
//     alert();
//     "te vas pa Harvard";
//     break;
//   default:
//     alert();
//     "Introduce tu nota";
// }
// // EJERCICIO JAVASCRIPT 8-------------------------------

// let num1 = prompt("Please, enter the first number");
// let num2 = prompt("Please, enter the second number");
// let operation = prompt(
//   "Please, choose one option: add, substract, multiply, divide"
// );

// switch (operation) {
//   case "add":
//     alert(parseFloat(num1) + parseFloat(num2));
//     break;
//   case "substract":
//     alert(parseFloat(num1) - parseFloat(num2));
//     break;
//   case "multiply":
//     alert(parseFloat(num1) * parseFloat(num2));
//     break;
//   case "divide":
//     alert(parseFloat(num1) / parseFloat(num2));
//     break;
//   default:
//     alert("Choose a valid option");
//     break;
// }
// EJERCICIO JAVASCRIPT 9-------------------------------

// EJERCICIO JAVASCRIPT 10-------------------------------
