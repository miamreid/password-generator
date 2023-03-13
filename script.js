// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

var passwordFunc = {
  symbols: specialCharacters,
  numbers: numericCharacters,
  lower: lowercaseCharacters,
  upper: uppercaseCharacters
}

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

  passwordText.innerText = generatePassword(symbolsPrompt, numbersPrompt, lowerPrompt, upperPrompt, passwordLength);
});

function generatePassword(symbols, numbers, lower, upper, passwordLength) {

  var generatedPassword = '';

  var funcTypes = lower + upper + numbers + symbols;
  console.log('funcTypes: ', funcTypes);

  var arrTypes = [{lower}, {upper}, {numbers}, {symbols}].filter
  (item => Object.values(item)[0]);
  console.log('arrTypes: ', arrTypes);

  if (arrTypes === false) {
    return;
  }

  for(let i = 0; i <= passwordLength; i += funcTypes) {
    arrTypes.forEach(type => {
      var funcName = Object.keys(type)[0];

      generatedPassword += passwordFunc [funcName]();
      });
  }

  var finalPassword = generatedPassword;

  return finalPassword;
}


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