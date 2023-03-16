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

const ulgalEl = document.querySelector('.gallery');
const newStructEl = images.map((elem) => `
<li>
 <img src="${elem.url}" alt="${elem.alt}" width="320" height="180">
</li>`).join("");
ulgalEl.insertAdjacentHTML("beforeend", newStructEl);
ulgalEl.style.listStyle = "none";
ulgalEl.style.display = "flex";
ulgalEl.style.gap = "20px";
 

//+++++++++++++++++++ Variant 2 ++++++++++++++++++++++++++++++
/*const newStructEl1 = [];
const ulgalEl1 = document.querySelector('.gallery');
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
ulgalEl1.append(...newStructEl1);*/
