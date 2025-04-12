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

// Get the total document height (minus some padding if desired)
const documentHeight = document.body.scrollHeight - 200;

for (let i = 0; i < ghostImgs.length; i++) {
    let ghostDiv = document.createElement('div');
    ghostDiv.classList.add('ghost');

    // Set random horizontal position within the viewport width
    ghostDiv.style.left = `${Math.random() * 100}vw`;

    // Set random vertical position within the total document height
    ghostDiv.style.top = `${Math.random() * documentHeight}px`;

    // Random animation duration for variation
    ghostDiv.style.animationDuration = `${Math.random() * 70 + 60}s`;

    // Create an image element and assign the src from ghostImgs array
    let img = document.createElement('img');
    img.src = ghostImgs[i];

    // Adjust size for larger ghosts at the end of the array
    if (i >= ghostImgs.length - 2) {
        img.style.width = "250px";
        img.style.height = "250px";
        img.style.opacity = "0.7";
    } else {
        img.style.width = "100px";
        img.style.height = "100px";
    }

    // Append the image to the ghost div
    ghostDiv.appendChild(img);

    // Append the ghost div to the body
    document.body.appendChild(ghostDiv);
}

document.addEventListener("DOMContentLoaded", () => {
    const entryScreen = document.getElementById("entryScreen");
    const entryButton = document.getElementById("entryButton");
    const backgroundAudio = document.getElementById('backgroundAudio');

    entryButton.addEventListener("click", () => {
        // Add the zoom-out animation to the ghost
        backgroundAudio.play();
        entryScreen.classList.add("zoom-out");



        // Wait for the animation to complete before showing the main content
        entryScreen.addEventListener("animationend", () => {
            entryScreen.style.display = "none"; // Hide entry screen
        });
    });
});