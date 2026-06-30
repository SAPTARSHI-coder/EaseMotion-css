const follower = document.querySelector(".cursor-follower");
const targets = document.querySelectorAll(".cursor-target");

document.addEventListener("mousemove", (e) => {
  follower.style.left = e.clientX + "px";
  follower.style.top = e.clientY + "px";
});

targets.forEach((target) => {
  target.addEventListener("mouseenter", () => {
    const effect = target.dataset.effect;
    follower.className = "cursor-follower " + effect;
  });
  target.addEventListener("mouseleave", () => {
    follower.className = "cursor-follower";
  });
});

document.addEventListener("mouseleave", () => {
  follower.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
  follower.style.opacity = "1";
});
