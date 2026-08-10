const button = document.querySelector(".magnetic-button");

const strength = 30;

button.addEventListener("mousemove", (e) => {

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) / (rect.width / 2);
    const moveY = (y - rect.height / 2) / (rect.height / 2);

    button.style.transform = `translate(${moveX * strength}px, ${moveY * strength}px)`;
});

button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0px, 0px)";
});
