// // Imports
// import { numberGenerator } from "./utils.js";

// EJERCICIO 1-------------------------------------------

// const exercise1 = () => {
//   let minLimit = parseInt(prompt("Insert min number: "));
//   let maxLimit = parseInt(prompt("Insert max number: "));

//   let requiredNumbers = 20;
//   let randomNumbersList = new Array(requiredNumbers);

//   // const numberGenerator = (maxLimit, minLimit) =>
//   //   Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;

//   let minFound = maxLimit;
//   let maxFound = minLimit;
//   for (let i = 0, temp = 0; i < requiredNumbers; i++) {
//     temp = numberGenerator(maxLimit, minLimit);
//     randomNumbersList[i] = temp;
//     if (temp < minFound) {
//       minFound = temp;
//     }
//     if (temp > maxFound) {
//       maxFound = temp;
//     }
//   }
//   console.log(randomNumbersList);

//   console.log("Min value: ", minFound);
//   console.log("Max value: ", maxFound);
// };

// //Fran Solution--------------------------------
// // const exercise1 = () => {
// //   let min = parseInt(prompt("Write a minimun number"));
// //   let max = parseInt(prompt("Write a maximun number"));
// //   let loop = 20;
// //   let arrayGenerate = new Array(loop);
// //   for (let i = 0; i < loop; i++) {
// //     arrayGenerate[i] = generateRandomNumber(min, max);
// //   }
// //   //Sorting the array
// //   arrayGenerate.sort((a, b) => a - b);
// //   console.log(
// //     `min value: ${arrayGenerate[0]} \nmax value: ${
// //       arrayGenerate[arrayGenerate.length - 1]
// //     }`
// //   );
// // };
// //Julio solution-----------------------------
// // const exercise1 = () => {
// //     let minLim = parseInt(prompt(`Please insert the minimum numerical limit`));
// //     let maxLim = parseInt(prompt(`Please insert the maximum numerical limit`));
// //     let randNums = Array.from(
// //       { length: 20 },
// //       () => Math.floor(Math.random() * (maxLim - minLim + 1)) + minLim
// //     );
// //     console.log(
// //       `min value: ${Math.min(...randNums)} \nmax value: ${Math.max(...randNums)}`
// //     );
// //     console.log(randNums);
// //   };

// //Jorge solution-------------------------------
// // function exercise1() {
// //   let min;
// //   let max;
// //   // pedimos los valores mínimos y máximos
// //   for (let i = 0; i < 1; i++) {
// //     min = parseInt(prompt("Enter the minimum value"));
// //     max = parseInt(prompt("Enter the maximum value"));
// //     if (min > max) {
// //       alert("The minimum value can't be bigger than the maximum value");
// //       i--;
// //     }
// //   }

// //   // hacemos una función para llamar al random number
// //   const randomNumber = (max, min) =>
// //     Math.floor(Math.random() * (max - min + 1) + min);

// //   // creamos el array de 20
// //   let array = new Array(20);
// //   // le agregamos a cada hueco del array un valor aleatorio entre el mínimo y el máximo
// //   for (let i = 0; i < array.length; i++) {
// //     let num = randomNumber(max, min);
// //     array[i] = num;
// //   }
// //   console.log(`min value: ${Math.min(...array)}`);
// //   console.log(`max value: ${Math.max(...array)}`);
// // }
// // exercise1();

// // const exercise2 = () => {
// // Exercise 2: solution
// // let date = new Date();
// // let hour = date.getHours();
// // let minutes = date.getMinutes();
// // let hour = 5;
// // let minutes = 59;
// // console.log(hour,minutes);
// // if (hour >= 6 && minutes >= 0 && hour <= 11 && minutes <= 59) {
// //   alert("¡Buenos días!");
// // } else if (hour >= 12 && minutes >= 0 && hour <= 20 && minutes <= 59) {
// //   alert("¡Buenas tardes!");
// // } else if ((hour >= 21 && minutes >= 0) || (hour <= 5 && minutes <= 59)) {
// //   alert("¡Buenas noches!");
// // } else{
// //   console.log("system time is failing.");
// // }
// // Julio solution
// // new Date().getHours() >= 6 && new Date().getHours() < 12
// //   ? alert(`Buenos días`)
// //   : new Date().getHours() >= 12 && new Date().getHours() < 21
// //   ? alert(`Buenas tardes`)
// //   : alert(`Buenas noches`);
// // };
// // exercise2();

