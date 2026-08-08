const bg = document.getElementById("parallaxBg");

window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  bg.style.transform = `translateY(${offset * 0.3}px)`;
});
