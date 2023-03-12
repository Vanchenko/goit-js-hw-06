const catEl = document.querySelectorAll('.item');
console.log('Number of categories:', catEl.length);
catEl.forEach(function (elem) {
    const itemEl = elem.querySelector('h2');
    const itemsEl = elem.querySelectorAll('li');
    console.log('Category:', itemEl.textContent);
    console.log('Elements:', itemsEl.length)
});


