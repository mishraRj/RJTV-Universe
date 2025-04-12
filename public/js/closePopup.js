document.addEventListener("DOMContentLoaded", function () {
        const successPopup = document.querySelector(".success-popUp");
        const errorPopup = document.querySelector(".error-popUp");
        const successSound = document.getElementById("successSound");
        const errorSound = document.getElementById("errorSound");

        if (successPopup && successSound) {
            successSound.play().catch(error => console.warn("🔇 Sound blocked:", error));
        }
        if (errorPopup && errorSound) {
            errorSound.play().catch(error => console.warn("🔇 Sound blocked:", error));
        }
    });

function closePopup() {
        document.querySelector(".success-popUp").style.display = "none";
    }

function closeErrPopup() {
    document.querySelector(".error-popUp").style.display = "none";
}
    
// Close the popup function
function closePopup2() {
    document.querySelector(".signup-wrapper").style.display = "none";
}
// Close the popup function
function closePopup3() {
    document.querySelector(".login-wrapper").style.display = "none";
}

function closeErrPopup() {
        const popup2 = document.querySelector('.error-popUp');
        if (popup2) {
            popup2.style.display = 'none'; // Hide the popup
        }
}

function validateTerms() {
    const checkbox = document.getElementById('termsCheckbox');
    const warning = document.getElementById('terms-warning');

    if (!checkbox.checked) {
        checkbox.classList.add('glow-checkbox');

        warning.textContent = "⚠️ Please accept the Terms and Conditions first.";
        warning.style.opacity = "1";

        // Hide message after 2 seconds
        setTimeout(() => {
            checkbox.classList.remove('glow-checkbox');
            warning.style.opacity = "0";
        }, 2000);

        return false;
    }

    return true;
}
