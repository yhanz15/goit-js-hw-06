function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = {
  numberEl: document.querySelector("#controls").children[0],
  createButton: document.querySelector("#controls").children[1],
  destroyButton: document.querySelector("#controls").children[2],
};

const boxes = document.querySelector("#boxes");

controls.createButton.addEventListener("click", () => {
  createBoxes(controls.numberEl.value);
});

controls.destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
});

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement("div");
    const divIdName = i;

    newBox.style.width = 20 + i * 10 + "px";
    newBox.style.height = 20 + i * 10 + "px";

    newBox.setAttribute("id", divIdName);
    newBox.style.backgroundColor = getRandomHexColor();

    controls.numberEl.value = "";

    boxes.append(newBox);
  }
}
