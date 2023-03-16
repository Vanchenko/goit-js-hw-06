const inpEl = document.querySelector("#validation-input");
const inputClick = (event) => {
    if (inpEl.value.trim().length === Number(event.currentTarget.dataset.length)) {
        inpEl.classList.remove("invalid");
        inpEl.classList.add("valid");
    }
    else {
        inpEl.classList.remove("valid");
        inpEl.classList.add("invalid");
    };
};
inpEl.addEventListener('blur', inputClick);


//+++++++++++++++ Var 2 (use getAttribute) +++++++++++++++++++++++++++++++++
/*const inpEl = document.querySelector("#validation-input");
const inputClick = (event) => {
    if (inpEl.value.length === Number(inpEl.getAttribute("data-length"))) {
        inpEl.classList.remove("invalid");
        inpEl.classList.add("valid");
    }
    else {
        inpEl.classList.remove("valid");
        inpEl.classList.add("invalid");
    };
};
inpEl.addEventListener('blur', inputClick);*/