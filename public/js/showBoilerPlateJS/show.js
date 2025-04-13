let alienVoice = document.getElementById('alienVoice');
let spaceShip = document.querySelector('.projector');

if (window.innerWidth > 450) {
    document.addEventListener("DOMContentLoaded", function () {
        const horrorPage = document.body.classList.contains('horror-bg');
        const backgroundAudio = document.getElementById('HorrorTransitionAudio');
        const horrorModeActive = localStorage.getItem("horrorModeActive"); // 🔥 Track if horror mode was active

        if (horrorPage) {
            if (!horrorModeActive) { // 🛑 First time horror mode is activated
                backgroundAudio.loop = false;

                if (!backgroundAudio.dataset.played) {
                    backgroundAudio.play().then(() => {
                        backgroundAudio.dataset.played = "true";
                        console.log("✅ Horror audio played once!");
                    }).catch(error => {
                        console.error("❌ Audio play blocked:", error);
                    });
                }

                setTimeout(() => {
                    document.body.classList.add('delayed-bg');
                    document.querySelector('.main-content').classList.add('delayed-bg');

                    // 🚀 Hide spaceships
                    const spaceShips = document.querySelectorAll('.spaceShip');
                    spaceShips.forEach(spaceShip => {
                        spaceShip.classList.add('hidden');
                        setTimeout(() => {
                            spaceShip.style.display = "none";
                        }, 1500);
                    });

                    setTimeout(showLoader, 8); // 👻 Spawn ghosts
                }, 800);

                // ✅ Mark horror mode as active
                localStorage.setItem("horrorModeActive", "true");

            } else {
                console.log("🎭 Horror mode already active, setting dark universe instantly.");
            
                // 🔥 Directly set the dark-universe background without transition
                document.body.style.transition = "none";
                document.querySelector('.main-content').style.transition = "none";

                document.body.classList.add('delayed-bg');
                document.querySelector('.main-content').classList.add('delayed-bg');

                setTimeout(() => {
                    document.body.style.transition = "";
                    document.querySelector('.main-content').style.transition = "";
                }, 1);

                // 🚀 Always hide spaceships in horror mode
                const spaceShips = document.querySelectorAll('.spaceShip');
                spaceShips.forEach(spaceShip => {
                    spaceShip.classList.add('hidden');
                    setTimeout(() => {
                        spaceShip.style.display = "none";
                    }, 1500);
                });

                // 👻 Ensure ghosts are present even in horror-to-horror transitions
                setTimeout(showLoader, 1);
            }

        } else {
            localStorage.removeItem("horrorModeActive"); // Reset if switching to non-horror movie
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.fav-wrapper');
    if (!wrapper) return;

    const heartIcon = wrapper.querySelector('.heart-icon');
    const tooltip = wrapper.querySelector('.fav-tooltip');

    heartIcon.addEventListener('click', async () => {
        console.log('Heart clicked!');
        const movieId = wrapper.dataset.id;
        const sourceCollection = wrapper.dataset.collection;

        const res = await fetch('/favorites/toggle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ movieId, sourceCollection })
        });

        const data = await res.json();

        if (data.success) {
            if (data.status === 'added') {
                heartIcon.classList.remove('fa-regular');
                heartIcon.classList.add('fa-solid');
                tooltip.textContent = 'Added to favs';
            } else {
                heartIcon.classList.remove('fa-solid');
                heartIcon.classList.add('fa-regular');
                tooltip.textContent = 'Add to favs';
            }
        }
    });
});

if (window.innerWidth > 450) {
    // 👻 Spawn Ghosts
    function showLoader() {
        // ❌ Remove any existing ghosts before spawning new ones
        document.querySelectorAll('.ghost').forEach(ghost => ghost.remove());

        const ghostImgs = [
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(1).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(2).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(3).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(4).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(5).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(6).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(7).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(8).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(9).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(10).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(11).png",
            "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/ghosts/ghost(12).png"
        ];

        const documentHeight = document.body.scrollHeight - 400;

        for (let i = 0; i < ghostImgs.length; i++) {
            let ghosts = document.createElement('div');
            ghosts.classList.add('ghost');
        
            ghosts.style.left = `${Math.random() * 100}vw`;
            ghosts.style.zIndex = '5000';
            ghosts.style.top = `${Math.random() * documentHeight}px`;

            let gImg = document.createElement('img');
            gImg.src = ghostImgs[i % ghostImgs.length];

            const randomSize = Math.floor(Math.random() * 151) + 50;
            gImg.style.width = `${randomSize}px`;
            gImg.style.height = `${randomSize}px`;

            gImg.style.zIndex = "10";
            gImg.style.opacity = "0";
            gImg.style.transition = "opacity 1.5s ease-in-out";

            ghosts.appendChild(gImg);
            document.body.appendChild(ghosts);

            setTimeout(() => {
                gImg.style.opacity = "1"; // Smooth fade-in effect
            }, i * 1200);
        }
    }

} spaceShip.addEventListener('click', () => { 
    alienVoice.play().catch(error => {
        console.error("Audio playback failed: ", error);
    });

    // Apply the scaleBounce animation for 0.3 seconds
    spaceShip.style.animation = "scaleBounce 0.9s ease-in-out forwards";

    // Remove the animation after it ends to reset back to initial style
    spaceShip.addEventListener('animationend', function resetAnimation() {
        spaceShip.style.animation = ""; // Clear the animation
        spaceShip.removeEventListener('animationend', resetAnimation); // Remove the listener
    });
});