// // chained ternary operator
// // 2 + 2 == 7
// //   ? console.log("verdadero")
// //   : 1 + 1 == 2
// //   ? console.log("verdadero")
// //   : console.log("falso");

// EJERCICIO 3-------------------------------------------

// const exercise3 = () => {
//   // storing all letter and digit combinations
//   // for html color code
//   // const generateColor = () => {
//   //   let letters = "0123456789ABCDEF";
//   //   // html color code starts with #
//   //   let color = "#";
//   //   // generating 6 times as HTML color code consist
//   //   // of 6 letter or digits
//   //   for (let i = 0; i < 6; i++) {
//   //     color += letters[Math.floor(Math.random() * 16)];
//   //   }
//   //   return color;
//   // };
//   // for (let i = 1; i <= 10; i++) {
//   //   console.log("%cHello World!",`color: ${generateColor()}`);
//   // }

//   //alternative solution
//   setInterval(() => {
//     for (let i = 1; i <= 10; i++) {
//       console.log(
//         "%cHello World!",
//         `color: #${Math.floor(Math.random() * 16777215).toString(16)}`
//       );
//     }
//   }, 100);
// };

// // exercise3();

// EJERCICIO 4-------------------------------------------

// const exercise4 = () => {
//   let validLetters = [
//     "T",
//     "R",
//     "W",
//     "A",
//     "G",
//     "M",
//     "Y",
//     "F",
//     "P",
//     "D",
//     "X",
//     "B",
//     "N",
//     "J",
//     "Z",
//     "S",
//     "Q",
//     "V",
//     "H",
//     "L",
//     "C",
//     "K",
//     "E",
//   ];

//   // console.log(validLetters[22]);
//   let dni = prompt("Please, enter your DNI: ");
//   let numbers = dni.substring(0, dni.length - 1);
//   let letter = dni.substring(dni.length - 1);
//   // console.log(letter);
//   if (validLetters[parseInt(numbers) % 23] == letter) {
//     alert("Valid DNI");
//   } else {
//     alert("The data entered is wrong");
//   }

//   const dniGenerator = () => {
//     let randomNumber = Math.floor(
//       Math.random() * (100000000 - 10000000) + 10000000
//     );
//     randomNumber += validLetters[randomNumber % 23];
//     return randomNumber;
//   };
//   for (let index = 0; index < 100; index++) {
//     console.log(dniGenerator());
//   }
// };

// // exercise4();

// EJERCICIO 5-------------------------------------------

// const exercise5 = () => {
//   let platesNumber = prompt("Please, insert a number to generate:");
//   // let plate = "";
//   // // numbers
//   // const numbersGenerator = () => {
//   //   let number = Math.floor(Math.random() * 10000);
//   //   // if (number < 10) {
//   //   //   plate = "000" + number;
//   //   // } else if (number < 100) {
//   //   //   plate = "00" + number;
//   //   // } else if (number < 1000) {
//   //   //   plate = "0" + number;
//   //   // } else {
//   //   //   plate = number.toString();
//   //   // }

//   //   // Giovanna solution
//   //   number = number.toString();
//   //   let numberLength = number.length;
//   //   for (let i = 0; i < 4 - numberLength; i++) {
//   //     number = "0" + number;
//   //   }
//   //   plate = number;
//   //   // console.log(plate);
//   // };
//   // const letterGenerator = () => {
//   //   const validChars = [
//   //     "B",
//   //     "C",
//   //     "D",
//   //     "F",
//   //     "G",
//   //     "H",
//   //     "J",
//   //     "K",
//   //     "L",
//   //     "M",
//   //     "N",
//   //     "P",
//   //     "R",
//   //     "S",
//   //     "T",
//   //     "V",
//   //     "W",
//   //     "X",
//   //     "Y",
//   //     "Z",
//   //   ];

