const keys = document.querySelectorAll('div.key');

let keyState = {};
for (let key of keys) {
    keyState[key.getAttribute('data-key')] = false;
}

document.addEventListener('keydown', (e) => {
    if (Object.keys(keyState).includes(`${e.keyCode}`)) {
        if (!keyState[e.keyCode]) {
            let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
            let keyAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

            keyAudio.currentTime = 0;
            keyAudio.play();
            key.classList.add('strike');
            keyState[e.keyCode] = true;
        };
    }
});

document.addEventListener('keyup', (e) => {
    if (keyState[e.keyCode]) {
        let key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
        key.classList.remove('strike');
        keyState[e.keyCode] = false;
    };
});
