// Assignment Code

//Creates variable to pull out the #generate id on the generate button within the html
var generateBtn = document.querySelector("#generate");

//Creates a variable that acts as a placeholder in thet password text area until a password is generated
var passwordText = document.querySelector("#password");

//this Object holds the properties and functions that randomize characters, numbers, etc.
var passwordFunc = {
  symbols: specialCharacters,
  numbers: numericCharacters,
  lower: lowercaseCharacters,
  upper: uppercaseCharacters
}

//Event listener for when user clicks the "generate" button,a series of prompts begins
generateBtn.addEventListener("click", function() {
  var passwordLength = Number(window.prompt("How many characters would you like your password to contain?"));
  //Checks that password length is greater than 8 characters but less than 128
  if (passwordLength < 8 || passwordLength > 128) {
    return;
  }
  console.log("Password length: " + passwordLength);

  var symbolsPrompt = confirm("Click OK to confirm including special characters.");
  console.log("Special characters: " + symbolsPrompt);

  var numbersPrompt = confirm("Click OK to confirm including numeric characters.");
  console.log("Numeric characters: " + numbersPrompt);

  var lowerPrompt = confirm("Click OK to confirm including lowercase characters.");
  console.log("Lowercase characters: " + lowerPrompt);

  var upperPrompt = confirm("Click OK to confirm including uppercase characters.");
  console.log("Uppercase characters: " + upperPrompt);
//end of window prompts
  passwordText.innerText = generatePassword(symbolsPrompt, numbersPrompt, lowerPrompt, upperPrompt, passwordLength);
});

//Function that pulls the randomize functions together to generate password
function generatePassword(symbols, numbers, lower, upper, passwordLength) {

//left as an empty string to initialize before function ends
  var generatedPassword = '';

//counts how many types user confirms to use in strong password
  var funcTypes = lower + upper + numbers + symbols;
  console.log('funcTypes: ', funcTypes);

  //filters out the function types that are not selected or shown as "true" in an array
  var arrTypes = [{lower}, {upper}, {numbers}, {symbols}].filter
  (item => Object.values(item)[0]);
  console.log('arrTypes: ', arrTypes);

//if none of the arrays are true, the function stops
  if (arrTypes === false) {
    return;
  }

//a for loop that loops each function type that is true, and runs their randomized functions identified in the passwordFunc object which is appended
  for(let i = 0; i <= passwordLength; i += funcTypes) {
    arrTypes.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += passwordFunc [funcName]();
      });
  }
//assigns the final password to equal generated password
  var finalPassword = generatedPassword;

  return finalPassword;
}

//functions to randomize symbols, numeric characters, lowercase characters, and uppercase characters from 
function specialCharacters() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function numericCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function lowercaseCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function uppercaseCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}