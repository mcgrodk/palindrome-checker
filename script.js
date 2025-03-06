const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkForPalindrome() {
  const userInput = textInput.value;
  const userInputArray = [...userInput];
  const forwardArray = userInputArray.filter(char => char == /[a-z0-9]/)
  console.log(userInputArray);
  console.log(forwardArray);
}

function displayResult() {
  const userInput = textInput.value;
  console.log(textInput.value);
  
  if (userInput === "") {
    alert("Please input a value")
  } else {
    result.style.display = "block";
    result.textContent = `You entered ${userInput}.`;
  }
}

checkBtn.addEventListener("click", checkForPalindrome);