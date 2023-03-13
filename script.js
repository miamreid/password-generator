// Assignment Code
var generateBtn = document.querySelector("#generate");

const passwordEl = document.getElementById("password");

const passwordFunc = {
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

  passwordEl.innerText = generatePassword(symbolsPrompt, numbersPrompt, lowerPrompt, upperPrompt, passwordLength);
});

function generatePassword(symbols, numbers, lower, upper, passwordLength) {

  let generatedPassword = '';

  const typesCount = lower + upper + numbers + symbols;
  console.log('typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {numbers}, {symbols}].filter
  (item => Object.values(item)[0]);
  console.log('typesArr: ', typesArr);

  if (typesArr === false) {
    return;
  }

  for(let i = 0; i <= passwordLength; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

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
  return String.fromCharCode(Math.floor(Math.rndom() * 10) + 48);
}

function lowercaseCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function uppercaseCharacters() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/*
generateBtn.addEventListener("click", function () {
  
  let generatedPassword = '';


  //Window prompts begin
  var passwordLength = Number(window.prompt("How many characters would you like your password to contain?"));
    //Checks that password length is greater than 8 characters but less than 128
    if (passwordLength < 8 || passwordLength > 128) {
      return;
    }
  console.log("Password length: " + passwordLength);

  specialCharacters = confirm("Click OK to confirm including special characters.");
  console.log("Special characters: " + specialCharacters);

numericCharacters = confirm("Click OK to confirm including numeric characters.");
  console.log("Numeric characters: " + numericCharacters);

lowercaseCharacters = confirm("Click OK to confirm including lowercase characters.");
  console.log("Lowercase characters: " + lowercaseCharacters);

uppercaseCharacters = confirm("Click OK to confirm including uppercase characters.");
  console.log("Uppercase characters: " + uppercaseCharacters);
  //End of window prompts

  const typesCount = lower + upper + numbers + symbols;
  console.log('typesCount: ', typesCount);

  const typesArr = [{lower}, {upper}, {numbers}, {symbols}].filter
  (item => Object.values(item)[0]);
  console.log('typesArr: ', typesArr);

  if (typesArr === false) {
    return;
  }

  for(let i = 0; i <= passwordLength; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += passwordFunc [funcName]();
      });
  }
  console.log(generatedPassword);
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