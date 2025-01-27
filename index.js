"use strict";

/**
 * Типы данных
 * Примитивные типы данных:
 *   — числа (number) — просто пишутся числа (определяется по префиксу системы счисления или числу в начале)
 *   — текст или строка (string) — берется в кавычки
 *   — логический тип данных или булев тип (boolean)
 *   — неопределенные данные (undefined)
 *   — пустые данные (null)
 * Сложные типы данных
 *
 * Операторы — минимальная и самая простая команда языка
 *  — унарные — работают с одним значением
 *  — бинарные — работают с двумя значениями
 *  — тернартый — работает с тремя значениями
 *
 * Оператор + может быть унарным или бинарным, строковым или числовым
 * 
 * Переменная — способ сохранить значение, задав ему название
 *  — var — variable (переменная) исторически это первый способ создания переменных в JS
 *  — let — "допустим" современный способ создания переменных
 *  — const — constant (постоянное значение) переменная доступная только для чтения
 *  — всегда const до тех пор пока не припрет использовать let
 *
 * Оператор присвоения = используется для записи значений (например в переменные)
 */


const earthRadius = 6378;

let positionOfCourier = Math.atan(2) * earthRadius;
// console.log(positionOfCourier);



let randomlyGeneratedNumber;
// console.log("Объявленная, но не определенная переменная", randomlyGeneratedNumber);

randomlyGeneratedNumber = 12;
// console.log("Объявленная и уже определенная переменная", randomlyGeneratedNumber);

randomlyGeneratedNumber = "Привет";
// console.log("Объявленная и еще раз определенная переменная", randomlyGeneratedNumber);


1234
0xFF
0b100

  + 1;
-1; // К единице применен унарный оператор минуса


// console.log(`Результат сложения 10 и 3 равняется ${10 + 3}`);

Math.ceil(0.1); // Ceiling
Math.round(1.5); //
Math.floor(1.9); // Floor

// console.log(Math.round(Math.random() * 255));

"Текстовая \" информация\n\t";
'Текстовая информация\n\t';
`Текстовая информация`; // Шаблонная строка

// console.log("Оператор сложения" + " " + "строк");

const someVar = true;
const another = false;


1 + 2;
1 + "3";

// >
// <
// >=
// <=

// ==
// ===

// Динамическая типизация
// По ходу вычислений один тип данных может быть 
// __автоматически__ преобразован в другой тип данных

true; // Truthy
false; // Falsy

undefined;

null;

// if (!Number(prompt("Введите ваш возраст"))) { // string | null
//   alert("Покиньте сайт");
// }

// Сложный — сложенный
// Трудный


// Утечка памяти
const getMultiplierFunction = function () {
  const multiplier = 3;

  return function (value = 1) {
    return value * multiplier;
  };
}

const multiplier = getMultiplierFunction();

// console.log(multiplier(0));
// console.log(multiplier(1));
// console.log(multiplier(2));
// console.log(multiplier(4));
// console.log(multiplier(6));
// console.log(multiplier(8));


/*
 * Объекты в JavaScript
 * — ООП — Объектно-ориентированное программирование
 *   все логические сущности в коде описаны через объекты
 *   у которых есть свойства и методы
 *    — Наследование — одни объекты принимают свойства других объектов
 *
 * — Конкретные инструменты для работы с конкретными прикладными задачами (API)
 *   — BOM — Browser __object__ model
 *   — DOM — Document __object__ model
 *   — Math
 *   — Date
 *   — объект — это удобный способ создать т.н. "пространство имен" (namespace),
 *     то есть сложить весь функционал, касающися отдельной сущности в одном 
 *     месте
 * — Данные
 *
 * Метод — это функция, которая хранится внутри объекта и нужна для того
 * чтобы управлять свойствами объекта
 *
 * Свойство — это значение записанное в объект
 */


/**
 * Сложные типы данных — сложенные типы данных. Данные, которые составляются
 * из набора более простых данных
 */

const numbers = [1, 2, 3, 4];

const teacher = {
  name: "Igor",
  age: 36,
  experience: 20,
  skills: ["JavaScript", "HTML", "Talking", "Not russian language"],
};

