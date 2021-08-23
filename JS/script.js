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

// arr.pop();
// arr.push("tigr");
// arr.shift();
// arr.unshift(6);

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

// let arr = [5, 10, 18];

// function push(arr, item) {
//     if(!Array.isArray(arr)) {
//        throw 'First argument is not an instance of Array';
//     }

//     arr[arr.length] = item;
// }
// push(36);


// let num = '-45.7';
//
// function floor(num) {
//     if(typeof num !== "number" && typeof num !== "string" || !isFinite(num)) {
//         return +num;
//     }
//
//     num = +num;
//
//     if(num % 1 === -0) {
//         return +num;
//     } else if(num < 0) {
//         let remain = -num % 1;
//         num = -num + (-remain) + 1;
//         return -num;
//     }
//
//     const remain = num % 1;
//     num = num - remain;
//     return num;
// }
//
// // var num = '-58.98766';
// //
// function ceil(num) {
//     if(typeof num !== "number" && typeof num !== "string" || !isFinite(num)) {
//         return +num;
//     }
//
//     num = +num;
//
//     if(num < 0) {
//         let rem = -num % 1;
//         num = -num + (-rem);
//         return -num;
//     } else if(num % 1 === 0) {
//         return +num;
//     }
//
//     const remain = num % 1;
//     num = num - remain + 1;
//
//     return num;
// }



// let num = 6.7;
//
// function round(num) {
//     if(typeof num !== "number" && typeof num !== "string" || !isFinite(num)) {
//         return +num;
//     }
//
//     num = +num;
//
//     if(num % 1 === 0) {
//         return +num;
//     } else if(num % 1 >= 0.5) {
//         const remain = num % 1;
//         num = num - remain + 1;
//         return num;
//     } else if(num % 1 < 0.5 && num >= 0) {
//         const remain = num % 1;
//         num = num - remain;
//         return num;
//     } else if(num % 1 <= -0.51) {
//         const remain = num % 1;
//         num = num - remain - 1;
//         return num;
//     }
//
//     const remain = num % 1;
//     num = num - remain;
//     return num;
// }

// function round(num) {
//     const remain = num % 1;
//
//     if (remain < 0.5 && num >= 0 || remain < -0.5 && remain < 0) {
//         return floor(num);
//     } else {
//         return ceil(num);
//     }
// }


// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     fony = document.querySelectorAll('.fony'),
//     wraper = document.querySelector('.wraper');
//
// box.style.backgroundColor = 'yellow';
// btn[1].style.backgroundColor = 'aqua';
// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';
// fony[0].style.backgroundColor = 'red';

// for(let i = 0; i < fony.length; i++) {
//     fony[i].style.backgroundColor = 'pink';
// }

// fony.forEach(function (item, i, fonys) {
//     item.style.backgroundColor = 'blue';
// });
//
// let div = document.createElement('div'),
//     text = document.createTextNode('funy');
//
// div.classList.add('grey');

// div.innerHTML = 'hello';
// circle[0].innerHTML = 'tyty';
// box.innerHTML = '<h1>barev</h1>';
// div.textContent = 'barev';

// document.body.appendChild(div);
// wraper.appendChild(div);
// document.body.insertBefore(div, circle[1]);
// document.body.removeChild(btn[0]);
// wraper.removeChild(fony[0]);
//
// document.body.replaceChild(btn[1], circle[1]);
//
//
// console.log(div);

// var arr = [1, 34, 34234, {a: 23}, [323, 44], true];
// console.log(arr);
// arr.length = 2;



// let btn = document.getElementsByTagName('button');
//     btn[0].style.backgroundColor = 'red';

// btn[0].onclick = function () {
//     alert('you pressed the first button․');
// };

// btn[0].addEventListener('click', function(event) {
//     let target = event.target;
//     target.style.display = 'none';
//     // console.log('exel e iradardzutyun: ' + event.type + ' elementi vra ' + event.target);
//     // alert('you pressed the first button․');
//     // alert('you pressed the two button․');
// });

