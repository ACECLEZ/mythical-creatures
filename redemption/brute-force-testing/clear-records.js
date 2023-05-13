// Retrieve the existing usedCodes array from the local storage
var usedCodes = JSON.parse(localStorage.getItem("usedCodes")) || [];

// Find the index of "sunnybest" in the usedCodes array
var index = usedCodes.indexOf("sunnybest");

if (index > -1) {
  // Remove "sunnybest" from the usedCodes array
  usedCodes.splice(index, 1);

  // Update the usedCodes array in the local storage
  localStorage.setItem("usedCodes", JSON.stringify(usedCodes));

  // Output the updated usedCodes array
  console.log("Updated usedCodes:", usedCodes);
} else {
  console.log("No record of 'sunnybest' found in usedCodes.");
}
