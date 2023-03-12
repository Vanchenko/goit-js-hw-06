const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newStructEl = [];
const ulingrEl = document.querySelector('#ingredients');
console.log(ulingrEl);

for (const text of ingredients) {
  const elem = document.createElement("li");
  elem.textContent = text;
  elem.classList.add('item');
  newStructEl.push(elem);
}
console.log(newStructEl)
ulingrEl.append(...newStructEl);

