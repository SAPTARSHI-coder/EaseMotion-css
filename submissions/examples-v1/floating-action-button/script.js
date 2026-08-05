const fab = document.getElementById("fab");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 100) {
    fab.classList.add("hidden");
  } else {
    fab.classList.remove("hidden");
  }
  lastScroll = current;
});
