// <!-- JavaScript -->
const nameField = document.getElementById("nameField");
const ageField = document.getElementById("ageField");
const genderField = document.getElementById("genderField");
// getting values
let name = nameField.value;
let age = Number(ageField.value);
let gender = genderField.value; // "", "F", or "M"
// setting values
nameField.value = "";
ageField.value = "";
genderField.value = ""; // reset to "Select One…"
