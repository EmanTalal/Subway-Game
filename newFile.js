document.addEventListener("DOMContentLoaded", function() {
    // Constants
    const character = document.getElementById('character');
    const container = document.querySelector('.container');
    const btns = document.querySelectorAll('.btn');
    const obstacles = [
        { name: 'train', w: 40, h: 30, pos: [-3, 30, 64] },
        { name: 'obs1', w: 15, h: 10, pos: [9, 42.5, 76] },
        { name: 'obs2', w: 20, h: 12, pos: [7, 40, 73] }
    ];

    // Event listener for button clicks
    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            moveCharacter(btn.textContent.toLowerCase());
        });
    });

    // Function to move character based on button click
    function moveCharacter(direction) {
        const characterLeft = parseInt((character.offsetLeft * 100) / window.innerWidth);
        if (direction === 'up' || direction === 'down') {
            conditions.forEach((condition) => {
                if (direction === 'up' && condition.preleft === characterLeft && condition.btn === 2) {
                    character.style.left = condition.left + '%';
                } else if (direction === 'down' && condition.preleft === characterLeft && condition.btn === 1) {
                    character.style.left = condition.left + '%';
                }
            });
        } else {
            if ((direction === 'left' && (characterLeft === 5(direction === 'right' && (characterLeft === 39 || characterLeft === 72))))) {
                addClass(direction === 'left' ? 0 : 3);
            }
        }
    }

    // Function to add jump or roll class to character
    function addClass(index) {
        const className = index === 0 ? 'jump' : 'roll';
        character.classList.add(className);
        setTimeout(() => {
            character.classList.remove(className);
        }, 1200);
    }

    // Function to spawn obstacles
    function spawnObstacle() {
        const randomObstacle = obstacles[Math.floor(Math.random() * obstacles.length)];
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        obstacle.style.backgroundImage = 'url(Images/' + randomObstacle.name + '.png)';
        obstacle.style.width = randomObstacle.w + 'vw';
        obstacle.style.height = randomObstacle.h + 'vh';
        obstacle.style.left = randomObstacle.pos[Math.floor(Math.random() * 3)] + '%';
        container.appendChild(obstacle);

        obstacle.addEventListener('animationiteration', () => {
            container.removeChild(obstacle);
        });
    }



    document.addEventListener("DOMContentLoaded", function() {
        var playButton = document.getElementById("playButton");
        var stopButton = document.getElementById("stopButton");
        var audioPlayer = document.getElementById("audioPlayer");

        playButton.addEventListener("click", function() {
            audioPlayer.play();
        });

        stopButton.addEventListener("click", function() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        });
    });
});