// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  function getPasswordOptions() {
    var passwordLength = parseInt(prompt('select a password length between 8 and 128'))

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
      alert('please insert a number between 8 and 128');
      return getPasswordOptions();
    }

      var includeLowerCase = confirm('would you like to include lowercase')
      var includeUpperCase = confirm('would you like to include uppercase')
      var includeNumeric = confirm('would you like to include numerics')
      var includeSpecialChar = confirm('would you like to include special characters')

    if (!(includeLowerCase || includeUpperCase || includeNumeric || includeSpecialChar)) {
      alert('please choose at least one of the password requirements');
      return getPasswordOptions()
    }

    return {
      passwordLength: passwordLength,
      includeLowerCase: includeLowerCase,
      includeUpperCase: includeUpperCase,
      includeNumeric: includeNumeric,
      includeSpecialChar: includeSpecialChar
    };
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  // Function to generate password with user input
  function generatePassword() {

    var options = getPasswordOptions();

    var allChars = []
    var password = ""

    if (options.includeLowerCase) {
      password += getRandom(lowerCasedCharacters)
      allChars = allChars.concat(lowerCasedCharacters)
    }

    if (options.includeUpperCase) {
      password += getRandom(upperCasedCharacters)
      allChars = allChars.concat(upperCasedCharacters)
    }

    if (options.includeNumeric) {
      password += getRandom(numericCharacters)
      allChars = allChars.concat(numericCharacters)
    }

    if (options.includeSpecialChar) {
      password += getRandom(specialCharacters)
      allChars = allChars.concat(specialCharacters)
    }

    for (var i = password.length; i < options.passwordLength; i++) {
      password += getRandom(allChars)
    }

    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
