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
for (const text of ingredients) {
  const elem = document.createElement("li");
  elem.textContent = text;
  elem.classList.add('item');
  newStructEl.push(elem);
}
ulingrEl.append(...newStructEl);

