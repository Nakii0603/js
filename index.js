// Academy303

// let tsag = 55;
// let honog = 24 ;
// console.log((tsag / honog).toFixed(0));

// let i = 0;
// while(i <= 10){
//    console.log (i) ;
//    i=i+2;
// }

// for (i=1 ; i <= 100 ; i++){
//     console.log(i)
// }

// let num = 2;
// let zerg = 5;
// let sum = 1;
// for(let i = 1; i <= zerg; i=i+1){
//     sum = sum * num;
// }
// console.log(sum);

// for (let a = 1; a <= 100; a = a + 1) {
// }

// let sum = 0;
// for (let i = 0;i <= 10; i++) {
//     if (i % 2  == 0)
//         continue;
//     sum = sum +
// }
// console.log(sum)

// let sum = 0;
// for (let i = 0;   i <= 10; i++ ){
//     sum = sum + i;
//     console.log(sum)
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (i < num.length) {
//     // console.log('Element at index ' + i + " is " + num[i])
//     console.log(`Element at index ${i} is ${num[i]}`)
//     i++
// }

// let blance = [1000 , 2000 , 2500 , 32442 , 5342];
// let i = 0;
// while (i < blance.length){
//     console.log(blance[i] * 1.15)
//     i++
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// let array = [1, 2, 3, 4, 5]
// let reversedArray = []
// for(let i = array.length - 1; i >= 0; i--) {
//   let valueAtIndex = array[i]
//   reversedArray.push(valueAtIndex)
// }
// console.log(reversedArray)

// while  (i < num.length) {
//     // console.log('Element at index ' + i + " is " + num[i])
//     console.log(`index ${i} is ${num[i]}`)
//     i++
// }

// let array = [1, 2, 3, 4, 5];
// let str = ""
// for (let i = 0; i < array.length; i++) {
//     for (let h = 0; h <= h + 1; h++) {
//         str = str +array [h]
//     }
//     console.log(str);
//     str = ""
// }

// function console haanch duudaj bolnoo

// let arr = [2,7,3,6], t = 10;
// function twoSum(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         for (let u = i + 1; u < array.length; u++) {
//             let s = array[i] + array[u];
//             if (s == target) {
//                 return [i,u]
//             }
//         }
//     }
// }
// console.log(twoSum(arr,t));

// let numArray = [140, 104, 99, 43, 11, 22, 4654, 346];
// numArray.sort(function (a, b) {
//   return b - a;
// });
// console.log(numArray);

//              param
// const twoSum = (a, b) => {
//   console.log(a + b);
// };
// //      arg
// twoSum(1, 5);
// const btn = document.getElementsByTagName("button");

// let ner = "saraa";
// let age = 1;
// let who;
// if (age >= 18) {
//   who = "man";
//   console.log("asd");
//   who === "man"
//     ? console.log(ner + "orj bolnooo")
//     : console.log(ner + " orj bolohguie");
// } else {
//   who = "child";
// }
// who === "man"
//   ? console.log(ner + "orj bolnooo")
//   : console.log(ner + " orj bolohguie");

// let dun = 46

// switch (true) {
//     case dun > 100: console.log("dun buruu bn");
//         break
//     case dun >= 90 && dun <= 100: console.log('A+');
//         break
//     case dun < 89 && dun >= 80: console.log('B');
//         break
//     case dun < 79 && dun >= 70: console.log('C');
//         break
//     case dun < 70: console.log('F');
//         break
// }

// var module = function (number) {
//     console.log("goodwok");
// }

// function mod(number) {
//     console.log("work");
// }
// module(-224)
// mod(345)

// let a = {
//     name: "html ",
//     less: "312999",
//     min: 231,
//     info: function () {
//         console.log(this.name + "surgalt n" + this.less + " untei bna");
//     },
//     hour: function () {
//         return Math.round(this.min / 60);
//     },
//     comMin: function () {
//         return this.min % 60;
//     }
// }
// console.log(a.name + ' enhuu surgalt n' + ' ' + a.hour() + ' ' + 'tsag' + ' ' + a.comMin() + 'min surgalt bnaa');

// let hel = ['angil','german','dv','vsd'];
// console.log(hel);
// console.log(hel[1]);
// console.log(hel.indexOf('dv'));

// function a(name, job) {
//   console.log("hello" + name + job);
// }
// a("Bat", "IT");

// function oneClickPlus(value1, value2) {
//     return value1 + value2;
//   }

// console.log(oneClickPlus(3, 5));

// let input1 = document.createElement("input");
// let input2 = document.createElement("input");
// let button = document.createElement("button");
// let result = document.createElement("div");
// button.innerText = "="
// button.className = "btn";
// document.body.appendChild(input1);
// document.body.appendChild(input2);
// document.body.appendChild(button);
// document.body.appendChild(result);

// function plus() {
//   result.innerText = parseInt(input1.value) + parseInt(input2.value);
// }

// button.onclick = plus;

let input1 = document.createElement("input");
let input2 = document.createElement("input");
let button = document.createElement("button");
let result = document.createElement("div");
button.innerText = "=";
button.className = "btn";
document.body.appendChild(input1);
document.body.appendChild(input2);
document.body.appendChild(button);
document.body.appendChild(result);
function plus() {
  result.innerText = parseInt(input1.value)+parseInt(input2.value);
}
button.onclick = plus;
