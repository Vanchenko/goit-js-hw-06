let counterValue = 0;
const divEl = document.querySelectorAll("#counter button");
const spEl = document.querySelector("#value");
console.log(divEl[0]);
console.log(spEl);
console.log(spEl.innerHTML);

const btnClick = (event) => {
    switch (event.currentTarget.dataset.action) {
        case 'decrement': counterValue -= 1;
            break;
        case 'increment': counterValue += 1;
            break;
    };
    spEl.innerHTML = String(counterValue);
    console.log(counterValue);
};

divEl[0].addEventListener('click', btnClick);
divEl[1].addEventListener('click', btnClick);

//console.log("event: ", event);
//console.log("event type: ", event.type);
//console.log("currentTarget: ", event.currentTarget);
//console.log(event.currentTarget.dataset.action);
