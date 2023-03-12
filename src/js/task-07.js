const inpEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const inputClick = () => {
    console.log(inpEl.value);
    spanEl.style.fontSize = inpEl.value + "px"
};

inpEl.addEventListener('change', inputClick);