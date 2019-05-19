
const myNumbers = [1,2,3,4,5,6,7,8,9,10];

/*This is function pick a random element from the myNumbers array. 
Just call random_item(myNumbers) to get random number.
*/
function random_item(myNumbers)
{
  
return myNumbers[Math.floor(Math.random()*myNumbers.length)];
     
}


/* 
I need to create an Event trigger that runs a function to assign the user's input to a varibale
When the user enter a number
*/

document.getElementById("submitNumber").addEventListener("click", compareNumbers);

function compareNumbers() {
    let enteredNumber = Number(document.getElementById("enteredNumber").value);
    let randomNumber = random_item(myNumbers);
    if (randomNumber === enteredNumber) {
        document.getElementById("display").textContent="Correct";
    }else{
        document.getElementById("display").textContent= "Incorrect";
    }
}



/*

*/