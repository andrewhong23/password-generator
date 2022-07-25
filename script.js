// Assignment code here
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", '[', '\'', "]", " ^ ", "_", "`", "{", "|","}", "~"]


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getRandom (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomCharacters = arr[randomIndex]; 
  console.log(randomCharacters);
  return randomCharacters; 
}

// Write password to the #password input


function generatePassword () {
  var finalPassword = []
  var passwordOptions = [];
  var numOfCharacters = parseInt(prompt("How many characters do you want your password to contain?"))
  if (numOfCharacters < 8 || numOfCharacters > 128) {
    alert("Choose a valid password length");
    generatePassword ()
  } 
  
  var hasNumbers = confirm("Do you want your password to contain numbers?")
    if (hasNumbers) {
      passwordOptions = passwordOptions.concat(numbers)
    }

  var hasUppers= confirm("Do you want your password to contain uppercase letters?")
    if (hasUppers) {
      passwordOptions = passwordOptions.concat(upperCaseLetters)
    }

  var hasLowers = confirm("Do you want your password to contain lowercase letters?")
    if (hasLowers) {
      passwordOptions = passwordOptions.concat(lowerCaseLetters)
    }
  
  var hasSpecial = confirm("Do you want your password to contain speical characters?")
    if (hasSpecial) {
      passwordOptions = passwordOptions.concat(specialCharacters)
    }

    console.log(passwordOptions)

  for (var i=0; i < numOfCharacters; i++) {
        finalPassword.push(getRandom(passwordOptions))

    //  if (hasUppers && finalPassword.length < numOfCharacters) {
    //     var randomUpper = getRandom(upperCaseLetters);
    //     finalPassword.push(randomUpper)
    //   }

    //   if (hasLowers && finalPassword.length < numOfCharacters) {
    //     var randomLower = getRandom(lowerCaseLetters);
    //     finalPassword.push(randomLower)
    //   }

    //   if (hasSpecial && finalPassword.length < numOfCharacters) {
    //     var randomSpecial = getRandom(specialCharacters);
    //     finalPassword.push(randomSpecial)
    //   }
  }
    

  return finalPassword.join('');
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