// btn[0].addEventListener('mouseenter', function () {
//     alert('you pressed the first button․');
// });

// function f() {
//     var myProp = 24;
//     console.log(myProp);
// }
// f();

// for(let i = 0; i < 1; i++) {
//    let a = +prompt('greq tiv');
//    if(a < 100) {
//        i = i - 1;
//    } else if(a >= 100) {
//        console.log('done');
//    }
// }


// console.log(a);
// var a = 30;
//
//
// let b = 30;
// console.log(b);

// f();
// function f() {
//     alert('hello');
// }

// f1();
// var f1 = function () {
//     alert();
// }
//
//
// var f1 = function () {
//     alert();
// }
// f1();


// if(a) {
//     var test = 100;
// }
// console.log(test);

// console.log(test);
// if(a) {
//     var test = 100;
// }

// if(a) {
//     let test = 100;
// }
// console.log(test);

// if(a) {
//     let test = 100;
//     console.log(test);
// }

// if(a) {
//     const test = 100;
//     console.log(test);
// }


// let arr = [34, 'str'];
//
// arr.length = arr.push(46, 89, true)
// console.log(arr.length, arr);

// let arr = [88, 67, 89, 67, 90];
// arr = arr.shift()
// console.log(arr);

// let arr = [56, 89, 543, 900];
// arr = arr.pop();
// console.log(arr);

// let arr = [45, 78, 900, 343];
// arr = arr.slice();
// console.log(arr);

// let arr = [45, 78, 900, 343];
// arr = arr.slice();
// console.log(arr);


// let arr = [45, 78, 900, 343, true, 'str'];
// arr = arr.slice(4, 6);
// console.log(arr);


// let arr = [1, 2, 3, 4, 5],
//     arrCopy = [];
//
// for(let i = 0; i < arr.length; i++) {
//     arrCopy.push(arr[i]);
//     console.log(arrCopy);
// }

// arr.forEach(function(arr){
//     arrCopy.push(arr);
//     console.log(arrCopy);
// });


// const items = ['item1', 'item2', 'item3']
// const copy = ['item0']
//
// // до
// for (let i = 0; i < items.length; i++) {
//     copy.push(items[i])
//     console.log(copy);
// }

// function logArrayElements(element, index, array) {
//     console.log('a[' + index + '] = ' + element);
// }
//
// [2, 5, 7, 9].forEach(logArrayElements);
//
// let arr = [10, 20, 30, 40, 50];
//
// function arrayItems(item, index, array) {
//     console.log('Element['+ index + '] = ' + item);
//
// }
// arr.forEach(arrayItems);


// let arr = [5, 15, 'str'];
//
// function slice(num, item) {
//     if(num === Infinity) {
//         return [];
//     } else if(num === true) {
//         arr.shift();
//         return arr;
//     }
//
//
//     let arrCopy = arr;
//     return arrCopy;
// }


// let mass = [15, 25, 35, 45, 55, 67, 'str']
// function f(numArr) {
//     // for(let i = 0; i < mass.length; i++)
//     // console.log(`${mass[i]} * 2 = ${ mass[i] * 2}`);
//     for (let i of mass) {
//         console.log(`${i} * 2 = ${i * 2}`);
//     }
// }
// f();


// function numbers(numArr) {
//     for(let i = 0; i < numArr.length;  i++) {
//         // console.log(num[i]);
//         console.log(numArr[i] + ' * 2 =' + numArr[i] * 2)
//     }
//
//     // for (const num of numArr) {
//     //     console.log(`${num} * 2 = ${num * 2}`);
//     // }
//
//
// }
//
// numbers([10, 20, 30, 40]);

// function numbers(a, b, ...num) {
//     // for (let i = 0; i < arguments.length; i++) {
//     //     console.log(`${arguments[i]} * 2 = ${arguments[i] * 2}`)
//     // }
//     console.log(`${a} + ${b} = ${a + b}`)
//     for (const item of num) {
//         console.log(`${item} * 2 = ${item * 2}`);
//     }
//
//     // for (const num of arguments) {
//     //     console.log(`${num} * 2 = ${num * 2}`)
//     // }
// }
//
// numbers(10, 20, 30, 40, true)


