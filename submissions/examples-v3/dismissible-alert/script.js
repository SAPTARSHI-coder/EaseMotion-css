const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const alert = button.parentElement;

        // Add slide-out animation
        alert.classList.add("slide-out");

        // Remove the alert after animation completes
        setTimeout(() => {
            alert.remove();
        }, 500);
    });
});