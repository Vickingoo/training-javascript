// FOUR SEASONS

// let actualDate = new Date();
// let actualMonth = actualDate.getMonth();

// if (actualMonth == 11 || actualMonth == 0 || actualMonth == 1) {
//   season = "Invierno";
// } else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
//   season = "Primavera";
// } else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
//   season = "Verano";
// } else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
//   season = "Otoño";
// } else {
//   season = "estación desconocida";
// }
// console.log(season);

// MOSTRANDO EL NOMBRE DEL MES
// let monthName = "";
// switch (actualMonth) {
//   case 0:
//     monthName = "Enero";
//     break;
//   case 1:
//     monthName = "Febrero";
//     break;
//   case 2:
//     monthName = "Marzo";
//     break;
//   case 3:
//     monthName = "Abril";
//     break;
//   case 4:
//     monthName = "Mayo";
//     break;
//   case 5:
//     monthName = "Junio";
//     break;
//   case 6:
//     monthName = "Julio";
//     break;
//   case 7:
//     monthName = "Agosto";
//     break;
//   case 8:
//     monthName = "Septiembre";
//     break;
//   case 9:
//     monthName = "Octubre";
//     break;
//   case 10:
//     monthName = "Noviembre";
//     break;
//   case 11:
//     monthName = "Diciembre";
//     break;
//   default:
//     monthName = "mes desconocido";
// }
// console.log(monthName);

// COMPRUEBA UN NÚMERO

// let number = 15;
// switch (true) {
//   case number < 0:
//     console.log("por debajo de 0");
//     break;
//   case number >= 0 && number <= 10:
//     console.log("entre 0 y 10");
//     break;
//   case number > 10 && number <= 20:
//     console.log("entre 10 y 20");
//     break;
//   case number > 20:
//     console.log("mayor que 20");
//     break;
//   default:
//     console.log("fuera de rango");
// }

// BUCLES "WHILE"
// contando de uno en uno

// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }

// contando de 2 en 2

// let n = 0;
// while (n < 10) {
//   n + 2;
//   console.log(n)
// }

// BUCLES "FOR"

// for (start = 0, end = 10; start <= end; start++) {
//   console.log(start);
// }

//MENU INTERACTIVO PARA COLORES HEX CON "DO"

// let option = null;
// let colors = ["rojo", "verde", "azul"];
// do {
//   console.log("Por favor, elige un color");
//   for (let index = 0; index < colors.length; index++) {
//     console.log(index + 1 + " => " + colors[index]);
//   }
//   console.log("Pulsa 0 para salir");
//   option = prompt("Haz tu elección");
//   switch (option) {
//     case "1":
//       console.log("%ccódigo Hex para color rojo: #FF0000", "color:#FF0000");
//       break;
//     case "2":
//       console.log("%ccódigo Hex para color verde: #008000", "color:#008000");
//       break;
//     case "3":
//       console.log("%ccódigo Hex para color azul: #0000FF", "color:#0000FF");
//       break;
//     default:
//       alert("Saliendo, adiós pringao");
//       break;
//   }
// } while (option != null && option != "0");

// opción 2-------------

// let result = "";
// let i = 0;
// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);
// console.log(result);

// opción 3-------------

// let i = 0;
// do {
//   i = i + 1; //también se puede poner i += 1;
//   document.write(i); //con document.write aparece en el navegador no en la consola
// } while (i < 5);
