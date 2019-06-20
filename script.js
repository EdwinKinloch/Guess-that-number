
const myNumbers = [1,2,3];

/*This function when ran pick a random element from the myNumbers array. 
Just call random_item(myNumbers) to get random number.
*/
function random_item(myNumbers)
{
return myNumbers[Math.floor(Math.random()*myNumbers.length)];   
}

/*
This function when ran compares the number the user entered to the randomly picked number.
*/
function compareNumbers() {
    let enteredNumber = Number(document.getElementById("enteredNumber").value);
    let randomNumber = random_item(myNumbers);
    if (randomNumber === enteredNumber) {
        document.getElementById("displayCorrect").textContent = "Correct";
        setTimeout("location.href = 'index.html'",1000);
    }else{
        document.getElementById("displayWrong").textContent = "Wrong";
        setTimeout("location.href = 'index.html'",1000);
    }
}

function checkInput() {
    let inputVaule = document.querySelector("#enteredNumber").value;
    if (inputVaule.length === 0){
        // document.querySelector("#displayNeedInput").textContent = "Please enter number";
        // setTimeout("location.href = 'index.html'",1000);
        null
    }else{
        compareNumbers();
    }
}

/*
This event listener runs the compareNumber() function when the submit button is clicked.
*/
document.getElementById("submitNumber").addEventListener("click", checkInput);





/*

*/