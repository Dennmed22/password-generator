// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var spCharacter = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
var pwLength = 0;
var result = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    while (pwLength < 8 || pwLength > 128) {
        pwLength = prompt("How long would you like the password? \nPassword must be between 8 and 128 characters.");
    }
    var pwCriteria = [];
        pwlowerCase = confirm("Do you want to include lower case charecters? ");
        pwupperCase = confirm("Do you want to include upper case charecters? ");
        pwNumeric = confirm("Do you want to include numeric charecters? ");
        pwSpecial = confirm("Do you want to include special charecters? ");
            if (pwlowerCase === true ){
                pwCriteria = pwCriteria.concat(lowerCase)
                    return "Your secure password ";
            }
        
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

