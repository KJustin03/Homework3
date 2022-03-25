// Assignment Code
var generateBtn = document.querySelector("#generate");

//Characters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','X','Z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacters = ['!','@','#','$','%','^','&','*','?','.',];

var userChoice;
var lowerCheck;
var upperCheck;
var numberCheck;
var specialCheck;

function generatePassword() {
  var userChoice;
  var lowerCheck;
  var upperCheck;
  var numberCheck;
  var specialCheck;
  var passwordLength = prompt("How long do you want your password to be? Must be at least 8 characters and no more than 128 characters.");
  if (!passwordLength) { 
    alert ("Something went wrong. Please try again")
  }
  if (passwordLength < 8 || passwordLength > 128) {
      alert ("Password length should be at least more than 8 and less than 128.")
  } else if (passwordLength >= 8 && passwordLength <= 128) {
      lowerCheck = confirm("Would you like to add a lowercase letter to your password?");
      upperCheck = confirm("Would you like to add an Uppercase letter to your password?");
      numberCheck = confirm("Would you like to add a number to your password?");
      specialCheck = confirm("Would you like to add a special character to your password?");
  } if (!upperCheck == true && !lowerCheck == true && !numberCheck == true && !specialCheck == true) {
      alert ("Must select a character to continue!");
  } if (upperCheck && lowerCheck && numberCheck && specialCheck) {
      userChoice = upperCase.concat(lowerCase, numbers, specialCharacters);
  // 3 true statements
    } else if (upperCheck && lowerCheck && numbers) {
      userChoice = upperCase.concat(lowerCase, numbers);
    } else if (upperCheck && lowerCheck && specialCharacters) {
      userChoice = upperCase.concat(lowerCase, specialCharacters);
    } else if (lowerCheck && numbers && specialCharacters) {
      userChoice = lowerCase.concat(numbers, specialCharacters);
    } else if (upperCheck && numbers && specialCharacters){
      userChoice = upperCase.concat(numbers, specialCharacters);
  // 2 true statements
    } else if (upperCheck && lowerCheck) {
      userChoice = upperCase.concat(lowerCheck);
    } else if (upperCheck && numbers) {
      userChoice = upperCase.concat(numbers);
    } else if (upperCheck && specialCharacters) {
      userChoice = upperCase.concat(specialCharacters);
    } else if (lowerCheck && numbers) {
      userChoice = lowerCase.concat(numbers);
    } else if (lowerCheck && specialCharacters) {
      userChoice = lowerCase.concat(specialCharacters);
    } else if (numbers && specialCharacters) {
      userChoice = numbers.concat(specialCharacters)
  // 1 true statement
    } else if (upperCheck) {
      userChoice = upperCase;
    } else if (lowerCheck) {
      userChoice = lowerCase;
    } else if (numbers) {
      userChoice = numbers;
    } else if (specialCharacters) {
      userChoice = specialCharacters;
    }
      var finish = [];
    for (var i = 0;i < passwordLength; i++){
      var selectedPassword = userChoice[Math.floor(Math.random()*userChoice.length)];
      finish.push(selectedPassword);
    }
    return finish.join('');
};   

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