// function f(fn, a, b) {
//     console.log(fn(a, b))
// }
//
// function calc(a, b) {
//     return a + b;
// }
// f(calc, 45, 789);


// function num(item, a, b) {
//     console.log(item(a, b));
// }
//
// function calc(a, b) {
//     return a * b;
// }
//
// num(calc, 5, 3);



// let a = 25,
//     b = 4589;
//
// function f(item) {
//     console.log(a + b);
// }
// f();

// function learnJS(lang, callback) {
//     console.log('Ես սովորում եմ' + lang)
//     callback();
// }
//
// function done() {
//     console.log('Ես սովորում եմ 2րդ դասը');
// }
// learnJS('JavaScript', done);

// function f1() {
//     setTimeout(function () {
//         console.log('apple');
//     })
// }
//
// function f2() {
//     console.log('banana')
// }
//
// f1();
// f2();

// function learnJS(lang, callback, leon) {
//     console.log('Ես սովորում եմ' + lang);
//     callback();
//     leon();
// }
//
// learnJS('Javascript', function () {
//     console.log('Ես սովորում եմ 2րդ դասը');
// }, function () {
//     console.log('es hay em');
// });

// function f(book, leon) {
//     console.log('Ես սովորում եմ ' + book);
//     leon();
// }
// f('H. Tumanyan', function () {
//     console.log('ttt');
// });

// let mass = [56, 78];
// function push(arr, ...numbers) {
//     for (const num of numbers) {
//         arr[arr.length] = num;
//     }
// }
//
// push(mass, 78, 90, 45, true);
// console.log(mass);


// let arr = [50, 60, 70, 'str', true, {a: 'str'}];
// let arrCopy = arr.slice()
// // let arrCopy1 = [...arr];
//
// arr[0] = 89;
// arrCopy[5].a = 'yyy';
// console.log(arr);
// console.log(arrCopy);

// let arr = [{a: 50}, [25, 35, 'str']];
// // let arrCopy = arr.slice()
// // let arrCopy = [...arr];
//
// // arr[0].a = 570;
// // console.log('arr', arr);
// // console.log('arrCopy', arrCopy);
//
// let arrDeepCopy = JSON.parse(JSON.stringify(arr));
//
// arr[0].a = 670;
// console.log(arr);
// console.log(arrDeepCopy);

// function f(a) {
//     a = 25;
// }
//
// let b = 670;
// f(b);
// console.log(b);

// function f(a) {
//     a.name = 'Karen';
//     a.age = 70;
// }
//
// let b = {name: 'Gurgen'};
// f(b);
// console.log(b);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
// arr[10] = 'ttt';
// // arr.length = 3;
// arr.push(676, 787, -90);
// console.log(arr);
// console.log(arr.length);


// Stack
// let a = 15;
// let b = a;
// let c = a
// a = 679;
//
// console.log(b);
// console.log(c);
// console.log(a);

// Heap

// let arr = [25, 35, 55];
// let arrCopy = arr;
// arr[0] = 'string';
// console.log('arr = ', arr);
// console.log('arrCopy = ', arrCopy);

// let home = {
//     tree: 14,
//     apple: 5,
//     name: 'jhon'
// }
// home.bool = true;
// home.color = 'green';
// delete home.tree;
// home['age'] = 24;
// home[345] = 'yugu'
// console.log(home);

// for(let key in home) {
//     console.log('ays ' + key + ' uni ' + home[key]);
// }
//
// console.log(Object.keys(home).length);

// let user = {
//     name: 'Karlen',
//     age: 28,
//     'likes birds': true
// };
//
// user.isAdmin = true;
// user['my hone'] = false;
// delete user.age;
// delete user['my hone'];
// console.log(user);

