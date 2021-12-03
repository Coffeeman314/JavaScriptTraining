// 01
const expForm = document.getElementById("expForm");
const expAnswer = document.getElementById("expFormAnswer");
expForm.addEventListener("submit", (event) => {
  event.preventDefault();
  expAnswer.innerText = "";
  const baseNumber = event.target[0].value;
  const exponentNumber = event.target[1].value;
  if (exponentNumber >= 0) {
    expAnswer.innerText = `Відповідь: ${getExpPower(baseNumber, exponentNumber)}.`;
  } else {
    expAnswer.innerText = `Вводити тільки додатні степені і 0.`
  }
  
});

const getExpPower = (baseNumber, exponentNumber) => {
  let resultExp = 1;
  for (let i = 0; i < exponentNumber; i++) {
    resultExp *= baseNumber;
}

return resultExp;
};

// 02
const upperCaseForm = document.getElementById("upperCaseForm");
const upperCaseAnswer = document.getElementById("upperCaseAnswer");
upperCaseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  upperCaseAnswer.innerText = "";
  const randomName = event.target[0].value;
  upperCaseAnswer.innerText = `Відповідь: ${formatName(randomName)}.`;
});

const formatName = (randomName) =>
  randomName.charAt(0).toUpperCase() + randomName.slice(1).toLowerCase();

// 03
const randomNumberForm = document.getElementById("randomNumberForm");
const randomNumberAnswer = document.getElementById("randomNumberAnswer");
randomNumberForm.addEventListener("submit", (event) => {
  event.preventDefault();
  randomNumberAnswer.innerText = "";
  const min = event.target[0].value;
  const max = event.target[1].value;
  randomNumberAnswer.innerText = `Відповідь: ${getRandomInt(min, max)}.`;
});

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 04
const countLetterForm = document.getElementById("countLetterForm");
const countLetterOutput = document.getElementById("countLetterOutput");
const countLetterError = document.getElementById("countLetterError");
countLetterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  countLetterOutput.innerText = "";
  countLetterError.innerText = "";
  const someString = event.target[0].value;
  const someLetter = event.target[1].value;
  if (someLetter.length === 1) {
    countLetterOutput.innerText = `Відповідь: ${countLetter(someString,someLetter)}.`;
  } else {
    countLetterError.innerText = "idiot";
  }
});

const countLetter = (someString, someLetter) => {
  const stringArr = someString.toLowerCase().split("");
  let counter = 0;
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === someLetter.toLowerCase()) {
      counter++;
    }
  }
  return counter;
};

// 05
const deleteForm = document.getElementById("deleteLetter");
const deleteLetterAnswer = document.getElementById("deleteLetterOutput");
const deleteLetterError = document.getElementById("deleteLetterError");
deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  deleteLetterAnswer.innerText = "";
  deleteLetterError.innerText = "";
  const stringForDelete = event.target[0].value;
  const someLetterToDelete = event.target[1].value;
  if (someLetterToDelete.length === 1) {
    deleteLetterAnswer.innerText = deleteLetterFunction(
      stringForDelete,
      someLetterToDelete
    );
  } else {
    deleteLetterError.innerText = "idiot";
  }
});

const deleteLetterFunction = (stringForDelete, someLetterToDelete) => {
  const stringArr = stringForDelete.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i].toLowerCase() === someLetterToDelete.toLowerCase()) {
      stringArr.splice(i, 1);
      i--;
    }
  }
  return stringArr.join("");
};

// 06
const palindromeForm = document.getElementById("isPalindromeForm");
const answer = document.getElementById("palindromeOutput");
const someError = document.getElementById("palindromeError");
palindromeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  answer.innerText = "";
  someError.innerText = "";
  const inputData = event.target[0].value;
  if (inputData.length > 0) {
    answer.innerText = isPalindrome(inputData);
  } else {
    someError.innerText = "Empty string is not a palindrome, you bastard!";
  }
});

const isPalindrome = (text) => {
  const checkWord = text.split(" ").join("").toLowerCase();
  const reverseWord = checkWord.split("").reverse().join("");
  return checkWord === reverseWord;
};
