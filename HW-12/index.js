//////////INFINITE GENERATOR//////////////
function* createGenerator(start) {
  for (let i = 1; i > 0; i++) yield i;
  return "Infinity";
}

const idGenerator = createGenerator(1);

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

///////////////ADVANCED///////////////////
const text = document.getElementById("text");

function* fontGenerator() {
  let fontSize = 14;
  let font;
  while (true) {
    font = yield;
    if (font === "down") {
      text.style.fontSize = `${(fontSize -= 2)}px`;
    } else if (font === "up") {
      text.style.fontSize = `${(fontSize += 2)}px`;
    }
  }
}
const gen = fontGenerator();
gen.next().value;

document.getElementById("btnMinus").addEventListener("click", (event) => {
  gen.next("down").value;
});

document.getElementById("btnPlus").addEventListener("click", (event) => {
  gen.next("up").value;
});