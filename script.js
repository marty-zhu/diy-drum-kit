const keys = document.querySelectorAll('div.key');

document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    key.classList.add('strike');
})
