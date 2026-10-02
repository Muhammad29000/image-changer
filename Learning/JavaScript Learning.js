// JavaScript Course !!

// Variables !!
// Variables are just like containers to store the data ...

// Var
// Variable can be re-declared & Updated . A global Scope Variable.
// var x = 10;
// var x = 30;
// console.log(x)

// Let 
// Variable cannot be re-declared But can be  Updated . A block Scope Variable.
// let x = 10;
// x = 40;
// console.log(x)

// Const
// Variable cannot be re-declared or Updated . A block Scope Variable.
// const x = 3273729144;
// console.log(x)

// Operators !!
// Operators are used to perfome some operation on data.

// Arithmatic Operators !!
// let a = 10;
// let b = 20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// Assignment Operators !!
// let a = 10;
// let b = 20;
// b += a
// console.log(b)

// let a = 10;
// let b = 20;
// b -= a
// console.log(b)

// let a = 10;
// let b = 20;
// b *= a
// console.log(b)

// let a = 10;
// let b = 20;
// b %= a
// console.log(b)

// let a = 10;
// let b = 20;
// b **= a
// console.log(b)

// Comparison Operators !!
// let x = 10
// let y = '10'
// console.log(x == y)

// let x = 10
// let y = '10'
// console.log(x === y)

// let x = 10
// let y = '10'
// console.log(x != y)

// let x = 10
// let y = '10'
// console.log(x !== y)

// let x = 10
// let y = '10'
// console.log(x < y)

// let x = 10
// let y = '10'
// console.log(x > y)

// let x = 10
// let y = '10'
// console.log(x <= y)

// let x = 10
// let y = '10'
// console.log(x >= y)

// Logical Operators !!
// AND Operators !!
// Agar dono conditions true ho.
// let age = 20;
// console.log(age > 18 && age < 30);

// OR Operators !!
// Agar dono me se ak bi true ho to true.
// let age = 20;
// console.log(age > 18 || age < 10);


// NOT Operators !!
// Condition ko ulta krdeta hai.
// let isStudent = true;
// console.log(!isStudent);

// let isStudent = false;
// console.log(!isStudent);

// Ternary Operators !!
// (Condition) ? (True Output) : (False Output)
// let marks = 40;
// let result = (marks > 40) ? ("You Passed in Exam !") : ("You Failed in Exam ")
// console.log(result)

// Template Literal (Back Tick) !!
// let Name = 'Muhammad';
// let income = 35000;
// let pincode = 2580;

// Your name is = Muhammad Your income is = 35000 And Your pincode = 2580.

// console.log(
//     "Your name is = "+'"'+
//     Name + '"'+
//     " and Your income is = " +
//     income +
//     " and pincode =  " +
//     pincode
// );

// let Name = 'Muhammad';
// let income = 35000;
// let pincode = 2580;
// // Your name is = Muhammad Your income is = 35000 And Your pincode = 2580.
// console.log(`Your name is = "${Name}" and  your income is =${income} and pincode=${pincode}`)

// Conditional Statements !!
// If Statements !!

// let CNIC = true;
// let Bform = false;

// if(CNIC) {
//     console.log('You can open your account in our bank via CNIC')
// } else if(Bform){
//     console.log('You can open your account in our bank via Bform')
// } else {
//     console.log('you cannot create account in our bank')
// }

// let number = 1;
// if(number > 5){
//     console.log('Number is greater than 10')
// } else if (number > 2){
//     console.log('Number is greater than 2')
// } else {
//     console.log('Number is very less')
// }

// let day = 6;

// if(day == 1){
//     console.log('Monday')
// } else if(day == 2){
//     console.log('Tuesday')
// } else if(day == 3){
//     console.log('Wednesday')
// } else if(day == 4){
//     console.log('Thursday')
// } else {
//     console.log('No Day')
// }

// Switch Statements !!

// let day = 4;
// switch(day){
//     case 1 : console.log("Monday")
//     break;
//     case 2 : console.log("Tuesday")
//     break;
//     case 3 : console.log("Wednesday")
//     break;
//     case 4 : console.log("Thursday")
//     break;
//     case 5 : console.log("Friday")
//     break;
//     default:console.log("Invalid Input");
// }

// Loops !!
// Loops are used to execute a piece of code again and again.

// For Loops !!
// for (let i = 0; i <= 10; i++) {
//     console.log("Muhammad ", i)
// }

// let n = 10;

// for (let i = 1; i<=10; i++) {
//     console.log(`${n} X ${i} = `,n*i)
// }

// While Loops !!
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let n = 5;
// let i = 1;
// while (i <= 10) {
//     console.log(`${n} X ${i} = `,n*i);
//     i++;
// }

