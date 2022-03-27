const keys = document.querySelectorAll('div.key');

keys.forEach((key) => {
    console.log(key.getAttribute('data-key'));
});
