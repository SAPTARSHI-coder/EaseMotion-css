// Fast parallax effect (1.5x scroll speed)
const parallaxElement = document.querySelector(".parallax-fast");
const speed = 1.5; // --ease-parallax-speed

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  parallaxElement.style.transform = `translate(-50%, calc(-50% + ${scrollY * speed}px))`;
});