// Do-While Loops !!

// let i = 0;

// do {
//     console.log(i);
//     i++;
// }while(i <= 10);

// Functions !!
// function sum(a,b){
//    console.log(a+b)
// }
// sum(10,20)
// sum(100,200)
// sum(1000,2000)

// Return Functions !!
// function sum(a,b){
//   return a+b
// }

// let result = sum (10,20)
//   console.log(result)

// function sum (a,b){
//     return a+b
// } 

// let result = sum (100,200)
// console.log(result)

// function greet(name){
//         return `hello ${name}`
// }
// let result = greet('Muhammad')
// console.log(result)

// Also like this
// console.log(greet('Muhammad'))

// Arrow Function !!
// let print = () => console.log("Muhammad");
// print();

// let sum = () => console.log("19")
// sum();

// let my = () => console.log("Intermediate")
// my();


// let sum = (a,b) => {
//     console.log("Muhammad");
//     return a+b;
// };
// console.log(sum(10,9))

// let my = (a,b) => {
//     console.log("Sami")
//     return a+b;
// };
// console.log(my(10,10))

// There are three type of Scope !!
// Function Global Scope
// Function Local Scope
// Function Block Scope

// Function Global Scope
// global me sab jaga use kr skte hai !!
// let globalVar = 10;

// function display() {
//     console.log(globalVar);
// }
// display();
// console.log(globalVar);

// Function Local Scope
// local me function ke andr use kr skte hai !!

// function localScopeExample() {
//    let localVar = 10;
//    console.log(localVar);
// }

// localScopeExample();
// console.log(localVar);

// Function Block Scope
// if (true) {
//     let blockVar = "10";
//     console.log(blockVar);
// }

// console.log(blockVar);

// Callback Function !!
// const print = () => {
//     console.log("Printing Press")
// }

// const test = (callback) => {
//     console.log('inside the test fuction')
//     callback();
// }

// test(print);

// Objects in JS !!
// Spread Operators !!
// const person = {
//     Name: "Muhammad",
//     Age:19,
//     Phone:'iphone - 18',
//     income:"$100B",
// } 

// const car = {
//     Name:'BMW',
//     Color:'Black',
//     Price:'80L'
// }

// const Smartphone1 = {
//     Name  : 'iphone - 18',
//     Price : 400000,
//     Color :'Purple',
//     Rom   :   '64GB',
// };

// const phone2 = {
//     Name  : 'Galaxy S24 ultra',
//     Price : 200000,
//     Color :'black',
//     Rom   :   '128GB',
// };

// const Smartphone2 = {...Smartphone1};
// console.log(Smartphone2)

// Object Destructuring !!

// const { Name,Price,Rom} = Smartphone1;

// console.log( Name,Price, Rom)

// Array !!

// let Name = ["Muhammad" , 19, "Intermediate" , "Male"]
// let NameTwo = ["Shahzaib" , 22 , "BBA" , "Male"]

// console.log(NameTwo[1]);
// for (let i=0; i<Name.length; i++) {
//     console.log(Name[i]);
// }

// 01 Push !!
// Adds one or more elements to the end of the Array.

// let arr = [10,20,30,40];
// arr.push(50)
// console.log(arr)

// 02 Pop !!
// Removes the last element from the array and returns that element.

// let arr = [10,20,30,40];
// arr.pop()
// console.log(arr)

// 03 shift !!
// Removes the first element from the array and returns it.

// let arr = [10,20,30,40];
// arr.shift()
// console.log(arr)

// 04 Unshift !!
//  Adds one or more elements to the beginning of the Array.

// let arr = [10,20,30,40];
// arr.unshift(5)
// console.log(arr)

// 05 Length !!
// Returns the number of elements in the Array.

// let arr = [10,20,30,40,50];
// console.log(arr.length)

// 06 Finds !!
// Returns the first elements that satisfies the provided testing function.

// let arr = [1,2,3,4];
// let found = arr.find((el) => el > 2);
// console.log(found);

// 07 Includes !!
// Determines whether an array contains a certain value.

// let arr = [1,2,3];
// console.log(arr.includes(3));

// 08 Concat !!
// Merges two or more arrays and returns a new array.   

// let arr1 = [1,2];
// let arr2 = [3,4];
// let merged = arr1.concat(arr2);
// console.log(merged);

// 09 Join !!
// Joins all array elements into a string , with an optional separator.

// let arr = ["Apple" , "Banana" , "Cherry"];
// let joint = arr.join(", ");
// console.log(joint);

// 10 Splice !!
// Add or removes elements from the array.

// let arr = [1,2,3,4];
// arr.splice(2,1,"a");
// console.log(arr);    

