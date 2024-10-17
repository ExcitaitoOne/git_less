import { greet } from "./modules/name.js";
const myName = 'Роман';
greet(myName);

import { calculeteFallDistance } from "./modules/calculete.js";
const g = 9.8;
let distance = null;
distance = calculeteFallDistance(distance, g, 12);
console.log('Расстояния падения: ', distance);

import { celsiusToFahrenheit } from "./modules/celsiusToFahrenheit.js";
let celsius = 30;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`По Цельсию: ${celsius}, по Фарингейту: ${fahrenheit}`);

import { calculeteAverege } from "./modules/averege.js";
const numb1 = 1;
const numb2 = 1;
const numb3 = 3;
const averege = calculeteAverege(numb1, numb2, numb3);
console.log(`Среднее арифметическое: ${averege}`);

import { concatStrings } from "./modules/concatStrings.js";
const str1 = 'Первое слово';
const str2 = 'Второе слово';
const str3 = concatStrings(str1, str2);
console.log(str3);