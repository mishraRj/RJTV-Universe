// Spaceship images
const images = [
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/newAlien%20(1).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/newAlien%20(2).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/newAlien%20(3).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/newAlien%20(4).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/newAlien%20(6).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(6).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(7).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(8).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(9).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(10).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(11).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(12).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/sp(13).png",
    "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/spaceships/newAlien%20(5).png"
];

// Function to calculate document height reliably
const calculateDocumentHeight = () => {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        window.innerHeight
    );
};

// Determine the number of spaceships to display based on URL
const currentURL = window.location.href;
let spaceshipCount = images.length; // Default: All spaceships

if (
    currentURL.includes('/signup') ||
    currentURL.includes('/login') ||
    currentURL.includes('/plans') ||
    currentURL.includes('/terms_and_conditions')||
    currentURL.includes('/contact')||
    currentURL.includes('/support')) {
    spaceshipCount = 6; // Limit to 6 spaceships on this page
    let stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.animation = 'none';
        star.style.display = 'none'; // Hide stars completely
    });
}

if (currentURL.includes('/mySpace') || currentURL.includes('/edit-profile')) {
    spaceshipCount = 0; // Limit to 6 spaceships on this page
    let stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.animation = 'none';
        star.style.display = 'none'; // Hide stars completely
    });
}

if (currentURL === 'https://rjtv-universe.up.railway.app/categories') {
    spaceshipCount = 6; // Limit to 6 spaceships on these pages
    let stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.style.animation = 'none';
        star.style.display = 'none'; // Hide stars completely
    });
}

// Calculate the document height dynamically
const documentHeight = calculateDocumentHeight() - 400; // Adjust for spaceship positioning
console.log('Document Height:', documentHeight);

// Generate and position spaceships
for (let i = 0; i < spaceshipCount; i++) {
    const spaceShip = document.createElement('div');
    spaceShip.classList.add('spaceShip');

    // Set random positions
    spaceShip.style.left = `${Math.random() * 100}vw`; // Horizontal position
    spaceShip.style.top = `${Math.random() * documentHeight}px`; // Vertical position

    // Set random animation duration
    spaceShip.style.animationDuration = `${Math.random() * 70 + 60}s`; // Random animation speed

    // Create an image element and assign a random source
    const img = document.createElement('img');
    img.src = images[i];

    // Size adjustments
    if (i >= spaceshipCount - 2) {
        // Larger size for last two spaceships
        img.style.width = "150px";
        img.style.height = "150px";
        img.style.opacity = "0.3";
    } else {
        // Random size for other spaceships
        const randomSize = `${Math.random() * 65 + 55}px`;
        img.style.width = randomSize;
        img.style.height = randomSize;
    }
    document.querySelectorAll('.spaceShip').forEach(ship => {
    const randomDuration = Math.random() * 50 + 50; // Random animation duration between 50-100s
    ship.style.animationDuration = `${randomDuration}s`;
});

    // Append the image to the spaceship div
    spaceShip.appendChild(img);

    // Append the spaceship div to the body
    document.body.appendChild(spaceShip);
}

// Debugging: Log the number of spaceships created
console.log('Spaceships added to the DOM:', document.querySelectorAll('.spaceShip').length);