// const user = {
//     name: 'jhon',
//     age: 42
// };
//
// user.age = 44;
// console.log(user.age);

// let user = {
//     name: 'jhon',
//     age: 25
// };
//
// let key = prompt("yyy tt uuu", 'name');
// alert(user[key]);

// let fruit = prompt("Какой фрукт купить?", "apple");
//
// let bag = {
//     [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
//
// alert( bag.apple );


// function fruits(apple, persi) {
//     return {
//         apple: apple,
//         persi: persi
//     };
// }
//
// let fruits1 = fruits(89, 888);
// console.log(fruits1.persi);

// let user = {
//     name: 'Artyom',
//     age: 29,
//     city: 'Artashat'
// }
//
// console.log('age' in user);
// console.log('city' in user);
// console.log('country' in user);


// let user = {
//     name: 'Karen',
//     age: 29,
//     country: 'Armenia',
//     city: 'Artashat',
//     'small cat': 77788
// };
//
// user.fisrtName = 'Mnacakanyan';
// console.log(user);
// delete user.country;
// console.log(user);
// user['small cat'] = 8898;
// console.log(user);
// user['apple'] = 'red';
// console.log(user);
// delete user['small cat'];
// console.log(user);


// const user = {
//     name: 'Vardan',
//     age: 41
// };
//
// user.name = 'Valod';
// console.log(user);


// let fruit = prompt("Какой фрукт купить?", "apple");
//
// let bag = {
//     [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
//
// alert( bag.apple );


// let codes = {
//     "+49": "Германия",
//     "41": "Швейцария",
//     "+44": "Великобритания",
//     // ..,
//     "+1": "США"
// };
//
// for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
// };

// let user = {name: 'jhon'};
//
// function f(obj) {
//  for(let key in obj) {
//      return false;
//  };
//
//  return true;
// }
//
// f();

// let a = 2 + 2;
//
// switch (a) {
//     case 3:
//         alert( 'Маловато' );
//         break;
//     case 4:
//         alert( 'В точку!' );
//         break;
//     case 5:
//         alert( 'Перебор' );
//         break;
//     default:
//         alert( "Нет таких значений" );
// }

// let age = prompt("Сколько Вам лет?", 18);
//
// let welcome = (age < 18) ?
//     () => alert('Привет') :
//     () => alert("Здравствуйте!");
//
// welcome();


// let a = 1,
//     b = 2;
// let result = (a + b < 4) ? 'malo': 'mnogo';
// alert(result);


// function checkAge(age) {
//    return (age > 18) ? true : confirm('exav');
//
// }
//
// checkAge();


// function checkAge(age) {
//     return (age > 18) || confirm('tandz');
// }
//
// checkAge();


// Копирование объектов и ссылки

// let user = {
//     name: 'karen',
//     age: 24
// };
//
// let clone = {};
//
// for(let key in user) {
//     clone[key] = user[key];
// }
// clone.name = 'Vaspur';
//
// console.log(user);
// console.log(clone);

// let user = {name: 'Karen'};
//
// let admin1 = {age: 45};
// let admin2 = {city: 'Artashat'};
//
// Object.assign(user, admin1, admin2);
//
// user.city = 'Erevan';
// console.log(user);

// let user = {
//     name: 'Karlen',
//     age: 28,
//     city: 'Artashat'
// };
//
// let clone = Object.assign({}, user);
//
// console.log(clone);



// Методы объекта, "this"

// let user = {
//     name: "Джон",
//     age: 30
// };
//
// user.sayHi = function() {
//     alert("Привет!");
// };
//
// user.sayHi();


// let user = {
//     name: 'Karen',
//     age: 24
// };
//
// // сначала объявляем
// function sayHi() {
//     alert("Привет!");
// }
//
// // затем добавляем в качестве метода
// user.sayHi = sayHi;
//
// user.sayHi(); // Привет!


