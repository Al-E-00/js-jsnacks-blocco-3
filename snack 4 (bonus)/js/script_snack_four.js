
/* 
- Into an array we have the verified names
- ask to user his name and tell him if he's allowed
- stop the loop once the name have been found
*/

let verifiedNames = ["Alessio", "Marta", "Giorgia", "Alberto", "Francesco", "Ludovica", "Veronica", "Marco"];

let userName = prompt("Write your name");
let found = false;

i = 0;
while (i < verifiedNames.length) {

    if (verifiedNames[i] === userName){
        found = true;
    } 

    i++
}

if(found) {
    alert("You're in!")
} else {
    alert("You're out!")
}