// //работа с переменными
// let user = "John Doe";
// console.log(user);
// let student = "Семён";
// console.log(student);
// user = student;
// console.log(user);
//
// //работа с примитивами
// let test = 1;
// test++;//2
// test += "1";
// console.log(test);//21
// test -= 1;
// console.log(test);//20
// test = Boolean(test);
// console.log(test);//true
// // вывести произведение числе массива
// let arr1 = [2, 3, 5, 8];
// let count = arr1[0];
// for (let i = 1; i < arr1.length; i++) {
//     count *= arr1[i];
// }
// console.log(count);
// //вывести 5<x<10
// let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > 5 && arr2[i] < 10) {
//         console.log(arr2[i]);
//     }
// }
// //вывести четные
// let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
// for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] % 2 === 0) {
//         console.log(arr3[i]);
//     }
// }
//
// //lesson-3
//
// //palindrome
// function palindrome(str) {
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - (i + 1)]) {
//             return `ne palindrome`;
//         }
//         if (i === str.length / 2 - 1 || i >= str.length / 2 - 1) {
//             return `palindrome`;
//         }
//     }
// }
//
// console.log(palindrome("Ohoho"));
//
// //palindrome 2
// function palindrome2(arg) {
//     return (arg.toLowerCase() === arg.toLowerCase().split('').reverse().join('')) ? 'palindrome' : 'not palindrome';
// }
//
// //min
// function minNum(a, b) {
//     let result = (a < b) ? a : b;
//     console.log(result);
// }
//
// min(1, 2);
//
// //max
// function maxNum(a, b) {
//     let result = (a > b) ? a : b;
//     console.log(result);
// }
//
// max(1, 2);
//
// //напишите функцию, которая будет заменять все 0 на строку 'zero';
// let arr = [];
// let min = 0;
// let max = 100;
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * (max - min)));
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 100 === 0) {
//         arr[i] = arr[i] / 100 + 'zerozero';
//     }
//     if (arr[i] % 10 === 0) {
//         arr[i] = arr[i] / 10 + 'zero';
//     }
// }
// console.log(arr);
//
// //lesson 4

// function sum(a) {
//     return function f(b) {
//         return a + b;
//     }
// }

// function sum(a) {
//     let currentSum = a;
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//     f.toString = function() {
//         return currentSum;
//     };
//     return f;
// }
// console.log(sum(5)(2));
//
// //change color by click
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// let textFirst = document.getElementById("text1");
// let textSecond = document.getElementById("text2");
// let textThird = document.getElementById("text3");
// function changeColor () {
//     let i = 0;
//     return function () {
//         this.style.color = colors[i];
//         i++;
//         if (i === colors.length) {
//             i = 0;
//         }
//     }
// }
// textFirst.addEventListener('click', changeColor());
// textSecond.addEventListener('click', changeColor());
// textThird.addEventListener('click', changeColor());

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

//lesson-6

//palindrome 3
function palindrome3(arg) {
    return (arg.toLowerCase() === arg.toLowerCase().split('').reverse().join('')) ? 'palindrome' : 'not palindrome';
}

const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];

//тестил, поэтому 3 решения
// function hotelSearch1 (str){
//     for (let i=0; i < hotels.length; i++){
//         if(Object.values(hotels[i]).includes(str)){
//             console.log(hotels[i])
//         }
//     }
// }

// function hotelSearch2 (str){
//     return hotels.filter(hotels => Object.values(hotels).includes(str));
// }
// hotelSearch2('Germany');


function hotelSearch3 (str) {
    return hotels.reduce((acc, item) => {
        if (Object.values(item).includes(str)) {
            acc.push(Object.values(item).toString())
        }
        return acc;
    }, [])
}
console.log(hotelSearch3("UK"));

//Сопоставьте страны с городами из массива
function sortCity(hotels) {
    return hotels.reduce((acc, item) => {
        if (!acc.hasOwnProperty(item.country)) {
            acc[item.country] = [item.city];
        } else {
            acc[item.country].push(item.city);
        }
        return acc;
    }, {})
}
console.log(sortCity(hotels));