// let user = { name: "Джон" };
// let admin = { name: "Админ" };
//
// // function sayHi() {
// //     alert( this.name );
// // }
// // user.f = sayHi;
// // admin.f = sayHi;
// //
// // user.f();
// // admin.f();
//
// user = {
//     sayHi: function() {
//         alert("Привет");
//     }
// };
// user.sayHi();


// let user = {
//     name: "Джон",
//     age: 30,
//
//     sayHi() {
//         alert( user.name ); // приведёт к ошибке
//     }
//
// };
//
//
// let admin = user;
// user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.
//
// admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!


// let user = { name: "Джон" };
// let admin = { name: "Админ" };
//
// function sayHi() {
//     alert( this.name );
// }
//
// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;
//
// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)
//
// admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)


// let user = {
//     name: "Джон",
//     hi() { alert(this.name); },
//     bye() { alert("Пока"); }
// };
//
// user.hi(); // Джон (простой вызов метода работает хорошо)
//
// // теперь давайте попробуем вызывать user.hi или user.bye
// // в зависимости от имени пользователя user.name
// (user.name === "Джон" ? user.hi : user.bye)();


// let user = {
//     name: "Джон",
//     hi() { alert(this.name); }
// };
//
// let hi = user.hi;
// hi();

// let obj, method;
//
// obj = {
//     go: function() { alert(this); }
// };
//
// obj.go();               // (1) [object Object]
//
// (obj.go)();             // (2) [object Object]
//
// method = obj.go();    // (3) undefined
//
// obj.go || obj.stop();


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello ' + this.name);
//     };
// }
//
// User.prototype.exit = function (name) {
//     console.log('Bajanord ' + this.name + 'y' + ' gnacel e:');
// }
//
// let karen = new User('Karen', 555),
//     vaspur = new User('Vaspur', 777);
//
// console.log(karen);
// console.log(vaspur);
//
// karen.exit();


// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//
//     hello() {
//         console.log(`Hello ${this.name}`);
//     };
//
//     exit() {
//         console.log(`Bajanord ${this.name}n gnacel e:`);
//     }
// }
//
// let karen = new User('Karen', 555),
//     lado = new User('Lado', 777);
//
// console.log(karen);
// karen.hello();
// console.log(lado);
// lado.hello();
// lado.exit();


// function showThis(a, b) {
//     console.log(this);
//
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//
//     console.log(sum());
// }
//
// showThis(45, 55);
// showThis(65, 75);

// let obj = {
//     name: 'Vaspur',
//     city: 'London',
//
//     sum() {
//         console.log(this);
//         console.log(this.city);
//
//         function shout() {
//             console.log(this);
//         }
//
//         shout();
//     }
// };
//
// obj.sum();

// let user = {
//     name: 'Lado',
//     age: 65
// };
//
// function sayName(surname) {
//     console.log(this)
//     console.log(this.name + ' ' + surname);
// }
//
// console.log(sayName.call(user, 'Pndoyan'));
// console.log(sayName.apply(user, ['Pndoyan']));
//
// function count(num) {
//     return this * num;
// }
//
// let double = count.bind(5);
// console.log(double(7));
// console.log(double(42));
//
// let btn = document.getElementsByTagName('button');
// btn[0].addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'green';
// });