// Создание множественных объектов

const hotelDeVille = {
  // Свойства
  stars: 3,
  name: "Hotel de Ville",
  location: {
    lng: 0,
    lat: 0,
  },
  address: "",
  amenities: ["Parking", "Wi-Fi", "Swimming pool"],

  // Метод
  toStringWithStars: function () {
    return `${this.name}, ${new Array(this.stars).fill("⭐️").join("")}`;
  },
  toString: function () {
    return `${this.name}`;
  },
  getDistanceFrom: function (lat, lng) {
    return 2;
  },
};

const hotelIbis = {
  stars: 2,
  name: "Ibis",
  location: {
    lng: 0,
    lat: 0,
  },
  address: "",
  amenities: ["Parking", "Wi-Fi", "Swimming pool"],
  toString: function () {
    return `${this.name}, ${new Array(this.stars).fill("⭐️").join("")}`;
  }
};

// Функция-конструктор — это способ создавать множественные
// объекты, описав их один единственный раз
// По соглашению, функции-конструкторы именуются с большой буквы
function Hotel(stars, name, location, address, amenities) {
  this.stars = stars;
  this.name = name;
  this.location = location;
  this.address = address;
  this.amenities = amenities;

  this.toStringWithStars = function () {
    return `${new Array(this.stars).fill("⭐️").join("")} ${this.name}`;
  };

  this.toString = function () {
    return `${this.name}`;
  };
}

// Вызов функции как конструктора осуществляется с помощью
// слова new перед названием функции во время вызова
const hotelAngara = new Hotel(3, "Ангара", {}, "Сквер Кирова", ["Wi-Fi", "Балетный класс"]);
// console.log("Вновь созданный объект отеля", hotelAngara);
// console.log(hotelAngara.toString());
// console.log(hotelAngara.toStringWithStars());

const hotelInturist = new Hotel(4, "Интурист", {}, "Бульвар Гагарина", ["Wi-Fi", "Уроки рапиры"]);
// console.log("Еще один объект отеля", hotelInturist);
// console.log(hotelInturist.toString());
// console.log(hotelInturist.toStringWithStars());

function sayMyName(one, two, three) {
  return this.name;
}

// console.log("UNKNOW's NAME");
// console.log(sayMyName()); вернет ошибку

hotelAngara.a = sayMyName;
hotelInturist.b = sayMyName;

// console.log("SAY MY NAME");
// console.log(hotelAngara.a());
// console.log(hotelInturist.b());

// bind — метод, который намертво привязывает контекст к функции
// создавая новую функцию. Кроме привязки контекста, с помощью
// bind можно к фунции привязать еще и параметры

const Peter = {
  name: "Peter",
}
// bind возвращает новую функцию, которая ведет себя идентично предыдущей
// но с той разницей, что ее контекст будет всегда одним и тем же
const sayPetersName = sayMyName.bind(Peter, 1, 2, 3);

// console.log("PETER'S NAME");
// console.log(sayPetersName());

hotelAngara.c = sayPetersName;
// console.log(hotelAngara.c());

// call, apply — методы, которые позволяют разово вызвать функцию
// с заданным контекстом и параметрами
// console.log(sayMyName.call(Peter, 1, 2, 3)); // call принимает аргументы через запятую
// console.log(sayMyName.apply(Peter, [1, 2, 3])); // apply принимает аргументы через массив

// Мнемоника как отличить call от apply. По первой букве
// call — c — comma — запятая
// apply — a — array — массив


// Обращение к свойствам
hotelAngara.name;
hotelAngara["name"];
hotelAngara["toString"]();

// console.log("OBJECT KEYS");
// for (let key in hotelAngara) {
//   console.log(key, hotelAngara[key]);
// }

// console.log("name" in hotelAngara);

function getHotelAmenities({ amenities = [], name = "", stars = 0 }) {
  return amenities.join(", ");
}

// console.log("AMENITIES");
// console.log(getHotelAmenities(hotelAngara));
// console.log(getHotelAmenities(hotelInturist));

