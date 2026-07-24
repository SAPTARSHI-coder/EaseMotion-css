const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const container = document.getElementById("confettiContainer");
const colors = ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"];

function burst() {
  if (prefersReduced) return;
  for (let i = 0; i < 80; i++) {
    const el = document.createElement("div");
    el.className = "confetti-piece";
    el.style.left = Math.random() * 100 + "%";
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.width = (Math.random() * 6 + 4) + "px";
    el.style.height = (Math.random() * 6 + 4) + "px";
    el.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    el.style.animation = `confetti-fall ${Math.random() * 2 + 1.5}s linear forwards`;
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}

const style = document.createElement("style");
style.textContent = `
@keyframes confetti-fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}`;
document.head.appendChild(style);

document.getElementById("confettiBtn").addEventListener("click", burst);
burst();

@media (prefers-reduced-motion: reduce) {
  @keyframes confetti-fall {
    0% { transform: translateY(0); opacity: 0; }
    100% { transform: translateY(0); opacity: 0; }
  }
}
