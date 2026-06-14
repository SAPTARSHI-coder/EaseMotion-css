const counters = document.querySelectorAll(".stat-value");
const speed = 50;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const current = parseInt(counter.innerText.replace(/,/g, ""));
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = Math.min(current + increment, target).toLocaleString();
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  updateCount();
});
