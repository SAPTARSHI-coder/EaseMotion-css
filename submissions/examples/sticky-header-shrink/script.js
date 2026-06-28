window.addEventListener("scroll", () => {
  document.getElementById("shrinkHeader").classList.toggle("compact", window.scrollY > 80);
});
