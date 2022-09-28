// // delcaring our variable
// var greeting = "hello";

// //conditionals

// if (greeting === "hello"){
//     console.log(greeting + "world");
// }

// var num1 = 2;

// if (num1 % 2 === 0){
//     console.log('The number is even')
// }

// if (num1 % 2 === 1){
//     console.log('the number is odd')
// }

// ///second example
// var score = 50;
// var grade = null;

// // if else 
// if (score >= 60){
//     console.log('passing')
// }else {
//     console.log('failing')
//     }

// ///challenge nyumber 3
// var x = 10;

// if (x % 2  == 0){
//     console.log('this number is even')
// }else {
//     console.log('this number is odd')
// }

// //challenge number 4
// var score = 58;
// var grade = null;

// if ( score >= 90){
//     console.log('this grade is an A')
// }else if(score >= 80){
//     console.log('this grade is a B')
// }else if (score >=70){
//     console.log('this grade is a C')
// }else if(score >= 60){
//     console.log('this grade is a D')
// }else if (score <60){
//     console.log('this is a failing grade, F')
// }

// var age = 19;
// var canDrive;
// if(age > 16){
//     canDrive = 'yes';
// } else {
//     canDrive = 'no'
// }

//turns into this

// var age = 19;
// var canDrive = age > 16 ? 'yes' : 'no';

// var score = 90;
// var grade = null;
// if (score >= 60){
//     grade = 'passing'
// } else {
//     grade = 'failing'
// }

// var score = 90;
// // var grade = null;

// console.log(score >= 60 ? 'passing' : 'failing');

// create a If/else statement that tells you what time of the day it is for example 6 will be your 6:00 am  and will read Goodmorning World your 12 will be your 12:00pm and it will read Goodnight World.
//If your console does not know what time the day it is it will read " What time is it? "

// var time = prompt('what time is it?')
// var ampm = prompt('am or pm')
// if (ampm = 'AM' && time == 6,time == 7,time == 8,time == 9,time == 10,time == 11,){
//     console.log('Goodmorning World')
// } else if ( ampm = 'PM' && time == 12,time == 1,time == 2,time == 3,time == 4,time == 5){
//     console.log('Good afternoon world')
// } else {
//     console.log('ion know')
// }


// function namOfFunction(name1, last2){
//     console.log(name1 + last2);
// }

// namOfFunction('osiel', 'torres')
// namOfFunction('justin', 'mcneil')

// ///here we will create oure functionb that incvludes our return statement

// function giveNumber(){
//     return 100
// }
// //we wukk cakk our return statement by declaring a variabkle with a value

// console.log(giveNumber() + 95);

// //callback function exampe

// function greeting(name){
//     alert("hello" + name)
// }
// function ProcessUserInput(callback){
//     var name = prompt("Please enter your name")
//     callback(name);
// }
// ProcessUserInput(greeting);


// ///function with Math
// ///Here we will create a function called "adder" that tales these three parameters ( x,y ,z)
// function adder (x, y, z){
//     console.log(x + y + z) 
// }

// //here is where we will execute our code by calling our adder function

// adder ( 1, 2, 3)
// adder ( 5, 6, 1)
// //when the function is called, the function is mentioned byu itself, it will the same number of values that is was called
// console.log('---------------------')

// function adderReturn(x, y, z){
//     return x + y + z;
// }

// var result = adderReturn (1, 2, 3);
// console.log(result);

// //in this example line 141 makes numbers go into line 137 and then the result is the addition of those numbers in line 141 through the process of line138

// ////create a multiplication function, name it multiplier

// function multiplier(a, b, c){
//     return a * b * c;
// }
//  var result = multiplier(2, 3, 4);
//  console.log(result)

//  ////

//  function multiply (a, b, c){
//     console.log(1/(1/a * 1/b * 1/c))
//  }

//  multiply(2, 3, 4)

 /// in class coding Challenge
// Creates a Function called "vowelChecker" that takes in a single argument (x).
// vowelChecker will grab the first letter (character)...
// Then check if that first letter is a vowel.

// function vowelChecker(x){
//     return x;
//     // return (alert('dont put in vowels please'))
// }
// if (Array.from(x)[0]==='a', 'e', 'i', 'o', 'u'){
//    console.log(vowelChecker)
// } else {
//     alert('very nice')
// }

// var result = vowelChecker('osiel')
// console.log(result)
//     // var result = vowelChecker('jaziel')
    // console.log(result)


// if (Array.from(x)[0]='a', 'e', 'i', 'o', 'u'){
//     console.log(vowelChecker)
// }
// if (Array.from(x)[0]='e'){
//     console.log(vowelChecker)
// }
// if (Array.from(x)[0]='i'){
//     console.log(vowelChecker)
// }
// if (Array.from(x)[0]='o'){
//     console.log(vowelChecker)
// }
// if (Array.from(x)[0]='u'){
//     console.log(vowelChecker)
// }
// else {
//     console.log(alert('very nice'))
// }

////////sept 22
//for loop

// const n = 5 //we created our variable with a value of 5
// //here we will use our for loop to crteate values trhat onyl accept numgers 1-5
// for (let i=1; i <=n; i++){
// console.log(i)
// }

// //while loop
// let i=0; //create a variable and set it equal to zero
// while (i<10){
//     //we setr out cvondition to only accept numbers less than 10
//     console.log(i) //we console.log our result
//     i++ //we set the number to go up with our (++)
// }

//do while-loop
// let i = 15; // initializing let variable
// do {
//     console.log(i);
//     i--;
// } while(i < 15 && i > -15)

// //for in-loop
// const person ={
//     name:'jaziel',
//     age: 22,
//     occupation: "student"
// };

// for (const prop in person){
//     console.log(person[prop]);
// }

// //for of loop
// const numbers = [5, 8, 13];

// for (const n of numbers){
// console.log(n)}

// const n = 2
// for (let i=2; i <=10; i++){
//  if ( i % 2==0){
//     console.log(i)
//  }}

/////// sept 27th
// //this is how you create an object
// var person = { //we create a varable with the value of person
//     firstName:"Jaziel", //we created our persons first name
//     lastName:"Toribio", //we declared the last name....dont forget the commas!!!
//     age: 23,
//     eyeColor: "brown",
//     ["height"]: "5foot6inches"
// };
// console.log(person); //console log our variable that holds all of our values

// //second example of creating an object

// var person2 = new Object();

// person2.firstName = "Jaziel";
// person2.lastName = "Toribio";
// person2["hobby"] = "soccer";
// person2["birthYear"] = 1999;

// console.log(person2)

// var code11 = {
//     instructor: "ociel",
//     apprentices: ["Jaziel, justin, axel, shelby"],
//     location : "charlotte",
//     numStudents: 4,
// };
// console.log(code11)

// var gdsGrad = {
//     firstName: "Jaziel",
//     lastName: "Toribio",
//     school: "Queens University Of Charlotte",
//     skills: ["critical thinking, observer, problem solver, public speaking"]
// };
// console.log(gdsGrad);
// console.log(gdsGrad.skills);

// var student = {
//     name:"Jaziel",
//     birthyear:1999,
//     calcAge: function(){
//         return 2022 - this.birthyear
//     },
// }
// console.log(`${student.name} is ${student.calcAge()} years old`)

// var rocket = {
//     name:"rocket",
//     height:"3ft"
// }