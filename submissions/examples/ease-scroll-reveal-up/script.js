console.log("JS Loaded");
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.isIntersecting);

        if (entry.isIntersecting) {
            entry.target.classList.add("ease-visible");
        }
    });
}, {
    threshold: 0.5
});

cards.forEach((card) => observer.observe(card));