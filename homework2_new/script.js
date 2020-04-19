'use strict';

alert("Хочу к тебе под одеялко, тёплому ото сна");
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
for (let i=0; i<2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    //Проверки
    if (typeof(a) === 'string' && typeof(a) != null &&
        typeof(b) != null && a!='' && b!='' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        let answer = confirm("Неверный формат записи. Введите еще раз");
        if (answer == true) {
        i--;
        }
    }
    console.log(i);
}


appData.moneyPerDay = appData.budget/30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay <100) {
    console.log("Минимум");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
    console.log("Средний");
} else {
    console.log("Высокий");
}

console.log(appData);
// console.log(money);
// console.log(time);
// console.log(expenses);
