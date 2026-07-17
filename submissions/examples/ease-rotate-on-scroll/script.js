// Scroll-linked rotation animation
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY % 360; // map scrollY to rotation degrees
  document.documentElement.style.setProperty("--ease-scroll-rotate", `${rotation}deg`);
});