//   //   //letters
//   //   for (let index = 0; index < 3; index++) {
//   //     plate += validChars[Math.floor(Math.random() * validChars.length)];
//   //   }
//   // };
//   // for (let index = 0; index < platesNumber; index++) {
//   //   numbersGenerator();
//   //   plate += " ";
//   //   letterGenerator();
//   //   console.log(plate);
//   //   // plate = "";
//   // }

//   // Tomasz solution-------------------------
//   for (let index = 0; index < platesNumber; index++) {
//     var array = [];
//     var text = [];
//     var letter = "BCDEFGHIJKLMNPRSTUVWXYZ";

//     for (var i = 0, t = 4; i < t; i++) {
//       array.push(Math.round(Math.random() * 9));
//     }
//     for (var i = 0; i < 3; i++) {
//       text += letter.charAt(Math.floor(Math.random() * letter.length));
//     }

//     document.write(
//       `<p>Here we have registration for your new car!: ${array.join(
//         ""
//       )} ${text}</p>`
//     );
//     console.log(
//       `Here we have registration for your new car!: ${array.join("")} ${text}`
//     );
//   }
// };
// // exercise5();

// EJERCICIO 6-------------------------------------------

// const exercise6 = () => {
//   let quotes = [
//     "The purpose of our lives is to be happy. — Dalai Lama",
//     "Life is what happens when you’re busy making other plans. — John Lennon",
//     "Get busy living or get busy dying. — Stephen King",
//     "You only live once, but if you do it right, once is enough. — Mae West",
//     "Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison",
//     "If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein",
//     "Never let the fear of striking out keep you from playing the game.– Babe Ruth",
//     "Money and success don’t change people; they merely amplify what is already there. — Will Smith",
//     "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs",
//     "Not how long, but how well you have lived is the main thing. — Seneca",
//     "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
//     "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.– Henry Ford",
//     "In order to write about life first you must live it.– Ernest Hemingway",
//     "The big lesson in life, baby, is never be scared of anyone or anything.– Frank Sinatra",
//     "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth. – (Attributed to various sources)",
//     "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. – Leo Burnett",
//     "Life is not a problem to be solved, but a reality to be experienced.– Soren Kierkegaard",
//     "The unexamined life is not worth living. — Socrates",
//     "Turn your wounds into wisdom. — Oprah Winfrey",
//     "The way I see it, if you want the rainbow, you gotta put up with the rain. —Dolly Parton",
//   ];

//   //   console.log(quotes.length);
//   let start = new Date();
//   let end = null;
//   setTimeout(() => {
//     clearInterval(intervalId);
//     end = new Date();
//     console.log(
//       "Operation took " + (end.getTime() - start.getTime()) + " msec"
//     );
//   }, 1000 * 120);
//   let intervalId = setInterval(() => {
//     console.log(quotes[Math.floor(Math.random() * quotes.length)]);
//   }, 10000);
// };
// // exercise6();

// EJERCICIO 7-------------------------------------------

// const exercise7 = () => {
//   let numbers = new Array(100);
//   for (let index = 0; index < numbers.length; index++) {
//     numbers[index] = Math.floor(Math.random() * 501);
//   }
//   numbers = numbers.filter((number) => number % 2 === 0);
//   numbers = numbers.sort((a, b) => b - a);
//   console.log(numbers);
// };
// // exercise7();

// EJERCICIO 8-------------------------------------------

// const exercise8 = () => {
//   let clubs = [
//     "ACE",
//     "KING",
//     "QUEEN",
//     "JACK",
//     "10",
//     "9",
//     "8",
//     "7",
//     "6",
//     "5",
//     "4",
//     "3",
//     "2",
//   ];
//   let suits = ["clubs", "hearts", "spades", "diamonds"];
//   let hearts = [...clubs];
//   let spades = Array.of(...clubs);
//   let diamonds = Array.from(clubs);

