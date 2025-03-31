document.addEventListener("DOMContentLoaded", () => {
    const fadeTexts = document.querySelectorAll(".fade-text");
    fadeTexts.forEach((text, index) => {
        text.style.animationDelay = `${index * 0.1}s`;
    });
});
