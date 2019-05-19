
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

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
    }else{
        document.getElementById("displayWrong").textContent = "Wrong";
    }
}

/*
This event listener runs the compareNumber() function when the submit button is clicked.
*/
document.getElementById("submitNumber").addEventListener("click", compareNumbers);





/*

*/