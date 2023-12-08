// Use Bootstrap's built-in form validation TMCN
(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

// Submit form function TMCN
function submitForm() {
    if (document.getElementById('myForm').checkValidity()) {
        // Display the success popup
        fadeIn("success-popup");
        return false; // Prevent form submission (optional)
    }
}

// Fade in function TMCN
function fadeIn(id) {
    const element = document.getElementById(id);
    element.style.opacity = 0;
    element.style.display = "block";

    (function fadeIn() {
        const val = parseFloat(element.style.opacity);
        if (!((val += 0.1) > 1)) {
            element.style.opacity = val;
            requestAnimationFrame(fadeIn);
        }
    })();
}

// Fade out function TMCN
function fadeOut(element) {
    (function fade() {
        const val = parseFloat(element.style.opacity);
        if ((val -= 0.1) < 0) {
            element.style.display = "none";
        } else {
            element.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}

// Close success popup function TMCN
function closeSuccessPopup() {
    const element = document.getElementById("success-popup");
    fadeOut(element);
}
