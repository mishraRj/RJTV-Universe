document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("trailerVideo");
    const loadingIndicator = document.getElementById("loadingIndicator");

    if (!video || !loadingIndicator) {
        console.error("❌ Video or Loading Indicator NOT Found. Check HTML Structure or Script Order.");
        return; // Stop execution if key elements are missing
    }

    // Display loader before video starts loading
    function showLoader() {
        loadingIndicator.style.display = "flex";
    }

    // Hide loader after video has loaded
    function hideLoader() {
        loadingIndicator.style.display = "none";
    }

    // Loader Logic
    video.addEventListener('loadstart', showLoader);
    video.addEventListener('loadeddata', hideLoader);
    video.addEventListener('waiting', showLoader);
    video.addEventListener('playing', hideLoader);

    // Observer API Logic
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, observerOptions);

    observer.observe(video);

    // Lazy Loading Items
    const lazyItems = document.querySelectorAll('.lazy-item');

    let lazyObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    lazyItems.forEach(item => lazyObserver.observe(item));

    // Fix page caching issues
    window.onpageshow = function (event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
});

function submitSearch() {
        document.getElementById("searchForm").submit();
}

function handlePurchase(button) {
    button.disabled = true;
    button.textContent = '✔ Purchased';
    button.classList.add('purchased');
}
  
// For both contact and support forms
  document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      // Bootstrap validation check
      if (!form.checkValidity()) {
        e.preventDefault(); // stop submit
        e.stopPropagation();
        form.classList.add('was-validated'); // show validation feedback
      } else {
        e.preventDefault(); // we fake submit anyway
        form.innerHTML = `<h3 style="color: #00ffcc;">💌 Thank you for contacting us! We'll get back to you soon.</h3>`;
      }
    });
  });