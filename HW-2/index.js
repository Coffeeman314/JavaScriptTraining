const form = document.getElementById("form");
const sumText = document.getElementById("sumText");
const errorContent = document.getElementById("error");

const calculator = (firstNumber, secondNumber, isEven) => {
  let result = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    if (!isEven || i % 2 === 1) {
      result += i;
    }
  }
  return result;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorContent.innerText = "";
  sumText.innerText = "" ;
  const firstNumber = +event.target[0].value;
  const secondNumber = +event.target[1].value;
  const isEven = event.target[2].checked;

  if (firstNumber >= secondNumber) {
    errorContent.innerText = "Eww, input correct numbers, please!";
  } else {
    sumText.innerText = `Sum is ${calculator(firstNumber, secondNumber, isEven)}.`;
  }
});

export { calculator , form };