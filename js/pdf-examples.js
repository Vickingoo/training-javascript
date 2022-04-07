//Four seasons

//getting real month
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
//   season = "unknown season";
// }
// console.log(season);

// //show month name
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
//     break;7
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
//     monthName = "unknown month";
// }
// console.log(monthName);

// // Check a number
// let number = 10;

// switch (true) {
//   case number < 0:
//     console.log("Under 0");
//     break;
//   case number >= 0 && number <= 10:
//     console.log("Between 0 and 10");
//     break;
//   case number > 10 && number <= 20:
//     console.log("Between 10 and 20");
//     break;
//   case number > 20:
//     console.log("Over 20");
//     break;
//   default:
//     console.log("Out of range");
// }

// Loops
// counting by one to one
// let count = 9;
// while (count < 10) {
//   console.log(++count);
// count++;
// count = count + 1;
// count += 1;
// }
// Counting back
// let counter = 10;
// while (counter >= 2) {
//   console.log(counter--);
// }
// console.log("El programa seguiría por aquí");
// let monthDays = new Date(2022, 3, 0).getDate();
// let firstDay = new Date("March 1, 2022").getDay();
// console.log(firstDay);
// //March calendar
// let day = 1;
// while (day <= monthDays) {
//   console.log(day);
//   day++;
// }

// counting 2 by 2
// let number = 0;
// while(number <= 1000){
//   console.log(number);
//   // number = number + 2;
//   number += 2;
// }

// For loop
// let count = 0;
// while(count < 10){
//   console.log(count++);
// }
// let start, end;
// for (start = 0, end = 1000; start < end; start++, end--) {
//   console.log(start, " ", end);
// }
// console.log("Showing values after finishing the loop");
// console.log(start, " ", end);
// let userValue = prompt("Enter your value: ");
// for (let num = 1; num <= 10; num++) {
//   console.log(`${userValue} x ${num} = ${userValue * num}`);
// }

// Random numbers loop
// let max = 90;
// let min = 0;
// for (let index = 0; index < 100; index++) {
//   console.log(Math.floor(Math.random() * max) + min);
// }

// let num = 0;
// let counter = 0;
// for (let i = 0; i < 1000; i++) {
//   console.log(`iteration ${++counter}`);
//   num = Math.floor(Math.random() * (max - min + 1) + min);
//   if (num == 0) {
//     console.log("num aleatorio: ", num);
//     break;
//   }
// }

// let text = "palindrome";
// let target = "d";
// let counter = 0;

// for (let i = 0; i < text.length; i++) {
//   console.log(`iteration ${++counter}`);
//   if (text[i] == target) console.log("letter found");
//   break;
// }

// let isPrime = true;
// let num = 19;
// let counter = 0;
// for (let start = 2, end = 1000000000, isPrime = true; start < end; start++) {
//   //in each iteration of the above for
//   // the for inside runs from start to end
//   for (let i = 2; i < start && isPrime == true; i++) {
//     // console.log(`nested for, iteration ${++counter}`);
//     if (start % i == 0) {
//       //   console.log("The number " + start + " is not a prime, divisible by: ", i);
//       isPrime = false;
//       //   break;
//     }
//   }
//   if (isPrime) {
//     console.log(`the number ${start} is prime`);
//   } else {
//   console.log(`with else ${++counter}`);
//   isPrime = !isPrime;
//   }
//   console.log(`above for, iteration ${++counter}`);
// }

// showing even numbers
// for (let num = -1, max = 100, counter = 0; num < max; num++) {
//   if (num % 2 != 0){
//     continue;
//   }
//   console.log(`${num}`);
//   console.log(`iteration ${++counter}`);
//     console.log("iteration " + ++counter);
// }
// interactive menu for hex colors

// interactive menu for hex colors
// let option = null;
// let colors = ["red", "green", "blue", "purple"];
// do {
//   console.log("Please, choose a color");
//   for (let index = 0; index < colors.length; index++) {
//     console.log(index + 1 + " => " + colors[index]);
//   }
//   console.log("Press 0 to leave");
//   option = prompt("Make your choice");
//   switch (option) {
//     case "1":
//       console.log("%cHex code for red: #FF0000", "color:#FF0000");
//       break;
//     case "2":
//       console.log("%cHex code for green: #008000", "color:green");
//       break;
//     case "3":
//       console.log("%cHex code for blue: #0000FF", "color:blue");
//       break;
//       case "4":
//         console.log("%cHex code for purple: #531253", "color:#531253");
//         break;
//     default:
//       console.log("Exiting, see you soon!");
//       break;
//   }
// } while (option != null && option != "0");

// Object literal syntax
// let star = {
//   name: "Polaris",
//   constellation: "Ursa Minor",
//   type: "Double/Cepheid",
//   spectralClass: "F7",
//   mag: 2.0,
// };

// Escribe un objeto person, que contenga, nombre, apellidos,
// edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono

