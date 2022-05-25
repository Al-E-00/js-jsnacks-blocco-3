
/* 
- Into an array we have the verified names
- ask to user his name and tell him if he's allowed
- stop the loop once the name have been found
*/

let verifiedNames = ["Alessio", "Marta", "Giorgia", "Alberto", "Francesco", "Ludovica", "Veronica", "Marco"];

let userName = prompt("Write your name");

i = 0;
while (i < 1) {

    let found = false;

    if (verifiedNames[i] === userName){
        found = true;
    } 

    if(found) {
        alert("You're in!")
    } else {
        alert("You're out!")
    }

    i++
}