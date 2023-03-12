const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },

];

/*const newStructEl1 = [];
const ulgalEl1 = document.querySelector('.gallery');
console.log(ulgalEl1);
for (const text of images) {
  const elem = document.createElement("li");
  const imageEl = document.createElement("img");
  imageEl.src = text.url;
  imageEl.alt = text.alt;
  imageEl.width = 640;
  elem.appendChild(imageEl);
  console.log(elem);
  newStructEl1.push(elem);
}
console.log(newStructEl1)
ulgalEl1.append(...newStructEl1);*/

const ulgalEl = document.querySelector('.gallery');
const newStructEl = images.map((elem) => `
<li>
 <img src="${elem.url}" alt="${elem.alt}" width="640">
</li>`).join("");

ulgalEl.insertAdjacentHTML("beforeend", newStructEl);

 
  //elem.textContent = text;
  //elem.classList.add('item');
  //newStructEl.push(imageEl);
//console.log(newStructEl.length)
//for (let i = 0; i < newStructEl.length; i += 1) {
 // console.log(newStructEl[i])

