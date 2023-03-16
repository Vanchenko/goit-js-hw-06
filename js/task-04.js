let counterValue = 0;
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const spEl = document.querySelector("#value");

const btnClick = (event) => {
    switch (event.currentTarget.dataset.action) {
        case 'decrement': counterValue -= 1;
            break;
        case 'increment': counterValue += 1;
            break;
    };
    spEl.innerHTML = String(counterValue);
};
btnDecrementEl.addEventListener('click', btnClick);
btnIncrementEl.addEventListener('click', btnClick);


//++++++++++++++++++ Мой вариант 1, не красивый +++++++++++++++++++++++++++++
/*let counterValue = 0;
const divEl = document.querySelectorAll("#counter button");
const spEl = document.querySelector("#value");

const btnClick = (event) => {
    switch (event.currentTarget.dataset.action) {
        case 'decrement': counterValue -= 1;
            break;
        case 'increment': counterValue += 1;
            break;
    };
    spEl.innerHTML = String(counterValue);
};
divEl[0].addEventListener('click', btnClick);
divEl[1].addEventListener('click', btnClick);*/

