
/* 
- Into an array we have the verified names
- ask to user his name and tell him if he's allowed
- stop the loop once the name has been found
*/

const verifiedNames = ["Alessio", "Marta", "Giorgia", "Alberto", "Francesco", "Ludovica", "Veronica", "Marco"];
const buttonClick = document.getElementById("checkButton");
const alertResult = document.getElementById("alertResult");

buttonClick.addEventListener("click", function() {
    const userName = document.getElementById("userName").value;


    let found = false;

    let i = 0;
    while (i < verifiedNames.length) {
        
        if (userName == "") {
            window.alert("Enter a valid Name!")
            break
        } else {
            console.log("while - " + verifiedNames[i]);

            if (verifiedNames[i] === userName){
            found = true;
            break
            }        

        }
        i++ 
        
}
    if(found && userName != "") {
        alertResult.innerHTML= "You're in!";
        alertResult.classList.remove("alert-danger");
        alertResult.classList.add("alert-success");
    } else if (userName != ""){
        alertResult.innerHTML = "You're out!";
        alertResult.classList.remove("alert-success");
        alertResult.classList.add("alert-danger");
    }

    if (found != ""){
        alertResult.classList.remove("d-none");
    }

})




