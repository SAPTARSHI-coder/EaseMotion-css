const button = document.querySelector(".magnetic-btn");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

button.addEventListener("mouseleave", () => {
  button.style.transform = "translate(0,0)";
});