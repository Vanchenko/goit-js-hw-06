const inpEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

const inputClick = () => {
    spanEl.style.fontSize = inpEl.value + "px"
};

inpEl.addEventListener('change', inputClick);