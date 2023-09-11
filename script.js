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
// Verify that length entered is between 8 and 12 characters
// If it isn't, keep prompting until they enter a valid value
//   maybe use a while loop?
//   for loop doesnt really work
//   Remember: prompt always returns a STRING 
//   even if the string is made up of nmumbers
// Ask user if they want to include:
//   capital letters?
//   Lowercase letters?
//   Special values?
//  These are supposed to be MUST include IF the user said yes/OK to a prompt/confirm.
// Use the confirm() method to get a boolean value/answer to prompt
// WHAT IF the user said No to ALL of the prompts??? that might break something.
//   - sounds like more validation and maybe another while loop.
// Keep track of answers in variables
// probably use # characters from user to do a for loop to:
//   get random characters until # characters has been met.
//      a random what? number? lowercase? upper case? symbol? How do we decide?
//   add that charcter to a string (concatenate to end of ongoing pw being built)
//     - need variable for a new password so we an add on to it each iteraction
//     - should be declared OUTSIDE of the for loop so that the loop doesn't reset it each time
//        and to make sure the pw being built
//  How do we make sure we have included each of the options the user selected to include?



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

