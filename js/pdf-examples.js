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

// OBJETOS Y ARRAYS---------------------------

// Object literal syntax

// let star = {
//   name: "Polaris",
//   constellation: "Ursa Minor",
//   type: "Double/Cepheid",
//   spectralClass: "F7",
//   mag: 2.0,
// };
// console.log(star);

// Escribe un objeto person, que contenga, nombre, apellidos,
// edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono

let person = {
  name: "Fulanito",
  lastName: "Menganito",
  age: 50,
  address: {
    streetType: "calle",
    streetName: "esperanza",
    num: 7,
    cp: 29000,
    location: "Málaga",
  },
  phone: "+34 600 600 600",
};
person.address.location = "Madrid";

person.phone = {
  1: "+34 600 600 600",
  2: "+34 600 600 601",
  3: "+34 600 600 602",
};
console.log(person);

// Crear un objeto llamado login con las propiedades y
// valores respectivamente
// id => un número hexadecimal
// state => {logged => verdadero o falso, onLine => verdadero o falso}
// userName => "nombre"
// loginAt: => fecha y hora

let login = {
  id: "0afbc357de69f",
  state: {
    logged: false,
    onLine: false,
  },
  userName: "John Connor",
  loginAt: "2022/03/28 18:15:30",
};

// Modificar el objeto person, para que incluya un email y una contraseña
// una vez hechos los cambios pide por prompt ambos datos y modifica el objeto login
// segun estos datos sea o no correctos
// alert de bienvenida refiriendo el nombre

person.email = "john@doe.com";
person.password = "1234";
console.log(person);
let userEmail = prompt("Please, enter your email:");
let userPass = prompt("Please, enter your password:");

if (userEmail == person.email && userPass == person.password) {
  login.state.logged = true;
  login.state.onLine = true;
  let loginInfo = new Date();
  let year = loginInfo.getFullYear();
  let month = loginInfo.getMonth() + 1;
  let day = loginInfo.getDate();

  let hour = loginInfo.getHours();
  let minutes = loginInfo.getMinutes();
  let seconds = loginInfo.getSeconds();
  // loginAt: "2022/03/28 18:15:30",
  let completeDate = `${year}/`;
  if (month < 10) {
    completeDate += `0${month}/`;
  } else {
    completeDate += `${month}/`;
  }
  if (day < 10) {
    completeDate += `0${day} `;
  } else {
    completeDate += `${day} `;
  }
  if (hour < 10) {
    completeDate += `0${hour}:`;
  } else {
    completeDate += `${hour}:`;
  }
  if (minutes < 10) {
    completeDate += `0${minutes}:`;
  } else {
    completeDate += `${minutes}:`;
  }
  if (seconds < 10) {
    completeDate += `0${seconds}`;
  } else {
    completeDate += `${seconds}`;
  }
  login.loginAt = completeDate;
  alert(`Welcome ${person.name}, you logged in correctly.`);
} else {
  alert("Your login data are incorrect.");
}

// OBJETOS------------------------
let hero = {
  character: "Iron Man",
  name: "Tony Stark",
  powers: [
    "Genius-levelñ intellect",
    "Multiple powered armor suits",
    "Ability to fly",
  ],
  info: {
    yearCreated: 1963,
    powerOrigin: "From his suit",
    Weapons: ["repulsor rays", "uni-beam projector", "lasers"],
    didYouKnow:
      "Tony Stark created and built one pf Spider-Man's upgraded suits know as the Iron Spider Suit. We got a small glimpse of it in Spider-Man: Homecoming!",
  },
};

// EJERCICIO OBJETOS----------------

let shoppingCart = {
  product1: {
    product_id: "1",
    name: "Nike Vomero 16",
    price: "150,00 €",
    quantity: "3",
  },
  product2: {
    product_id: "2",
    name: "Nike Air Pegasus 38",
    price: "120,00 €",
    quantity: "5",
  },
  product3: {
    product_id: "3",
    name: "Asics Gel Nimbus 20",
    price: "100,00 €",
    quantity: "3",
  },
  product4: {
    product_id: "4",
    name: "Mizuno Wave Shadow",
    price: "70,00 €",
    quantity: "6",
  },
};console.log();