//   // Benjamin solution for creating arrays
//   // const deck = [
//   //   ["spades", "clubs", "diamonds", "hearts"],
//   //   ["ACE", "KING", "QUEEN", "JACK", 10, 9, 8, 7, 6, 5, 4, 3, 2],
//   // ];

//   // diamonds[0] = "test";
//   // console.log(diamonds);
//   // console.log(clubs);
//   let balance = 500;
//   let bet = 0;
//   let minimunBet = 5;
//   let continuePlaying = false;

//   do {
//     do {
//       bet = parseInt(prompt("How much do you want to bet?"));
//       if (bet > balance) {
//         alert("Sorry, your bet is higher than your available balance.");
//         alert(`Maximum available: ${balance}`);
//       }
//       if (bet < minimunBet) {
//         alert("Sorry, your bet is lower than the minimun required.");
//         alert(`Mininum required: ${minimunBet}`);
//       }
//     } while (bet > balance || bet < minimunBet);
//     let card1 = Math.floor(Math.random() * clubs.length);
//     let card2 = Math.floor(Math.random() * clubs.length);
//     let suit1 = suits[Math.floor(Math.random() * suits.length)];
//     let suit2 = "";
//     do {
//       suit2 = suits[Math.floor(Math.random() * suits.length)];
//     } while (card1 == card2 && suit1 == suit2);
//     console.log(
//       `${eval(suit1)[card1]} ${suit1} vs. ${eval(suit2)[card2]} ${suit2}`
//     );
//     if (card1 < card2) {
//       balance += bet;
//       alert("You win!");
//     } else if (card1 > card2) {
//       balance -= bet;
//       alert("You lose");
//     } else {
//       alert("Draw");
//     }
//     if (balance >= minimunBet) {
//       continuePlaying =
//         prompt("Would like to continue playing").toLowerCase() == "y";
//     }
//   } while (continuePlaying && balance >= minimunBet);
//   alert(`Betting benefits: ${balance - 500} €`);
//   alert(`Total balance: ${balance} €`);
// };

// exercise8();

// EJERCICIO 9-------------------------------------------

// const exercise9 = (encode, text) => {
//   const cipher = (encode, text) => {
//     if (encode) {
//       // encode
//       text = [...text].map((letter) => {
//         switch (letter.charCodeAt(0)) {
//           // uppers
//           case 88: // x
//             return String.fromCharCode(65);
//           case 89: // y
//             return String.fromCharCode(66);
//           case 90: // z
//             return String.fromCharCode(67);
//           //lowers
//           case 120: // x
//             return String.fromCharCode(97);
//           case 121: // y
//             return String.fromCharCode(98);
//           case 122: // z
//             return String.fromCharCode(99);
//           //whitespace
//           case 32:
//             return String.fromCharCode(32);
//           // the rest of letters
//           default:
//             return String.fromCharCode(letter.charCodeAt(0) + 3);
//         }
//       });
//     } else {
//       // decode
//       text = [...text].map((letter) => {
//         switch (letter.charCodeAt(0)) {
//           // uppers
//           case 65:
//             return String.fromCharCode(88);
//           case 66:
//             return String.fromCharCode(89);
//           case 67:
//             return String.fromCharCode(90);
//           //lowers
//           case 97:
//             return String.fromCharCode(120);
//           case 98:
//             return String.fromCharCode(121);
//           case 99:
//             return String.fromCharCode(122);
//           case 32:
//             return String.fromCharCode(32);

//           default:
//             return String.fromCharCode(letter.charCodeAt(0) - 3);
//         }
//       });
//     }
//     console.log(text.join(""));
//   };
//   cipher(encode, text);
// };

// // exercise9(true, "Atacar al amanecer");
// // exercise9(false, "wrgdb zloo eh d juhdw gdb");