//
// let box = document.getElementById('box');
//
// let btn = document.querySelectorAll('button');
//
// let circle = document.querySelectorAll('.circle');
//
// let fony = document.querySelectorAll('.fony');
//
// let wraper = document.querySelector('.wraper');
//
// let circle = document.querySelector('.circle');
// console.log(circle);
//
// box.style.backgroundColor = 'yellow';
// btn[0].style.borderRadius = '100%';
// btn[1].style.borderRadius = '100%';
// btn[1].style.backgroundColor = 'green';
//
// for (let i = 0; i < btn.length; i++) {
//     btn[i].style.backgroundColor = 'green';
// }
//
// for (let i = 0; i < btn.length; i++) {
//     btn[i].style.borderRadius = '100%';
// }
//
// for (let i = 0; i < circle.length; i++) {
//     circle[i].style.backgroundColor = 'pink';
// }
//
// circle.forEach(function (item, i, circles) {
//     item.style.backgroundColor = 'pink';
// });
//
// let div = document.createElement('div');
// div.classList.add('box_1');
// // document.body.appendChild(div);
// // wraper.appendChild(div)
// document.body.insertBefore(div, circle[0]);
//
// // div.innerHTML = '<h1>Hello</h1>';
// div.textContent = 'HELLO WORLD!'
// console.log(div);
//
// btn[0].onclick = function () {
//     alert('duq sexmeciq arajin kochak@!');
// }
// //
// btn[0].onclick = function () {
//     alert('duq krkin sexmeciq arajin kochak@!');
// }
//
// btn[0].addEventListener('click', function () {
//     alert('duq sexmeciq arajin kochak@!');
// });
//
// btn[0].addEventListener('click', function () {
//     alert('duq krkin sexmeciq arajin kochak@!');
// });
//
// btn[0].addEventListener('mouseenter', function () {
//     alert('mknik@ bereciq kochaki vra:')
// });
//
//
// btn[0].addEventListener('click', function (event) {
//     let target = event.target;
//     target.style.display = 'none';
// });
//
// btn.forEach(function (item) {
//     item.addEventListener('mouseleave', function () {
//         console.log('durs ekav');
//     });
// });


// let timerId = setTimeout(sayHi, 3000);
// clearTimeout(timerId);

// let timerId = setInterval(sayHi, 3000);
// clearTimeout(timerId);
//
// function sayHi() {
//     console.log('Hi World!');
// }

// let timer = setTimeout(function log() {
//     console.log('Hello!');
//     setTimeout(log, 2000);
// });
// clearTimeout(timer);


// let btn = document.querySelector('button'),
//     box = document.querySelector('.box');
//
// let width = box.scrollWidth,
//     height = box.scrollHeight;
// console.log(width);
// console.log(height);
//
// btn.addEventListener('click', function () {
//    // box.style.height = box.scrollHeight + 'px';
//    box.scrollTop = 0;
// });


// function showThis(a, b) {
//    console.log(this);
//
//    function sum() {
//       console.log(this);
//       return a + b;
//    }
//    console.log(sum());
// }
// showThis(6, 4);

// function say() {
//     alert('barev');
// }
// say();


// var mas = new Array(0);
// console.log(mas);

// let arr = ['text', 2, 83, 98, 7, 687, true, 'string'];
// let arr1 = [...arr, true, false];
// let arr2 = arr.concat(arr1);
// arr[5] = 'str';
// arr.length = 2;
// arr.push(44, true);
// console.log(arr.push(44, true));
// console.log(arr.unshift('str', 'num'));
// console.log(arr.pop());
// console.log(arr.shift());
// let arrCopy = arr.slice(6);
// let arrCopy = arr.splice(1, 5, 'Karen', 'Ervand');
// arr[1] = 5567;
// arr.reverse();
// let arrCopy = arr.join(' @ ');
// let arrCopy = arr.toString();
// let arrCopy = arr.indexOf('string');
// let arrCopy = arr.concat();
// let arrCopy = arr.concat('pnduk', 555);
// console.log('arr', arr);
// console.log('arrCopy', arrCopy);
// console.log('arr1', arr1);
// console.log('arr2', arr2);


// Object
// let obj = new Object();


// let obj = {
//     name: 'Karen',
//     age: 44,
//     city: 'London',
//     country: 'UK',
//     'some text': 'str'
// };
//
// // obj.bool = true;
// // delete obj.city;
// // obj['animals two'] = 'zebra';
// // console.log('obj', obj);
//
// // for (let key in obj) {
// //     console.log('Բանալի  ' + key + '  ունի այս արժեքը  ' + obj[key]);
// // }
//
// let key = prompt('inch a petq', "age");
//
// console.log(obj[key]);
// console.log(Object.keys(obj).length);
