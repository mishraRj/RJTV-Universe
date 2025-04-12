const player = document.getElementById('player')

document.addEventListener("DOMContentLoaded", () => {
        player = new Plyr('#player', {
            controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
            autoplay: true
        });
});
    
document.addEventListener("DOMContentLoaded", () => {
    const disclaimer = document.createElement("div");
    disclaimer.classList.add("video-disclaimer");
    disclaimer.innerHTML = `<span>⚠️This video is streaming directly from YouTube. All rights belong to respective owners. We do not own copyrights, we are only using this video for UI of project and for educational purpose.⚠️</span>`;
    document.querySelector("#player").appendChild(disclaimer);

    // Function to show disclaimer
    function showDisclaimer() {
        disclaimer.style.display = "block";  // Show the disclaimer
        setTimeout(() => {
            disclaimer.style.display = "none"; // Hide after 10 seconds
        }, 30000);
    }

    // Show at the start
    showDisclaimer();

    // Show disclaimer every 5 minutes (300000 ms)
    setInterval(() => {
        showDisclaimer();
    }, 350000);
});

document.addEventListener("DOMContentLoaded", function () {
    const customLoader = document.getElementById("custom-loader");

    setTimeout(() => {
            customLoader.style.display = "none"; // Hide loader
        }, 3000); // Smooth transition
});
