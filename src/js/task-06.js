const inpEl = document.querySelector("#validation-input");
console.log(inpEl);


const inputClick = (event) => {
    console.log(event.currentTarget.dataset.length);
    console.log(inpEl.value.length);
    if (inpEl.value.length === Number(event.currentTarget.dataset.length)) {
        console.log('Anonymous');
        inpEl.classList.remove("invalid");
        inpEl.classList.add("valid");
    }
    else {
        console.log('No');
        inpEl.classList.remove("valid");
        inpEl.classList.add("invalid");
    };
};

inpEl.addEventListener('blur', inputClick);