
/* 
    Make an empty array
    - ask to user a number to put into the array
    - keep asking numbers to user to put into the array until the SUM of the elemnts is less than 50
*/

let numbers = [];
let sum = 0;
let userNumbers;

while (sum < 50) {
        userNumbers = parseInt(prompt("Write a number less than 50"));
    if (userNumbers < 50 && !isNaN(userNumbers)) {
        sum += userNumbers;
        numbers.push(userNumbers);
    } 
}

console.log("Sum of the numbers is: " + sum);
console.log(numbers);