// let person = {
//   name: "John",
//   lastName: "Doe",
//   age: 30,
//   address: {
//     streetType: "Boulevard",
//     streetName: "Larios",
//     num: 53,
//     cp: 54321,
//     location: "Málaga",
//   },
//   phone: "+34 678 543 210",
// };

// person.address.location = "Madrid";
// console.log(person);

// person.phone = {
//   1: "+34 678 543 210",
//   2: "+34 678 543 211",
//   3: "+34 678 543 212",
// };

// console.log(person);

// Crear un objeto llamado login con las propiedades y valores respectivamente.
// id => Un número hexadecimal
// state => {logged => verdadero o falso, onLine => verdadero o falso}
// userName => "nombre"
// loginAt: => fecha y hora

// let login = {
//   id: "0afbc357de69f",
//   state: {
//     logged: false,
//     onLine: false,
//   },
//   userName: "Jane",
//   loginAt: "2022/03/28 18:15:30",
// };

// Modifica el objeto person, para que incluya un email y una contraseña
// Una vez hechos los cambios, pide por prompt ambos datos y modifica el objeto login
// según estos datos sea o no correctos.
// alert de bienvenida refiriendo el nombre

// person.email = "john@doe.com";
// person.password = "1234";
// console.log(person);
// let userEmail = prompt("Please, enter your email:");
// let userPass = prompt("Please, enter your password:");

// if (userEmail == person.email && userPass == person.password) {
//   login.state.logged = true;
//   login.state.onLine = true;
//   let loginInfo = new Date();
//   let year = loginInfo.getFullYear();
//   let month = loginInfo.getMonth()+1;
//   let day = loginInfo.getDate();

//   let hour = loginInfo.getHours();
//   let minutes = loginInfo.getMinutes();
//   let seconds = loginInfo.getSeconds();
//   // loginAt: "2022/03/28 18:15:30",
//   let completeDate = `${year}/`;
//   if (month < 10) {
//     completeDate += `0${month}/`;
//   } else {
//     completeDate += `${month}/`;
//   }
//   if (day < 10) {
//     completeDate += `0${day} `;
//   }else {
//     completeDate += `${day} `;
//   }
//   if (hour<10) {
//     completeDate += `0${hour}:`;
//   } else {
//     completeDate += `${hour}:`;
//   }
//   if (minutes<10) {
//     completeDate += `0${minutes}:`;
//   } else {
//     completeDate += `${minutes}:`;
//   }
//   if (seconds<10) {
//     completeDate += `0${seconds}`;
//   } else {
//     completeDate += `${seconds}`;
//   }
//   login.loginAt = completeDate;
//   alert(`Welcome ${person.name}, you logged in correctly.`);
// } else {
//   alert("Your login data are incorrect.");
// }
// let x = 5;
// let y = x;
// y = 7;

// let hero = {
//   character: "Iron Man",
//   character: "Thor",
//   name: "Tony Stark",
// };
// let hero2 = {
//   character: "Hulk",
//   name: "Bruce Banner",
// };

// console.log(hero.character);

7;
// let shoppingCart = new Object();
// shoppingCart.shoe1 = new Object();
// shoppingCart.shoe1.product_id = 0;
// shoppingCart.shoe1.name = "Nike Air max";
// shoppingCart.shoe1.price = "150$";
// shoppingCart.shoe1.quantity = "1";
// shoppingCart.shoe2 = new Object();
// shoppingCart.shoe2.product_id = 1;
// shoppingCart.shoe2.name = "Nike Air force";
// shoppingCart.shoe2.price = "110$";
// shoppingCart.shoe2.quantity = "5";
// shoppingCart.shoe3 = new Object();
// shoppingCart.shoe3.product_id = 2;
// shoppingCart.shoe3.name = "Nike Air jordan";
// shoppingCart.shoe3.price = "170$";
// shoppingCart.shoe3.quantity = "4";
// shoppingCart.shoe4 = new Object();
// shoppingCart.shoe4.product_id = 3;
// shoppingCart.shoe4.name = "Nike Air";
// shoppingCart.shoe4.price = "190$";
// shoppingCart.shoe4.quantity = "2";
// let shoe1 = `id: ${shoppingCart.shoe1.product_id}, name: ${shoppingCart.shoe1.name},
// price: ${shoppingCart.shoe1.price}, quantity: ${shoppingCart.shoe1.quantity}`;
// let shoe2 = `id: ${shoppingCart.shoe2.product_id}, name: ${shoppingCart.shoe2.name},
// price: ${shoppingCart.shoe2.price}, quantity: ${shoppingCart.shoe2.quantity}`;
// let shoe3 = `id: ${shoppingCart.shoe3.product_id}, name: ${shoppingCart.shoe3.name},
// price: ${shoppingCart.shoe3.price}, quantity: ${shoppingCart.shoe3.quantity}`;
// let shoe4 = `id: ${shoppingCart.shoe4.product_id}, name: ${shoppingCart.shoe4.name},
// price: ${shoppingCart.shoe4.price}, quantity: ${shoppingCart.shoe4.quantity}`;
// // console.log(`${shoe1}\n${shoe2}\n${shoe3}\n${shoe4}`);
// // loops solution
// for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//   for (
//     let j = 0;
//     j < Object.keys(shoppingCart[Object.keys(shoppingCart)[i]]).length;
//     j++
//   ) {
//     console.log(`${Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]}:
// ${
//   shoppingCart[Object.keys(shoppingCart)[i]][
//     Object.keys(shoppingCart[Object.keys(shoppingCart)[i]])[j]
//   ]
// }
// `);
//   }
// }

