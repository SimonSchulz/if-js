//работа с переменными
let user = "John Doe";
console.log(user);
let student = "Семён";
console.log(student);
user = student;
console.log(user);

//работа с примитивами
let test = 1;
test++;//2
test += "1";
console.log(test);//21
test -= 1;
console.log(test);//20
test = Boolean(test);
console.log(test);//true
// вывести произведение числе массива
let arr1 = [2, 3, 5, 8];
let count = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    count *= arr1[i];
}
console.log(count);
//вывести 5<x<10
let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log(arr2[i]);
    }
}
//вывести четные
let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}

//lesson-3

//palindrome
function palindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - (i + 1)]) {
            return `ne palindrome`;
        }
        if (i === str.length / 2 - 1 || i >= str.length / 2 - 1) {
            return `palindrome`;
        }
    }
}

console.log(palindrome("Ohoho"));

//palindrome 2
function palindrome(arg) {
    return (arg.toLowerCase() === arg.toLowerCase().split('').reverse().join('')) ? 'palindrome' : 'not palindrome';
}

//min
function min(a, b) {
    let result = (a < b) ? a : b;
    console.log(result);
}

min(1, 2);

//max
function max(a, b) {
    let result = (a > b) ? a : b;
    console.log(result);
}

max(1, 2);

//напишите функцию, которая будет заменять все 0 на строку 'zero';
let arr = [];
let min = 0;
let max = 100;
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * (max - min)));
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 100 === 0) {
        arr[i] = arr[i] / 100 + 'zerozero';
    }
    if (arr[i] % 10 === 0) {
        arr[i] = arr[i] / 10 + 'zero';
    }
}
console.log(arr);

//lesson 4
function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function() {
        return currentSum;
    };
    return f;
}
console.log(sum(5)(2));

//change color by click
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let textFirst = document.getElementById("text1");
let textSecond = document.getElementById("text2");
let textThird = document.getElementById("text3");
function changeColor () {
    let i = 0;
    return function () {
        this.style.color = colors[i];
        i++;
        if (i === colors.length) {
            i = 0;
        }
    }
}
textFirst.addEventListener('click', changeColor());
textSecond.addEventListener('click', changeColor());
textThird.addEventListener('click', changeColor());

//lesson-5
//'2020-11-26' v 26.11.2020
let str = '2020-11-22';
function date(str) {
    console.log(str.split(/\D/g).reverse().join('.'));
    return str;
}

//Поиск объектов размещения
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];
function searchLocation(str){
    str=str.toLowerCase();
    for(let i=0;i<data.length;i++){
        if(data[i].country.toLowerCase() === str || data[i].city.toLowerCase() === str || data[i].hotel.toLowerCase() === str){
            console.log(data[i]);
        }
    }
}
searchLocation("Germany");