// function sortCity(hotels) {
//     let result = {};
//     for (let obj of hotels){
//         if (!result.hasOwnProperty(obj.country)) {
//             result[obj.country] = [obj.city];
//         } else {
//             result[obj.country].push(obj.city);
//         }
//     }
//     return result;
// }
// console.log(sortCity(hotels));


//lesson-7

const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};

function deepEqual (obj1, obj2){
    if(Object.getOwnPropertyNames(obj1).length !== Object.getOwnPropertyNames(obj2).length){
        return false;
    }
    for(let prop in obj1){
        if (!obj2.hasOwnProperty(prop)) {
            return false;
        }
        if(obj1[prop]!==obj2[prop]){
            let isObject = typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object';
            if(!isObject){
                return false;
            }
            if(!deepEqual(obj1[prop], obj2[prop]) ){
                return false;
            }
        }
    }
    return true;
}
// function deepEqual(obj1, obj2) {
//     const props1 = Object.getOwnPropertyNames(obj1);
//     const props2 = Object.getOwnPropertyNames(obj2);
//     if (props1.length !== props2.length) {
//         return false;
//     }
//     for (let i = 0; i < props1.length; i++) {
//         const prop = props1[i];
//         const bothAreObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';
//         if ((!bothAreObjects && (obj1[prop] !== obj2[prop]))
//             || (bothAreObjects && !deepEqual(obj1[prop], obj2[prop]))) {
//             return false;
//         }
//     }
//     return true;
// }
deepEqual(obj1, obj2); // true
deepEqual(obj1, obj3); // false

//calender
function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek){
    const result = [];
    let weeks=Math.ceil((daysInMonth+dayOfWeek)/daysInWeek),
        daysCounter=(daysInMonth+1)-dayOfWeek;
    for (let i=0;i<weeks;i++){
        const daysOfWeek = [];
        for(let j=0;j<daysInWeek;j++){
            if(daysCounter > daysInMonth){
                daysCounter=1;
            }
            daysOfWeek.push(daysCounter++);
        }
        result.push(daysOfWeek);
    }
    return result;
}
console.log(getCalendarMonth(28,7,1));
// lesson-8
const studentsData = [
    {
        firstName: 'Василий',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Java',
    },
    {
        firstName: 'Иван',
        lastName: 'Иванов',
        admissionYear: 2018,
        courseName: 'JavaScript',
    },
    {
        firstName: 'Александр',
        lastName: 'Федоров',
        admissionYear: 2017,
        courseName: 'Python',
    },
    {
        firstName: 'Николай',
        lastName: 'Петров',
        admissionYear: 2019,
        courseName: 'Android',
    }
];
class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends User {
    constructor({firstName, lastName, admissionYear, courseName}){
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }
    get course (){
        let year = new Date().getFullYear();
        return year - this.admissionYear > 0 ? year - this.admissionYear : 1;
    }
}
class Students {
    constructor(students) {
        this.students = students;
    }
    sortCourse=()=>{
        this.students.sort((a, b) => a.course - b.course);
    }
    getInfo() {
        let result =[];
        for (let obj of this.students){
            result.push(`${obj.fullName} - ${obj.courseName}, ${obj.course} курс`);
        }
        return result;
    }
}
const students = new Students(studentsData.map(student => new Student(student)));
students.sortCourse();
console.log(students.getInfo());

/*
Find the kth largest element in an unsorted array.
Note that it is the kth largest element in the sorted order,
not the kth distinct element.
For example, given [3,2,1,5,6,4] and k = 2, return 5.
*/
function arrBig(arr, k){
    arr.sort((a, b) => b-a);
    return arr[k-1];
}
console.log(arrBig([3,2,1,5,6,4],2));
// если надо уникальные, можно через Set