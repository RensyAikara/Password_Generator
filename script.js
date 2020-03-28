// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalPassword = document.getElementById("password");
var lowerLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacters = ['1','2','3','4','5','6','7','8','9','0'];
var specialLetters = ['!','@','#','$','%','^','&','*','(',')','_',',','.',';','/','\\','[',']','{','}',' ','"','\'','+','-',':','<','>','?','`','~','|'];
var passwordValue = "";
var passwordResult = "";

  // Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordValue = "";
  var password = generatePassword();
  passwordText.value = password;
}

    // Generating password based on user selected criterias
function generatePassword(){
    // Selecting length and criterias for the password
    var lengthValue = prompt("What is the length of your password? Choose a number between 8 and 128.");
    var lowerCaseLetters = confirm("Do you want to include Lower Case character in your password?");
    if(lowerCaseLetters == true){
        alert("You chose to include Lower Case!");
    }
    var upperCaseLetters = confirm("Do you want to include Upper Case character in your password?");
    if(upperCaseLetters == true){
      alert("You chose to include Upper Case!");
    }
    var numericValues = confirm("Do you want to include Numeric Values in your password?");
    if(numericValues == true){
      alert("You chose to include Numbers!");
    }
    var specialCharacters = confirm("Do you want to include Special Character in your password?");
    if(specialCharacters == true){
      alert("You chose to include Special Characters!");
    }
    // Create an array for the results
    var resultNew = [lowerCaseLetters, upperCaseLetters, numericValues, specialCharacters];
    // Remove the unwanted criterias from array, calling function checking
    var resultone = resultNew.filter(checking);
    // If nothing is selcted for the password, alert the user
    if(resultone.length == 0){
        alert("Invalid entry!");
    }
    //otherwise generate the password using the selected criterias
    else{
       for(var i=0; i< lengthValue; i+=(resultone.length)){
           // if user wants to include lower case letters, calling a function to randomly select one lower case letter
              if(lowerCaseLetters === true){
                  randomLower();
              }
              // if user wants to include upper case letters, calling a function to randomly select one upper case letter
              if(upperCaseLetters === true){
                  randomUpper();
              }
              // if user wants to include numbers, calling a function to randomly select one number
              if(numericValues === true){
                  randomNumeric();
              }
              // if user wants to include special character, calling a function to randomly select one special character
              if(specialCharacters === true){
                  randomSpecial();
              }
              console.log(passwordValue);
          }
      // reducing password length to given value
        passwordResult = passwordValue.slice(0,lengthValue);
        return passwordResult;
    }
}
  
  // function "checking"
  function checking(value){
      return value == true;
  }
  //function for selecting a random lower case letter
  function randomLower(){
      var lowerIndex= Math.floor(Math.random() * (26 - 0));
      passwordValue += lowerLetters[lowerIndex];
  }
  //function for selecting a random upper case letter
  function randomUpper(){
      var upperIndex= Math.floor(Math.random() * (26 - 0));
      passwordValue += upperLetters[upperIndex];
  }
  //function for selecting a random number
  function randomNumeric(){
      var numberIndex= Math.floor(Math.random() * (10 - 0));
      passwordValue += numberCharacters[numberIndex];
  }
  //function for selecting a random special character
  function randomSpecial(){
      var specialIndex= Math.floor(Math.random() * (26 - 0));
      passwordValue += specialLetters[specialIndex];
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