// 11 Slice !!
// Returns a shallow copy of a portion of an Array.

// let arr = [1,2,3,4,5];
// let sliced = arr.slice(1, 3);
// console.log(sliced);

// 12 Sort !!
// Sorts the elements of the array (alphabetical by default , can be customized).

// let arr = [3 , 1 , 4 , 2];
// arr.sort((a, b) => a-b );
// console.log(arr);

// 13 Find Index !!
// Returns the index of the first elements that satisfied a test.

// let arr = [5, 12 , 8];
// let index = arr.findIndex((el) => el > 10);
// console.log(index);

// 14 From !!
// Creates an array from an array-like or iterable Object.

// let str = "hello";
// let arr = Array.from(str);
// console.log(arr);

// 15 isArray !!
// Checks if the given value is an Array.

// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray("hello"));

// High Order Array Methods !!

// 16 map !!
// Creates and return new array by applying a function to each element of the original array.

// let arr = [1,2,3];
// let doubled = arr.map((el) => el * 2);
// console.log(doubled);

// 17 Filter !!
// Creates and returns a new array with elements that pass a specified test condition.

// let arr = [1,2,3,4];
// let evens = arr.filter((el) => el % 2 === 0);
// console.log(evens);

// 18 Reduce !!
// Reduces an array to a single value by applying a function to each element.

// let arr = [1,2,3,4];
// let sum = arr.reduce((acc, el) => acc + el, 0);
// console.log(sum);

// Advanced Loops !!
// For...In !!
// const Data = {
//     Name : 'Muhammad',
//     Age : 19,
//     Education : 'Intermediate',
//     Gender : 'Male',
//     Phone : '03273729144'
// }

// for(let key in Data) {
//     console.log(key, Data[key])
// }

// For...Of !!
// let arr = [1,2,3,4,5]
// for (let value of arr) {
//     console.log(value)
// }

// For...Each !!
// let arr = [10,20,30,40,50]
// arr.forEach((value,index,array) => console.log(value,index,array))

// Strings in Js !!
// let str1 = "Muhammad";
// let str2 = 'Shahzaib'
// let str3 = `Ibrahim`

// console.log(str1)
// console.log(str2)
// console.log(str3)

// Methods !!

// Length !!
// let str = "Muhammad";
// console.log(str.length)

// Uppercase !!
// let str = "Muhammad";
// console.log(str.toLocaleUpperCase())

// Lowercase !!
// let str = "MUHAMMAD";
// console.log(str.toLocaleLowerCase())

// Includes !!
// let str = "Muhammad";
// console.log(str.includes('M'))

// IndexOf !!
// let str = "Muhammad";
// console.log(str.indexOf('M'))

// Trim !!
// let str = "Muhammad";
// console.log(str.trim().length)

// Substring !!
// let str = 'Learning JavaScript Now'
// let substring = str.substring(8,19)
// console.log(substring)

// Slice !!
// let str = "Learning JavaScript Now";
// console.log(str.slice(8,19))

// Replace !!
// let str = "Learning JavaScript now";
// console.log(str.replace('now','NOW'))

// Split !!
// let str = "Learning JavaScript Now";
// let result = str.split(" ")
// console.log(result)

// ChatAt !!
// let str = "Muhammad";
// console.log(str.charAt(0))

// Date And Time in JS !!
// Date Object !!
// let currentDate = new Date();
// console.log(currentDate.getFullYear())
// console.log(currentDate.getMonth()+1)
// console.log(currentDate.getDay())
// console.log(currentDate.getDate())

// SetInterval !!
// setInterval(() => {
//     console.log('Muhammad')
// }, 1000);

// Clear Interval !!

// SetTimeOut !!
// setTimeout(() => {
//     console.log('My Name is Muhammad')
// }, 3000);

// Synchronous !!
// console.log("Muhammad");
// console.log("Shahzaib");
// console.log("Ibrahim");

// Asynchronous !!
// console.log('ibrahim')
// setTimeout(() => {
//     console.log('Muhammad')
// }, 2000);
// console.log('shahzaib')

// DOM Introduction !!
// Accessing HTML Elements !!
// getElementById("myId")
// getElementByClassName("myClass")
// getElementByTagName("h1")
// querySelector("div") 
// querySelector("div")

// DOM Properties !!

// const element = document.querySelector('h1')
// console.log(element)
// console.log('text content =', element.textcontent)
// console.log('inner html =', element.innerHTML)
// console.log('inner text =', element.innerText)

// DOM Manipulation !!

// let h2 = document.createElement('h2')
// h2.innerText =('Muhammad Asif')
// console.log(h2)

// BOM !!