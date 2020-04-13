'use strict';

alert("Сеня, ты солнце, яркое и горячее! ^_^");
let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
 };
 let recuired1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
     howmuch1 = prompt("Во сколько обойдется?", ""),
     recuired2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
     howmuch2 = prompt("Во сколько обойдется?", ""),
     expenses = {},
     e1 = {},
     e2 = {};
e1[recuired1] = howmuch1;
e2[recuired2] = howmuch2;
expenses = {e1, e2};
alert(appData.budget/30);
// console.log(money);
// console.log(time);
// console.log(expenses);
