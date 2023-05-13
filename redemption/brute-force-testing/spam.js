// Generate a random redemption code
function generateRandomCode() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var codeLength = 8;
  var code = '';
  
  for (var i = 0; i < codeLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  
  return code;
}

// Retrieve the existing usedCodes array from the local storage
var usedCodes = JSON.parse(localStorage.getItem("usedCodes")) || [];

// Generate and add random codes to the usedCodes array
for (var i = 0; i < 5; i++) {
  var randomCode = generateRandomCode();
  usedCodes.push(randomCode);
}

// Update the usedCodes array in the local storage
localStorage.setItem("usedCodes", JSON.stringify(usedCodes));

// Output the updated usedCodes array
console.log("Updated usedCodes:", usedCodes);
