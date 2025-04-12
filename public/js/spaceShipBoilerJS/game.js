let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let score = 0;
let highScore = window.RJTV.initialHighScore || 0;
const startBtn = document.querySelector("#start-game");

const btns = ["red", "pink", "yellow", "green"];
const h2 = document.querySelector("#game-status");
const gameOver = document.querySelector("#game-over");
const h3 = document.querySelector("#high-score");
const scoreH3 = document.querySelector("#score");

// Preload game sounds
const gameSounds = {
    start: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/game-start.mp3"),
    over: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/game-over.mp3"),
    appear: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/newSpacehip.mp3"),
    bonus: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/game-over.mp3") // Replace if needed
};

// Preload button sounds
const colorSounds = {
    green: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/green.mp3"),
    pink: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/pink.mp3"),
    red: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/red.mp3"),
    yellow: new Audio("https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/yellow.mp3")
};

// Preload everything
Object.values(gameSounds).forEach(audio => audio.preload = "auto");
Object.values(colorSounds).forEach(audio => audio.preload = "auto");

let firstTime = true;
// Start Game
startBtn.addEventListener("click", () => {
    gameSounds.start.currentTime = 0;
    gameSounds.start.play();
    gameOver.style.display = "none";

    if (!started) {
        started = true;
        startBtn.style.display = "none";
        document.querySelectorAll(".btn").forEach(btn => {
            btn.style.pointerEvents = "none"; // enable clicks
        });

        if (firstTime) {
            appearSpaceship();
            setTimeout(() => {
                levelUp();
            }, 9000);
        } else {
            document.querySelectorAll(".btn").forEach(btn => {
            btn.style.pointerEvents = "auto"; // enable clicks
        });
            setTimeout(() => {
                levelUp();
            }, 1500);
        }
    }
});

// Play sound with no delay
function playSound(color) {
    const audio = colorSounds[color];
    audio.currentTime = 0;
    audio.play();
}

// Game flashes a button in sequence
function gameFlash(btn) {
    btn.classList.add("flash");
    const color = btn.id;
    playSound(color);
    setTimeout(() => btn.classList.remove("flash"), 300);
}

// User clicks a button
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => btn.classList.remove("userFlash"), 200);
}

// Increase level and show new color
function levelUp() {
    userSeq = [];
    level++;

    if (level > 1) {
        score += 10;
        scoreH3.innerText = `Score: ${score}`;
    } else {
        score = 0;
        scoreH3.innerText = `Score: ${score}`;
    }

    h2.innerText = `Level ${level}`;
    const randIndex = Math.floor(Math.random() * 4);
    const randColor = btns[randIndex];
    const randBtn = document.querySelector(`#${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

// Check user's answer
function checkAns(currentIdx) {
    if (userSeq[currentIdx] === gameSeq[currentIdx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 800);
        }
    } else {
        gameSounds.over.currentTime = 0;
        gameSounds.over.play();

        // h2.innerHTML = `Game Over! Your score: <b>${score}</b><br>Press Start to play again.`;
        gameOver.style.display = "block"
        gameOver.innerHTML = `
        <img src="https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/gameOver2.webp" 
            alt="Game Over Alien" 
            class="game-over-img">
        <p class="game-over-msg">
            Your score: <b>${score}</b><br>Press Start to play again.
        </p>`;

        setTimeout(() => {
            startBtn.style.transition = "display 0.5s ease-in"
            startBtn.style.display = "block";
        }, 4000);

        if (score > highScore) {
            highScore = score;
            h3.innerText = `High score: ${highScore}`;
            if (typeof window.RJTV.currentUserId !== "undefined") {
                fetch("/updateHighScore", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ newScore: highScore })
                })
                .then(res => res.json())
                .then(data => console.log("High score updated:", data))
                .catch(err => console.error("Error saving score:", err));
            }
        } else {
            // still update the UI even if not sending to backend
            h3.innerText = `High score: ${highScore}`;
        }


        resetGame();
    }
}

// Handle click on a button
function btnPress() {
    if (!started) return; 
    const btn = this;
    const userColor = btn.id;
    userSeq.push(userColor);
    userFlash(btn);
    playSound(userColor);
    checkAns(userSeq.length - 1);
}

// Add event listeners to all alien buttons
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", btnPress);
});

// Reset game state
function resetGame() {
    started = false;
    level = 0;
    score = 0;
    gameSeq = [];
    userSeq = [];
}

function appearSpaceship() {
    gameSounds.start.currentTime = 0;
    gameSounds.appear.play();
    firstTime = false;
    document.querySelectorAll(".btn").forEach(btn => {
        btn.style.display = "block";
        btn.style.animation = 'appearing 8s forwards'; // Use forwards to keep final position
        // After 4 seconds (the duration of the appearing animation), switch to projectorMove
        setTimeout(() => {
            document.querySelectorAll(".btn").forEach(btn => {
            btn.style.pointerEvents = "auto"; // enable clicks
        });
            btn.style.animation = 'spaceShip2 3s ease-in-out infinite alternate'; // Switch to the projector move animation
        }, 9000); // Duration of the appearing animation
    });
    

}

document.querySelectorAll(".btn").forEach(btn => {
    btn.style.pointerEvents = "auto"; // disable clicks
});
