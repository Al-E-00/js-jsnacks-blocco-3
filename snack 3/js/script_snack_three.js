
/* 
- Ask 5 times to user to enter a number
- the program print the sum of all the entered numbers
*/


let askedTimes = 0;
let sum = 0;

while (askedTimes < 5) {
    let userNumber = parseInt(prompt("Enter a number"));
    if (!isNaN(userNumber)){
        sum += userNumber;

        askedTimes += + 1;
    }
}

console.log(sum);