function calculations(min, max, value) {
  if (typeof value !== "number" || typeof min !== "number" || typeof max !== "number") {
    throw new TypeError("Переданные значения неправильного типа. Нужно передать числа (number)");
  }

  if (value < min || value > max) {
    throw new RangeError(`Переданное значение ${value} не попадает в диапазон [${min}..${max}]`);
  }

  // console.log(min);
}















// 1. В JS существует специальный объет для работы с датой и временем (один и тот же)
// 2. Этот объект называется Date
// 3. Этот объект работает со временем установленным на компьютере клиента
// 4. Точность изменения времени в JS — до миллисекунд
// 5. Вызов конструктора Date без параметров создаст объект, описывающий 
//    дату непосредственного момента создания этого объекта
// 6. 


// console.log(now);

const yesterday = new Date(2025, 0, 15);
const now = new Date();


// У любого объекта есть два набора методов (функция встроенная в объект,
// предназначенная для управления свойствами объекта)
// - геттеры (get получить) — возвращают текущие свойства объекта
// - сеттеры (set задать) — задают значения свойств

// ✅ setFullYear(year): установить год
// ✅🤔 setMonth(month): установить месяц — месяца задаются с нуля
// ✅🤔 setDate(day): установить день месяца — дни задаются с корректировкой 
//   относительно настоящего календаря (невозможно задать 31 февраля)
// ✅ setHours(hours): установить часы
// ✅ setMinutes(minutes): установить минуты
// ✅ setSeconds(seconds): установить секунды

const someDate = new Date();
someDate.setFullYear(2004);
someDate.setMonth(1);
someDate.setDate(31);

someDate.setMonth(2);
someDate.setDate(2);

// • getYear(): получить год (две цифры)
// • getFullYear(): получить год (четыре цифры)
// • getMonth(): получить месяц (от 0 до 11)
// • getDate(): получить день месяца (от 1 до 31)
// • getHours(): получить часы (от 0 до 23)
// • getMinutes(): получить минуты (от 0 до 59)
// • getSeconds(): получить секунды (от 0 до 59)


// Object.toString();
// Object.valueOf();

let lastDate = Date.now();

function tick() {
  const now = Date.now();
  console.log("TICK", now - lastDate);
  lastDate = now;
}

const timerID = setInterval(tick, 1000);
clearInterval(timerID);


// Cуществует разница между обращением к функции и ее вызовом



// const a = 1;

function sum(a, b) {
  return a + b;
}

// sum(a, 1);

// Функции как объекты (граждане) первого класса — функции с которыми
// можно обращаться как с обычными значениями других типов
// first-class citizen (first-class object)
const name2 = function () {

};

// Pascal

// Функции высшего порядка
function nameFn() {

}

function someFunc(a) {
  const one = 1;
  const b = 2;
  const sum = one + b;

  if (typeof a === "function") {
    a(sum);
  }
}

someFunc(nameFn);


// Примеры функций высшего порядка, встроенных в JS
// — document.body.addEventListener("click", someFunc);
// — setTimeout(someFunc, 1000);
// — итераторы массивов

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = values[1];

for (let val of values) {
  if (val > max) {
    max = val;
  }
}

// Стандартные задачи массивов
// — перебор всех элементов
// — фильтрация
// — мапирование
// — поиск элемента в массиве
// библиотека lodash

const isOdd = function (number) {
  return number % 2 !== 0;
};

// filterArray — функция высшего порядка, потому что
// она принимает на вход другую функцию
// filterFunction — функция обратного вызова (callback)
const filterArray = function (arr, filterFunction) {
  const result = [];

  for (let val of arr) {
    if (filterFunction(val)) {
      result.push(val);
    }
  }

  return result;
};

// Передача функции по названию
const oddValues = filterArray(values, isOdd);
console.log(oddValues);

// Создание функции в момент передачи в другую функцию
const evenValues = filterArray(values, function (val) {
  return val % 2 === 0;
});
console.log(evenValues);

// Создание функции-стрелки в момент передачи в другую функцию
const valuesLessThanFive = filterArray(values, (val) => val < 5);
console.log(valuesLessThanFive);

