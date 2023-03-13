# Random Password Generator

## Description

Taking the beginning assignment code of HTML and CSS, the webpage serves as a page to generate a random, strong password based on user input. In order to make the feature functional, the page needed Javascript variables, functions, arrays, and a for loop to sort through the data user's input. 

The original Javascript source code identified the generate button as an element, with a querySelector, as well as an event listener when a user clicks "Generate." The event listener inteded for the function to begin for users to input responses for including symbols, lowercase characters, uppercase characters, and password length. Once a password with matching criteria is generated, the final password would be translated to a string on the page for a user to select, copy, and paste. 

To optimize the starter code, I began by creating functions to generate random symbols, uppercase characters, lowercase characters, and numbers using charsets and a Math method. These functions served later on as an array in a for loop to generate a password of the user's matching criteria.

I learned most about using an array to count the types of functions used in order to factor "true" arrays into the matching criteria of the user's password.

## Usage

![initial page prompt when user clicks "Generate" button](//password-generator/Screen%20Shot%202023-03-13%20at%205.50.15%20PM.png)
![generated password text](//password-generator/Screen%20Shot%202023-03-13%20at%205.50.30%20PM.png)

Users that visit this website are able to click the generate button, which then starts a series of prompts to enter the password length, and whether the password should include numbers, special characters, lowercase letters, and/or uppercase letters.

No more than 128 characters can be defined as the password length, and no less than 8. If a user enters less than 8 characters or more than 128, the function will stop. Also, at least one other criteria must be selected. If the user expempts numeric characters, uppercase characters, lowercase characters, and symbols, the function will stop.

## Credits

-Source code taken from [https://github.com/coding-boot-camp/friendly-parakeet] <br/>
-Javascript Charcodes [https://net-comber.com/charset.html]

## License

No license. N/A.
