document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal-text");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute("data-delay")) || 0;
          setTimeout(() => entry.target.classList.add("visible"), delay);
        }
      });
    },
    { threshold: 0.25 }
  );

  reveals.forEach((el) => observer.observe(el));

  const progress = document.getElementById("progress");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progress.style.width = percent + "%";
  });
});
