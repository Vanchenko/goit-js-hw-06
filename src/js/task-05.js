// ++++++ вариант 1 (с blur и реакцией на enter)+++++++++++++++
/*const inpEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const  inputClick = () => {
    if (inpEl.value === '') { return }
    else {
        spanEl.textContent = inpEl.value;
        inpEl.value = '';
    };
};
const  inputClick1 = (event) => { 
    if (event.key === 'Enter') { inputClick(event) };
};
document.addEventListener("keyup", inputClick1);
inpEl.addEventListener('blur', inputClick);*/

// ++++++ вариант 2 (только input, как просили в ТЗ)+++++++++++++++
const inpEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
const  inputClick = () => {
    if (inpEl.value === '') {
        spanEl.textContent = 'Anonymous';
    }
    else {
        spanEl.textContent = inpEl.value;
    };
};
inpEl.addEventListener('input', inputClick);