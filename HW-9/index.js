const parentBox = document.querySelector(".mainBlock");

const box = () => {
  for (let i = 0; i < 100; i++) {
    const square = document.createElement("div");
    const colors = '#'+Math.random().toString(16).substr(2,6);
    square.style.cssText = `width: 50px; height: 50px; background-color: ${colors};`;
    parentBox.append(square);

  }
};

setInterval(() => {
  parentBox.innerHTML = "";
  box();
}, 100);