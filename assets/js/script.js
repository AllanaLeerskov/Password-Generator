// Assignment Code

//Variables for user prompts
var enter;
var yesNumber;
var yesCharacters;
var yesUppercase;
var yesLowercase;

//Variable arrays
//valid special characters
characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//valid numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//letter characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//need conversion for uppercase values
alphaUp = alpha.toUpperCase();

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to create

function generatePassword() {
    //user input
    
    //validates character length

    //warning if wrong length
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
