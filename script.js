// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  var passwordLength = Number(window.prompt("How many characters would you like your password to contain?"));
  console.log("Password length: " + passwordLength);

  var specialCharacters = confirm("Click OK to confirm including special characters.");
  console.log("Special characters: " + specialCharacters);

  var numericCharacters = confirm("Click OK to confirm including numeric characters.");
  console.log("Numeric characters: " + numericCharacters);

  var lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");
  console.log("Lowercase characters: " + lowercaseCharacters);

  var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");
  console.log("Uppercase characters: " + uppercaseCharacters);

}
)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