// shoppingCart = {
//   0: {
//     product_id: 0,
//     name: "Nike Air max",
//     price: "150$",
//     quantity: "1",
//   },
//   1: {
//     product_id: 1,
//     name: "Nike Air force",
//     price: "160$",
//     quantity: "5",
//   },
//   2: {
//     product_id: 2,
//     name: "Nike Air jordan",
//     price: "170$",
//     quantity: "9",
//   },
//   3: {
//     product_id: 3,
//     name: "Nike Air",
//     price: "180$",
//     quantity: "2",
//   },
// };
// for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//   let id = shoppingCart[i].product_id;
//   let name = shoppingCart[i].name;
//   console.log("id: ", id, " name: ", name);
// }

// let original = [1, 2, 3];
// let originalIncreased = [0, ...original, 4];
// console.log(originalIncreased);
// let copy = [...original];
// console.log(copy);
// copy[copy.length -1] = 4;
// console.log(copy);
// console.log(original);
// let greeting = [..."Hello World!"];
// console.log(greeting);

// let elements = new Array();
// let single = Array.of(10);
// console.log(typeof elements);

// Giovanna solution
// let shoppingCart = {};
// shoppingCart.product01 = {
//   product_id: 1525,
//   name: "Flowers",
//   price: "$55.3",
//   quantity: 4,
//   color: "Yellow",
// };
// shoppingCart.product02 = {
//   product_id: 2534,
//   name: "Bag",
//   price: "$140.5",
//   quantity: 8,
// };
// shoppingCart.product03 = {
//   product_id: 4387,
//   name: "Shirt",
//   price: "$24.0",
//   quantity: 2,
// };
// shoppingCart.product04 = {
//   product_id: 3344,
//   name: "Shoes",
//   price: "$67.2",
//   quantity: 1,
//   color: "Black",
//   discount: "15%",
// };
// let itemText = "";
// let arrayItemsInCart = Object.keys(shoppingCart);
// // console.log(`arrayItemsInCart:`);
// // console.log(arrayItemsInCart);
// let objectPropertiesOfItem;
// let arrayPropertiesOfItem;
// for (let i = 0; i < arrayItemsInCart.length; i++) {
//   itemText = ` >`;
//   // We can access shoppingCart.product01 using the format: shoppingCart["product01"]
//   objectPropertiesOfItem = shoppingCart[arrayItemsInCart[i]];
//   // console.log(`objectPropertiesOfItem:`);
//   // console.log(objectPropertiesOfItem);
//   arrayPropertiesOfItem = Object.keys(objectPropertiesOfItem);
//   // console.log(`arrayPropertiesOfItem:`);
//   // console.log(arrayPropertiesOfItem);
//   for (let j = 0; j < arrayPropertiesOfItem.length; j++) {
//     itemText += ` ${arrayPropertiesOfItem[j]}: ${
//       objectPropertiesOfItem[arrayPropertiesOfItem[j]]
//     },`;
//   }
//   console.log(itemText);
// }

// let checking = ["foo", "bar", "baz", "qux"];
// let mixedChecking = Array.from(checking.entries());
// console.log(mixedChecking);

// let numbers = [3, 9, 8, 1, 4];
// for (let index = 0; index < numbers.length - 2; index++) {
//   for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       aux = numbers[j];
//       numbers[j] = numbers[j + 1];
//       numbers[j + 1] = aux;
//     }
//   }
// }
// console.log(numbers);

// let numbers = [1, 2, 3];
// numbers.forEach(
//   (num)=>{
//     console.log(num);
//   }
// );
// [..."Soberano de Angmar en tiempos pasados"].reverse().forEach((letter) => {
//   console.log("pos -> " + index + " " + letter);
// });

// let num1 = 2;
// let num2 = 10;
// let num3 = 15;
// // declaration
// function sumar(num1,num2,num3 = 10) {
//   let greeting = "hello";
//   console.log(num3);
//   return num1+num2;
// }
// // console.log(greeting);
// // (num1,num2) => num1+num2;

// // calling
// sumar(5,7);
// sumar(1,1);
// sumar(8,8);

