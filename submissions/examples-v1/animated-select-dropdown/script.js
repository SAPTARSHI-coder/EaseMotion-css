const dropdown = document.querySelector(".dropdown");
const button = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");
const selected = document.querySelector(".selected");
const options = document.querySelectorAll(".option");

// Toggle dropdown
button.addEventListener("click", () => {
    dropdown.classList.toggle("active");
});

// Select an option
options.forEach(option => {
    option.addEventListener("click", () => {

        // Remove previous active class
        options.forEach(item => item.classList.remove("active"));

        // Add active class
        option.classList.add("active");

        // Update button content
        selected.innerHTML = option.innerHTML;

        // Close dropdown
        dropdown.classList.remove("active");
    });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});

// Keyboard accessibility
button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        dropdown.classList.toggle("active");
    }

    if (e.key === "Escape") {
        dropdown.classList.remove("active");
    }
});

// Keyboard selection
options.forEach(option => {
    option.setAttribute("tabindex", "0");

    option.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();

            options.forEach(item => item.classList.remove("active"));
            option.classList.add("active");
            selected.innerHTML = option.innerHTML;
            dropdown.classList.remove("active");
            button.focus();
        }
    });
});
