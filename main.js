let character = document.getElementById('character');
let container = document.querySelector('.container');
let scoreElement = document.getElementById('score');
let score = 0;
let gameOverElement = document.getElementById('gameover');
let gameOver = false;
let condition = [
    { 'left': 39, 'preleft': 5, 'btn': 2 },
    { 'left': 72, 'preleft': 39, 'btn': 2 },
    { 'left': 39, 'preleft': 72, 'btn': 1 },
    { 'left': 5, 'preleft': 39, 'btn': 1 }
]
let obsCondition = [{
        'Name': 'train',
        'w': 40,
        'h': 30,
        '1': -3,
        '2': 30,
        '3': 64
    },
    {
        'Name': 'obs1',
        'w': 15,
        'h': 10,
        '1': 9,
        '2': 42.5,
        '3': 76
    },
    {
        'Name': 'obs2',
        'w': 20,
        'h': 12,
        '1': 7,
        '2': 40,
        '3': 73
    }
]
let btn = document.querySelectorAll('.btn');
btn.forEach((value, index) => {
    value.addEventListener('click', () => {
        let CharacterLeft = parseInt(Math.round((character.offsetLeft * 100) / window.innerWidth));
        condition.forEach((cvalue, cindex) => {
            if (
                condition[cindex].preleft == CharacterLeft &&
                index == condition[cindex].btn
            ) {
                character.style.left = `${condition[cindex].left}%`;
            }
            if (index == 0 || index == 3) {
                addClass(index);
            }
        })
    })
})
setInterval(() => {
    let length = obsCondition.length;
    let random = Math.floor(Math.random() * length);
    let obs = document.createElement('div');
    obs.classList.add('obstacle');
    obs.style.backgroundImage = `url(Images/${obsCondition[random].Name}.png)`;
    let posrand = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    obs.style.width = `${obsCondition[random].w}vw`;
    obs.style.height = `${obsCondition[random].h}vh`;
    obs.style.left = obsCondition[random][posrand] + '%';
    container.appendChild(obs);
    obs.addEventListener('animationiteration', () => {
        container.removeChild(obs);
    })
}, 2000)
setInterval(() => {
    let obs = document.querySelectorAll('.obstacle');
    obs.forEach((value, index) => {
        let selected = obs[index];
        let obsLeft = parseInt(window.getComputedStyle(selected, null).getPropertyValue('left'));
        let obsHeight = parseInt(window.getComputedStyle(selected, null).getPropertyValue('height'));


        let characterClass = character.className;
        if (
            characterClass == 'jump' &&
            image == 'url("Images/obs1.png")'
        ) {
            return
        } else if (characterClass == 'roll' &&
            image == 'url("Images/obs2.png")') {
            return
        }
        if (
            obsLeft >= characterLeft &&
            characterRight <= obsRight &&
            characterTop <= (obsTop + obsHeight)
        ) {}
        if (
            image == 'url("Images/train.png")' &&
            (characterLeft + characterWidth) <= (obsLeft + obsWidth) &&
            (obsRight + obsWidth) >= characterRight &&
            characterTop <= (obsTop + obsHeight)
        ) {}
    })
}, 10)

document.addEventListener("DOMContentLoaded", function() {
    let playButton = document.getElementById("playButton");
    let stopButton = document.getElementById("stopButton");
    let audioPlayer = document.getElementById("audioPlayer");

    playButton.addEventListener("click", function() {
        audioPlayer.play();
    });

    stopButton.addEventListener("click", function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});