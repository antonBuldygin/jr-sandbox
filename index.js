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

+1;
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
const getMultiplierFunction = function() {
  const multiplier = 3;

  return function(value = 1) {
    return value * multiplier;
  };
}

const multiplier = getMultiplierFunction();

console.log(multiplier(0));
console.log(multiplier(1));
console.log(multiplier(2));
console.log(multiplier(4));
console.log(multiplier(6));
console.log(multiplier(8));


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
  toStringWithStars: function() {
    return `${this.name}, ${new Array(this.stars).fill("⭐️").join("")}`;
  },
  toString: function() {
    return `${this.name}`;
  },
  getDistanceFrom: function(lat, lng) {
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
  toString: function() {
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

  this.toStringWithStars = function() {
    return `${new Array(this.stars).fill("⭐️").join("")} ${this.name}`;
  };

  this.toString = function() {
    return `${this.name}`;
  };
}

// Вызов функции как конструктора осуществляется с помощью
// слова new перед названием функции во время вызова
const hotelAngara = new Hotel(3, "Ангара", {}, "Сквер Кирова", ["Wi-Fi", "Балетный класс"]);
console.log("Вновь созданный объект отеля", hotelAngara);
console.log(hotelAngara.toString());
console.log(hotelAngara.toStringWithStars());

const hotelInturist = new Hotel(4, "Интурист", {}, "Бульвар Гагарина", ["Wi-Fi", "Уроки рапиры"]);
console.log("Еще один объект отеля", hotelInturist);
console.log(hotelInturist.toString());
console.log(hotelInturist.toStringWithStars());

function sayMyName(one, two, three) {
  return this.name;
}

// console.log("UNKNOW's NAME");
// console.log(sayMyName()); вернет ошибку

hotelAngara.a = sayMyName;
hotelInturist.b = sayMyName;

console.log("SAY MY NAME");
console.log(hotelAngara.a());
console.log(hotelInturist.b());

// bind — метод, который намертво привязывает контекст к функции
// создавая новую функцию. Кроме привязки контекста, с помощью
// bind можно к фунции привязать еще и параметры

const Peter = {
  name: "Peter",
}
// bind возвращает новую функцию, которая ведет себя идентично предыдущей
// но с той разницей, что ее контекст будет всегда одним и тем же
const sayPetersName = sayMyName.bind(Peter, 1, 2, 3);

console.log("PETER'S NAME");
console.log(sayPetersName());

hotelAngara.c = sayPetersName;
console.log(hotelAngara.c());

// call, apply — методы, которые позволяют разово вызвать функцию
// с заданным контекстом и параметрами
console.log(sayMyName.call(Peter, 1, 2, 3)); // call принимает аргументы через запятую
console.log(sayMyName.apply(Peter, [1, 2, 3])); // apply принимает аргументы через массив

// Мнемоника как отличить call от apply. По первой букве
// call — c — comma — запятая
// apply — a — array — массив


// Обращение к свойствам
hotelAngara.name;
hotelAngara["name"];
hotelAngara["toString"]();

console.log("OBJECT KEYS");
for (let key in hotelAngara) {
  console.log(key, hotelAngara[key]);
}

console.log("name" in hotelAngara);

function getHotelAmenities({ amenities = [], name = "", stars = 0 }) {
  return amenities.join(", ");
}

console.log("AMENITIES");
console.log(getHotelAmenities(hotelAngara));
console.log(getHotelAmenities(hotelInturist));
