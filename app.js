// Q1
// let arr=[1,2,3];
// let result=[];
// for loop
// function power_function(arr){
//     result =[];
//     for( let i=0 ; i<=arr.length ; i++ ){
//         result.push( Math.pow(2, arr[i]));
//     }
// return result ;
// }
// console.log(power_function(arr));

// forEach 
// let x=arr.forEach(function(item){
// result.push( Math.pow(2,item));
// })
// console.log(result);

// map
// const newArr = arr.map(function(item) {
//     return Math.pow(2, item);
// });
// console.log(newArr);

// Q2
// let input = [1, 2, 3, "Rawan"];

// let result = input.map(function (item) {
//     if (typeof item !== "number") {
//         return "N/A"; 
//     }
//     return item % 2 === 0 ? "even" : "odd"; 
// });

// console.log(result);

// Q3
// let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
// let result = [];

// for (let i = 0; i < names.length; i++) {
//     names.forEach(function(item) {
//         result.push(item); 
//     })
//     break; 
// }
// console.log(result);

// Q4
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// let result = [];

// num.forEach(function (item) {
//     if (item % 3 === 0 && item % 5 === 0) {
//         result.push("Fizz Buzz"); 
//     } else if (item % 3 === 0) {
//         result.push("Fizz"); 
//     } else if (item % 5 === 0) {
//         result.push("Buzz"); 
//     } else {
//         result.push(item); 
//     }
// });

// console.log(result);