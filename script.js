/* =========================================
   OCEAN WAVE FOOTER
   Author: MetaSkillGroup
========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".ocean-footer");
    const bubbleContainer = document.querySelector(".bubbles");
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const message = document.getElementById("message");
    const yearElement = document.getElementById("year");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set the current year automatically.
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Create 15 floating bubbles with varied size, position and timing.
    if (bubbleContainer && !reduceMotion) {
        for (let i = 0; i < 15; i += 1) {
            const bubble = document.createElement("span");
            const size = Math.floor(Math.random() * 25) + 10;

            bubble.className = "bubble";
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 98}%`;
            bubble.style.setProperty("--duration", `${9 + Math.random() * 10}s`);
            bubble.style.setProperty("--delay", `${Math.random() * -18}s`);
            bubble.style.setProperty("--drift", `${Math.floor(Math.random() * 100) - 50}px`);

            bubbleContainer.appendChild(bubble);
        }
    }

    // Front-end newsletter demo: validates the email and shows feedback.
    if (form && emailInput && message) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            message.className = "form-message";

            const email = emailInput.value.trim();

            if (!email || !emailInput.checkValidity()) {
                message.textContent = "Please enter a valid email address.";
                message.classList.add("error");
                emailInput.focus();
                return;
            }

            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = "Subscribing...";
            }

            message.textContent = "Please wait...";

            window.setTimeout(() => {
                message.textContent = "Thank you for subscribing!";
                message.classList.remove("error");
                message.classList.add("success");
                form.reset();

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = "Subscribe";
                }
            }, reduceMotion ? 0 : 900);
        });
    }
});