// Коллбэк — функция обратного вызова
// callback
// — call
// — back
// — call me back — перезвони


// values.forEach();
// values.map();
// values.filter();
// values.find();
// values.findIndex();
// values.some();
// values.every();

// values.sort();

// const evenValues = values.filter(function(val) {
//   return val % 2 === 0;
// });


// Второе применение функций высшего порядка — создание других функций
function getString() {
  return "";
}

function getNumber() {
  return 1;
}

function getObject() {
  return ({});
}


// Замыкание — прием, который использует особенности областей видимости
function getFunction(a) {
  const b = 1;

  return function () {
    return b + 1;
  }
}


function bindHandlers(button) {
  // Запрос на сервер, который отправляется по нажатию на кнопку
  // По хорошему доступ к этому запросу не нужно давать внешним
  // людям, потому что они могут сломать наш код

  // В объектно-ориентированном программировании существует
  // принцип, который называется "инкапсуляция" (in capsula)
  // "помещение в капсулу". Заключается этот принцип в том, что
  // существуют данные, доступ к которым должен быть ограничен
  // для внешних пользователей (имеются ввиду не конечные пользователи
  // а другие программисты)

  // Использование замыканий — единственный действенный метод
  // инкапсулирования значений в JS
  let request = null;

  function handleButtonClick() {
    request = fetch();
  };
  function handleButtonMouseOver() {};
  function handleButtonMouseLeave() {};

  button.addEventListener("click", handleButtonClick);
  button.addEventListener("mouseenter", handleButtonMouseOver);
  button.addEventListener("mouseleave", handleButtonMouseLeave);

  // Неудаление этого обработчика создаст в памяти "утечку"
  // потому что обработчик пользуется переменной button
  // и она даже после своего удаления не будет подобрана
  // сборщиком мусора и будет занимать лишнюю память
  // document.body.addEventListener("keydown", function(evt) {
  //   if (evt.key === "Esc") {
  //     // button.style.backgroundColor = "red";
  //   }
  // });

  return function() {
    button.remove();

    button.removeEventListener("click", handleButtonClick);
    button.removeEventListener("mouseenter", handleButtonMouseOver);
    button.removeEventListener("mouseleave", handleButtonMouseLeave);

    if (request !== null) {
      fetch.abort();
    }
  }
}

let button = document.createElement("button");
const cleanupButton = bindHandlers(button);

cleanupButton();
button = null;



const ab = getFunction();

// Где могут использоваться функции, которые возвращают другие функции
// — каррирование (currying, Curry) — прием из функционального программирования,
//   при котором все функции становятся функциями, которые принимают ровно один
//   аргумент

// Chaining — (chain — цепочка) — связывание в цепочку
// Piping — (pipe — труба)

//         ==========
// [] =>                => []
//         ==========

const evenNumbers = new Array(10)
  .fill("")
  .map(() => Math.random())
  .map((rand) => Math.round(rand * 10))
  .filter((val) => val % 2 === 0);

// Мемоизация (запоминание)
function sum(a, b) {
  return a + b;
}

sum(1, 2);
sum(3, 4);
sum(3, 4);


function getMemoizedSum() {
  const cache = {
    [10]: 11,
    [12]: 13,
  };

  return function(a) {
    if (!(a in cache)) {
      cache[a] = a + 1;
    }

    return cache[a];
  }
}

const functionWithPlus = getMemoizedSum();

functionWithPlus(1);
functionWithPlus(2);
functionWithPlus(10);
functionWithPlus(1);
functionWithPlus(1);

// sum(10);
// sum(11);
// sum(100);


// Для экономии памяти которая выделена для браузера
// существует механизм, который называется "сборка мусора"
// garbage collection
// Garbage Collector

[];
1;

function sop() {};

// =========== HEAP ===========
// 1      sop()     null
//    [1, 2, 3]   {button}
//          Function
//    {cache}   {}
// ============================
// arr
// anotherArr
// myObject
// func
// document.body
// onBodyClick
// ========== LINKS ===========

const arr = [1, 2, 3];
const anotherArr = arr;

let myObject = ({});
myObject = null;

// Memory leak — учетка памяти

