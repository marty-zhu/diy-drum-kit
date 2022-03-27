const keys = document.querySelectorAll('div.key');

document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    let keyAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    keyAudio.play();
    key.classList.add('strike');
});

document.addEventListener('keyup', (e) => {
    let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    key.classList.remove('strike');
});
