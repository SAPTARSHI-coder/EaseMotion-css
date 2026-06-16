const btn = document.getElementById("bttBtn");
const fill = document.getElementById("bttFill");
const circ = 2 * Math.PI * 16;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? scrollTop / docHeight : 0;

  fill.style.strokeDashoffset = circ - pct * circ;
  btn.classList.toggle("visible", scrollTop > 200);
});

btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
