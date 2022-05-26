
/* 
- Let enter a number (n) from the user
- generates N arrays (made by 10 random numbers (from 1 to 100))
- Print the result
*/

const userNumber = parseInt(prompt("Enter a number"));
let arraysNumber = [];


while (arraysNumber.length < userNumber){
    
    const newArray = [];

    while (newArray.length < 10) {
        
        const casualNumber = Math.floor(Math.random() * 100) + 1;
    
        if (!newArray.includes(casualNumber)) {
            newArray.push(casualNumber);
        }
    }

    arraysNumber.push(newArray);
}


console.log(arraysNumber);
