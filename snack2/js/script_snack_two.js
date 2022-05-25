
/* 
- Let enter a number (n) from the user
- generates N arrays (made by 10 random numbers (from 1 to 100))
- Print the result
*/

let userNumber = parseInt(prompt("Enter a number"));
let arraysNumber = [];
let arrays = [];

while (arraysNumber.length < userNumber){
    
    
    while (arrays.length < 10) {
        let casualNumber = (Math.floor(Math.random() * 100));
        arrays.push(casualNumber);
    }

    arraysNumber.push(arrays);
}

console.log(arrays);
console.log(arraysNumber);
