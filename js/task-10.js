function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
let quantityDiv = 0;

const inputClick = (event) => {
  quantityDiv = inputEl.value;
}
inputEl.addEventListener("blur", inputClick);

function createBoxes(amount) {
  const newStructEl = [];
  let size = 20;
  const divEl = document.querySelector("#boxes");
  for (let i = 0; i < amount; i += 1) {
    const elem = document.createElement("div");
    size = size + 10;
    elem.style.width = `${size}px`;
    elem.style.height = `${size}px`;
    elem.style.backgroundColor = getRandomHexColor();
    elem.style.marginTop = "10px";
    divEl.appendChild(elem);
    newStructEl.push(elem);
  }
}
function createClick() {
  createBoxes(quantityDiv); 
}
function destroyClick() {
  const divDestrEl = document.querySelector("#boxes");
  divDestrEl.innerHTML = '';
}
createBtnEl.addEventListener("click", createClick);
destroyBtnEl.addEventListener("click", destroyClick);


