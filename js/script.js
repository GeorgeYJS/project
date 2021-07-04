"use strict";

// alert('hello');

// const result = confirm('are you here?'); - yes/no
// console.log(result);

// const answer = prompt("Сколько Вам лет?", ""); - пользователь вводит данные
// console.log(answer);


// несколько вопросов подряд. массив
const answers = []; 

answers[0] = prompt('Сколько Вам лет?', '');
answers[1] = prompt('Your name?', '');
answers[2] = prompt('Какой Ваш рост?', '');
answers[3] = prompt('Какой Ваш вес?', '');

console.log(typeof (answers));
// document.write(answers); - отобразить ответы на вопросы


// Интерполяция


const category = 'toys';

console.log(`http://yoursite.com/${category}/5`);

const user = "George";

alert(`Hello, ${user}! Это начало твоего пути :)`);


// Операторы в JS

let incr = 10,
    decr = 10;

//           постфиксная форма записи. 
// incr++;   Инкремент: обозначается двумя знаками плюс " ++ " и увеличивает значение переменной на 1. 
// decr--;   Декремент: обозначается двумя знаками минус " -- " и уменьшает значение переменной на 1.

++incr;    //префиксная форма записи
--decr; 

console.log(++incr);
console.log(++decr);   


console.log(5%2); //выведет остаток после деления

console.log(2*4 == '8'); //true, т.к. сравнивает значение, а не тип

console.log(2*4 === '8'); //false, т.к. сравнивает тип


&& // и
|| // или
!  //изменяет значение на противоположное


