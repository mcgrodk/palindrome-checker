const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkForPalindrome() {
  const userInput = textInput.value;

  if (!userInput) {
    alert("Please input a value");
    result.style.display = "none";
    return;
  }

  // filter() executes a function on each element in the array;
  // test() is used to check if a variable matches a regex
  const forwardArray = [...userInput.toLowerCase()].filter(char => /^[0-9a-z]$/.test(char));
  const backwardArray = [...forwardArray].reverse();

  let isPalindrome = true;

  for (let i = 0; i < forwardArray.length; i++) {
    if (forwardArray[i] !== backwardArray[i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    result.textContent = `${userInput} is a palindrome.`;
  } else {
    result.textContent = `${userInput} is not a palindrome.`;
  }

  result.style.display = "block";
}

checkBtn.addEventListener("click", checkForPalindrome);