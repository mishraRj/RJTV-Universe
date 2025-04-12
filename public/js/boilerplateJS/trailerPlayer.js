let currentTrailerIndex = 0;
const videoSource = document.getElementById("videoSource");
const videoElement = document.getElementById("trailerVideo");

document.addEventListener("DOMContentLoaded", function () {

    const volumeIcon = document.getElementById("volumeIcon");
    const muteIcon = document.getElementById("muteIcon");
    const nextTrailerButton = document.querySelector(".next-trailer");

    muteIcon.addEventListener('click', () => {
        videoElement.muted = false;
        muteIcon.style.display = "none";
        volumeIcon.style.display = "block";
    });

    volumeIcon.addEventListener('click', () => {
        videoElement.muted = true;
        volumeIcon.style.display = "none";
        muteIcon.style.display = "block";
    });

    nextTrailerButton.addEventListener("click", () => {
    // Increase index by 1, and reset to 0 if at the last trailer
    currentTrailerIndex = (currentTrailerIndex + 1) % trailers.length; 
    playTrailer(currentTrailerIndex); // Play the next trailer
});

});

    function playTrailer(index) {
    let trailer = trailers[index];
    videoSource.src = trailer.link;
    videoElement.load();
    videoElement.play();

    // Update Trailer Description Dynamically
    document.getElementById("trailer-image").src = trailer.image;
    document.getElementById("trailer-year").innerText = trailer.year;
    document.getElementById("trailer-language").innerText = trailer.language;
    document.getElementById("trailer-description-text").innerText = trailer.description;
    document.getElementById("trailer-genre").innerText = trailer.genre;

    // Set Watch now click
    document.getElementById("Watch_Btn").onclick = function () {
        window.location.href = `/home_page/${trailer.id}/player`;
    };

    // ---- WATCH LATER BUTTON INJECTION ---- //
    const formContainer = document.getElementById("watchlater-form-container");

    const isInWatchLater = currUserWatchLater.some(item =>
        item.movieId === trailer.id && item.sourceCollection === trailer.sourceCollection
    );

    const btnText = isInWatchLater ? '✓' : '+';

    formContainer.innerHTML = `
        <form id="dynamic-wl-form" style="display:inline;">
            <input type="hidden" name="movieId" value="${trailer.id}">
            <input type="hidden" name="sourceCollection" value="${trailer.sourceCollection}">
            <button type="submit" class="watch-btn" id="plus_btn">${btnText}</button>
        </form>
    `;

    // Add dynamic submit handler for the injected form
    const form = document.getElementById("dynamic-wl-form");
    form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const movieId = trailer.id;
    const sourceCollection = trailer.sourceCollection;
    const btn = document.getElementById("plus_btn");

    if (!isLoggedIn) {
        window.location.href = "/login";
        return;
    }

    try {
        const res = await fetch("/watchLater/toggle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ movieId, sourceCollection })
        });

        if (res.ok) {
            btn.textContent = btn.textContent.trim() === "+" ? "✓" : "+";

            const index = currUserWatchLater.findIndex(item =>
                item.movieId === movieId && item.sourceCollection === sourceCollection
            );

            if (index !== -1) {
                currUserWatchLater.splice(index, 1);
            } else {
                currUserWatchLater.push({ movieId, sourceCollection });
            }
        }
    } catch (err) {
        console.error("⚠️ Watch Later toggle error:", err);
    }
});


    document.getElementById("trailer-description").style.display = "block";
}

// Play the first random trailer when page loads
function playRandomTrailer() {
    currentTrailerIndex = Math.floor(Math.random() * trailers.length);
    playTrailer(currentTrailerIndex);
}

// Randomize trailer playback after each video ends
videoElement.onended = function () {
    let newRandomIndex;

    // Ensure the next random trailer is different from the current one
    do {
        newRandomIndex = Math.floor(Math.random() * trailers.length);
    } while (newRandomIndex === currentTrailerIndex);

    currentTrailerIndex = newRandomIndex; // Update index with new random trailer
    playTrailer(currentTrailerIndex);
};

window.onload = playRandomTrailer;