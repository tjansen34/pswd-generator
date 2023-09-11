// Assignment Code
var generateBtn = document.querySelector("#generate");


// Function called generatePassword
function generatePassword () {
  var pwLength = prompt ("choose a length between 8 and 128")
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialCharacters = "!@#$%^&*()_+?"
  var numbers = "1234567890"
  var characterBase = ""
  var password = ""
  if (confirm("add lowercase?")){
    characterBase += lowerCase
  } 
  if (confirm("add upperCase?")){
    characterBase += upperCase
  } 
  if (confirm("add specialCharacters?")){
    characterBase += specialCharacters
  } 
  if (confirm("add numbers?")){
    characterBase += numbers
  } 
  for (i = 0; i < pwLength; i++){
    password += characterBase.charAt(Math.floor(Math.random() * characterBase.length))
  }
  return password
}
// Prompt user for pw length
// Verify that length entered is between 8 and 128 characters
// Ask user if they want to include:
//   capital letters?
//   Lowercase letters?
//   Special values?




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

