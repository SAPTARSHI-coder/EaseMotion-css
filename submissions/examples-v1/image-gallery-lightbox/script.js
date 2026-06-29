const images = [
  { bg: "linear-gradient(135deg, #6366f1, #a855f7)", label: "Violet gradient abstract" },
  { bg: "linear-gradient(135deg, #f59e0b, #f97316)", label: "Amber gradient abstract" },
  { bg: "linear-gradient(135deg, #22c55e, #14b8a6)", label: "Green gradient abstract" },
  { bg: "linear-gradient(135deg, #ec4899, #8b5cf6)", label: "Pink gradient abstract" },
];

let current = 0;
const lightbox = document.getElementById("lightbox");
const imgEl = document.getElementById("lightboxImg");
const caption = document.getElementById("lightboxCaption");

function show(idx) {
  current = idx;
  imgEl.style.background = images[idx].bg;
  caption.textContent = images[idx].label;
}

document.querySelectorAll(".gallery-thumb").forEach((el) => {
  el.addEventListener("click", () => {
    show(parseInt(el.dataset.img));
    lightbox.classList.add("open");
  });
});

document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("open"));
document.getElementById("lightboxPrev").addEventListener("click", () => show((current - 1 + images.length) % images.length));
document.getElementById("lightboxNext").addEventListener("click", () => show((current + 1) % images.length));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.classList.remove("open"); });
