'use strict';

// var leftBorderWidth = 1;
// let second = 2;
// console.log(second);

// let persone = {
//     name: "Arsen",
//     age: 26,
//     city: "Ekaterinburg",
//     profession: "karate"
// };
// console.log(persone.profession);

// let arr = ['lendrush.jpg', 'owl.png', 'nature.svg'];
// console.log(arr[1]);

// let answer = confirm("are you well?")
// console.log(answer);

// let answer = prompt("are you 18 year?", "");
// console.log(answer);

// if (5+5 == 10) {
//     console.log("Ճիշտ է!")
// } else {
//     console.log("Սխալ է!")
// }

// let num = 50;

// if (num < 49) {
//     console.log("Սխալ է!");
// } else if (num > 100) {
//     console.log("Շատ է!");
// } else {
//     console.log("Ճիշտ է!!");
// }

// switch (num) {
//     case num < 49:
//         console.log("Սխալ է!");
//         break;
//     case num > 100:
//         console.log("Շատ է!");
//         break;
//     case 50:
//         console.log("Ճիշտ է!");
//         break;
//     default:
//         console.log("Մի բան այն չէ!");
//         break;
// }


// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//        continue;
//     }
//     console.log(i);
// }

//     Function
// let num = 20;

// function showFirstMessage (text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// let calc = (a, b) => a + b

// console.log(calc(4, 7));
// console.log(calc(3, 7));

// function retVar() {
//     let num = 50;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.3"
// console.log(Math.round(twelve));

// function first() {
//     setTimeout( function() {
//         console.log(1);
//         }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("I am learn " + lang);
//     callback();
// }

// learnJS("JavaScript", function() {
//     console.log("I am learn two lesson");
// });


// Object
// let options = {
//     width: 950,
//     height: 950,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.color = {
//     border: "black",
//     bg: "red"
// };

// delete options.height;

// console.log(options);

// for (let key in options) {
//     console.log("property " + key + " matters " + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 4, 5];

// // arr.pop();
// // arr.push("tigr");
// // arr.shift();
// // arr.unshift(6);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ": " + item + " property: " + mass);
// });
// console.log(arr);

// let mass = [1, 3, 5, 8, 0];

// for (let key of mass) {
//     console.log(key);
// };

// let ans = prompt("", ""),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// let arr = [1, 15, 6, 4 ,3],
//     i = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }
// console.log(arr);

// let arr = [20, 50, 340];
    
// console.log(arr);

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//     this.age = "25";
//     this.lastname = "tryo";
// }
  
// let user = new User("jonh");
// alert(user.lastname);

// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//       alert( "Меня зовут: " + this.name );
//     };
// }

// let vasya = new User("Vasya");
// vasya.sayHi();

// let karmen = new User("kartol");
// karmen.sayHi();
  

  
// let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?");
//     time = prompt("Введите дату в формате YYYY-MM-DD");

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt("Ваш бюджет на месяц?"); 
//     }
// }
// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,
//     chooseExpenses: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                 b = prompt("Во сколько обойдется?", "");
        
//             if ( (typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null
//                 && a != "" && b != "" && a.length < 50) {
//                 console.log("done");
//                 appData.expenses[a] = b;
//             } else {
//                 i = i - 1;
//             }
//         }
//     },
//     detectDayBudget: function() {
//         appData.moneyPerDay = (appData.budget / 30).toFixed();
//         alert("ежедневный бюджет: " + appData.moneyPerDay);
//     },
//     detectLevel: function() {
//         if (appData.moneyPerDay < 100) {
//             console.log("минимальный уровень достатка");
//         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//             console.log("средний уровень достатка");
//         } else if (appData.moneyPerDay > 2000) {
//             console.log("высокий уровень достатка");
//         } else {
//             console.log("произошла ошибка");
//         }
//     },
//     checkSavings: function() {
//         if (appData.savings == true) {
//             let save = +prompt("какова сума накоплений?"),
//                 percent = +prompt("Под какой процент?");
    
//             appData.monthIncome = save/100/12*percent;
//             alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//         }
//     },
//     chooseOptExpenses: function() {
//         for (let i = 1; i < 3; i++) {
//             let opt = prompt("Статья необязательных расходов?", "");
//             appData.optionalExpenses[i] = opt;
//         }
//     },
//     chooseIncome: function() {
//         let items = prompt("Что принесет дополнытельный доход? (перечислите через запятую)", "");
//         appData.income = items.split(", ");
//         appData.income.push(prompt("Может что то еще?"));
//         appData.income.sort();
//     }
// };


// let a = 9,
//     b = 8,
//     c = 16;

// if (a <= b && a <= c) {
//     console.log(a);
// } else if(b <= a && b <= c) {
//     console.log(b);
// } else if(c <= a && c <= b) {
//     console.log(c);
// }

// if(a == 1 || b == 1 || c == 1) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(a == 2 && b == 2 || a == 2 && c == 2 || b == 2 && c == 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//     console.log(1);
// } else {
//     console.log(2);
// }

// if(b == a + 2 && c == b + 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(b == a * 2 && c == b * 2) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let a = 21,
//     b = 56,
//     c = 23,
//     d = 18;

// if(a + b == c + d || b + c == a + d  || a + c == b + d) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(a == b + c + d || b == a + c + d || c == a + b + d || d == a + b + c) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(a % 2 == 1 && b % 2 == 1 || c % 2 == 1 && d % 2 == 1 
//     || b % 2 == 1 && c % 2 == 1 || a % 2 == 1 && d % 2 == 1 
//     || a % 2 == 1 && c % 2 == 1 || b % 2 == 1 && d % 2 == 1) {  
//         console.log(1);
// } else {
//         console.log(2);
//     }

// let t = "174",
//     f = "a";
  
// if(t[0] === t[1] || t[0] === t[2] || t[1] === t[2]) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(+t[0] + +t[1] == t[2]) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(t[0] <= t[1] && t[0] <= t[2]) {
//     console.log(t[0]);
// } else if(t[1] <= t[0] && t[1] <= t[2]) {
//     console.log(t[1]);
// } else if(t[2] <= t[0] && t[2] <= t[1]) {
//     console.log(t[2]);
// }

// if(+t[0] + +t[1] < 5) {
//     console.log(f);
// } else {
//     console.log("b");
// }


// var arr = [2, 32, 33, 45, 55, 6];

// for(let i = 0; i < arr.length; i++) {
//     if(!(arr[i] % 2 )) {
//         console.log(arr[i]);
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 4 == 3 && arr[i] > 3) {
//         console.log(arr[i]);
//     }
// }

// let box = document.getElementById('box');

// console.log(box);

let arr = [5, 10, 18];

function push(arr, item) {
    arr[arr.length] = item;
}
push(arr, 5);

console.log(arr);



// let num = 13.4;

// function f(item) {

// }