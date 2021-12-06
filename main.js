//работа с переменными
let user = "John Doe";
console.log(user);
let student ="Семён";
console.log(student);
user=student;
console.log(user);

//работа с примитивами
let test = 1;
test++;//2
test+="1";
console.log(test);//21
test-=1;
console.log(test);//20
test= Boolean(test);
console.log(test);//true
// вывести произведение числе массива
let arr1 = [2, 3, 5, 8];
let count=arr1[0];
for(let i=1;i<arr1.length;i++){
count*=arr1[i];
}
console.log(count);
//вывести 5<x<10
let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i=0;i<arr2.length;i++){
    if(arr2[i]>5 && arr2[i]<10){
        console.log(arr2[i]);
    }
}
//вывести четные
let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i=0;i<arr3.length;i++){
    if(arr3[i]%2===0){
        console.log(arr3[i]);
    }
}