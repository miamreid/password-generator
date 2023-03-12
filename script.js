// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordFunc = {
  symbols: randomSymbols,
  numbers: randomNumbers,
  lower: randomLowercase,
  upper: randomUppercase
}

function randomSymbols() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomNumbers() {
  return String.fromCharCode(Math.floor(Math.rndom() * 10) + 48);
}

function randomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

generateBtn.addEventListener("click", function () {
  //Window prompts begins
  let generatedPassword = '';


  var passwordLength = Number(window.prompt("How many characters would you like your password to contain?"));
    //Checks that password length is greater than 8 characters but less than 128
    if (passwordLength < 8 || passwordLength > 128) {
      return;
    }
  console.log("Password length: " + passwordLength);

  var specialCharacters = confirm("Click OK to confirm including special characters.");
  console.log("Special characters: " + specialCharacters);

  var numericCharacters = confirm("Click OK to confirm including numeric characters.");
  console.log("Numeric characters: " + numericCharacters);

  var lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");
  console.log("Lowercase characters: " + lowercaseCharacters);

  var uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");
  console.log("Uppercase characters: " + uppercaseCharacters);
  //End of window prompts

  const typesCount = lowercaseCharacters + uppercaseCharacters + numericCharacters + specialCharacters;
  console.log('typesCount: ', typesCount);

  const typesArr = [{lowercaseCharacters}, {uppercaseCharacters}, {numericCharacters}, {specialCharacters}].filter
  (item => Object.values(item)[0]);
  console.log('typesArr: ', typesArr);

  if (typesArr === false) {
    return;
  }

  for(let i = 0; i <= passwordLength; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);
      });
  }
}
)
/*
    // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 */