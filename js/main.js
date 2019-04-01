"use strict"

// first task

// let input = prompt("please,input your sentences")
// function myFunction(sentences) {
//     let array = sentences.split(" ");
//     console.log(array)
//     let count = array.length - 1
//     console.log(count)
// }
// myFunction(input)

// another version

// let input=prompt("Please,input your number")
// let count=0;
// function myFunction(array){
// for(const element of array){
//   if(element == " ")
//     {
//     count++
//     }
//  }
// console.log(count)
// }
// myFunction(input)

// ==========================================================================

// second task

// let userArray = [1, 2, 3, 4, 5]

// function middleFunction(array) {
//     let sum = 0
//     let middle = 0
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//         middle = sum / array.length;
//     }
//     console.log(middle);
// }
// middleFunction(userArray)

// ==============================================================================================
// third task

// let userArray = [1, 2, 3, 4, 5, 6, 7, 8];

// function evenfunction(array) {
//     let emptyArray = []
//     console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {

//             emptyArray.push(array[i])
//         }
//     }
//     console.log(emptyArray)
// }
// evenfunction(userArray)

// ==============================================================================================


// fourth task
// let userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function middleFunction(array) {
//     let sum = 0
//     let middle = 0
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//         middle = sum / array.length;
//     }

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > middle) {
//             console.log(array[i])
//         }
//     }

// }
// middleFunction(userArray)

// ==============================================================================================


// fifth task

//join short way
// let arrayWord=["resad" , "kamal" , "elcin" , "bextiyar"]
// let joinWord=arrayWord.join(",")
// console.log(joinWord)


//write join function

// let arrayWord = ["resad", "kamal", "elcin", "bextiyar"]

// function join(array) {
//     let name = "";
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == array[array.length - 1]) {
//             name += array[i]
//         }
//         else {
//             name += array[i] + ",";
//         }
//     }
//    return name
// }
// console.log(join(arrayWord))

// ==============================================================================================


// sixth task
//reverse short way
// let arrayWord=["resad","kamal","elcin","bextiyar"]
// let joinWord=arrayWord.reverse()
// console.log(joinWord)


//write reverse function

// let arrayWord=["resad","kamal","elcin","bextiyar"]
// let arrayEmptyWord=[];

// function reverse(array){
// for(i=array.length-1; i>=0 ;i--){

//   arrayEmptyWord.push(array[i])

// }
// console.log(arrayEmptyWord)
// }
// reverse(arrayWord)



//write reverse function     another version 
// let a = [1, 2, 3, 4];
// let b = [];

// // a[3]=b[0]
// // a[2]=b[1]
// // a[1]=b[2]
// // a[0]=b[3]

// // a[i]=b[b.length-1-i]

// for (let i = 0; i < a.length; i++) {

//       b[i] = a[a.length - i - 1]

//   }
//   console.log(b)

// ==============================================================================================


// task seventh

// for in for version

// let array1=[1,2,3,4,5,6,7,8,9];
// let array2=[3,4,5,6,7,8,9,10];
// let array3=[]

// for(const elementOne of array1){
//   for(const elementTwo of array2){
//     if(elementOne == array1.indexOf(elementTwo))
//       array3.push(elementTwo)
//   }
// }
// console.log(array3)


// another version

// let array1=[1,2,3,4,5];
// let array2=[3,4,5];
// let array3=[];

//  for(let i=0 ;i<array1.length; i++){


//    if(array1.indexOf(array2[i])!=-1){               
//      array3.push(array2[i])
//     }
// }
//     console.log(array3)

// ==============================================================================================

// task eight

// let input = prompt("please input your sentences");
// let userInput = input.split(" ");
// let letter = prompt("pleaseinput your letter")
// let b = letter;
// let emptyArray = [];

// function firstNumberFunction(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < 1; j++) {
//             if ((array[i])[0].indexOf(b) != -1) {
//                 emptyArray.push(array[i])
//             }
//         }
//     }
//     console.log(emptyArray)
// }
// firstNumberFunction(userInput)

// ==============================================================================================







