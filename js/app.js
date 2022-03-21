// // FOUR SEASONS

// getting real month
// let actualDate = new Date();
// let actualMonth = actualDate.getMonth();

// if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
//   season = "Winter";
// } else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
//   season = "Spring";
// } else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
//   season = "Summer";
// } else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
//   season = "Autumn";
// } else {
//   season = "va ser que no";
// }
// console.log(season);

// //SHOW MONTH NAME

// let monthName = "";
// switch (actualMonth) {
//   case 0:
//     monthName = "January";
//     break;
//   case 1:
//     monthName = "February";
//     break;
//   case 2:
//     monthName = "March";
//     break;
//   case 3:
//     monthName = "April";
//     break;
//   case 4:
//     monthName = "May";
//     break;
//   case 5:
//     monthName = "June";
//     break;
//   case 6:
//     monthName = "July";
//     break;
//   case 7:
//     monthName = "August";
//     break;
//   case 8:
//     monthName = "September";
//     break;
//   case 9:
//     monthName = "October";
//     break;
//   case 10:
//     monthName = "November";
//     break;
//   case 11:
//     monthName = "December";
//     break;
//   default:
//     monthName = "unknown name";
// }
// console.log(monthName);

// //MARVEL ANTIHEROES

// let character = "Thor";
// switch (character) {
//   case "Captain America":
//     power = "Oldman in the world";
//     break;
//   case "Black Widow":
//     power = "She is a 'rumbera'";
//     break;
//   case "Iron man":
//     power = "Tesla man";
//     break;
//   case "Thor":
//     power = "Surfer beer adict";
//     break;
//   case "Spiderman":
//     power = "his friends, are Espidifrens 600mg";
//     break;
//   default:
//     console.log("Choose your antihero");
//     break;
// }
// console.log(power);

// //CHECK A NUMBER

// let number = 12;
// switch (true) {
//   case number < 0:
//     console.log("under 0");
//     break;
//   case number >= 0 && number <= 10:
//     console.log("between 0 and 10");
//     break;
//   case number > 10 && number <= 20:
//     console.log("between 10 and 20");
//     break;
//   case number > 20:
//     console.log("over 20");
//     break;
//   default:
//     console.log("out of range");
// }

//  EJERCICIO JAVASCRIPT 1

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

// EJERCICIO JAVASCRIPT 2

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

// EJERCICIO JAVASCRIPT 3
// let temperature = prompt("¿Qué temperatura hace fuera?");
// console.log(temperature);
// switch (true) {
//   case temperature < 15:
//     alert("coge bufanda");
//     break;
//   case temperature >= 15 && temperature <= 25:
//     alert("nos vamos a pedregalejo");
//     break;
//   case temperature >= 25:
//     alert("cuélate en la piscina del vecino");
//     break;
//   default:
//     console.log("pregúntale a Roberto Brasero");
// }

// EJERCICIO JAVASCRIPT 4 por completar

let semaforo = prompt ("")
console.log(semaforo);
switch (true) {
    case semaforo:
        console.log("isGreen")
    break;
    case semaforo:
        console.log("isRed")
    break;
}
