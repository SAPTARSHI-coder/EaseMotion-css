// Sticky reveal animation using IntersectionObserver
const header = document.querySelector(".sticky-header");
const sentinel = document.querySelector(".sentinel");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("reveal");
      } else {
        header.classList.remove("reveal");
      }
    });
  },
  { threshold: 0 }
);

observer.observe(sentinel);
