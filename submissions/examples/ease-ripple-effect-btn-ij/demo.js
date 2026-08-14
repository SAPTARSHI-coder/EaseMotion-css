document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".ripple-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const existing = this.querySelector(".ripple-effect");
      if (existing) existing.remove();

      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.className = "ripple-effect";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";

      this.appendChild(ripple);

      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
});
