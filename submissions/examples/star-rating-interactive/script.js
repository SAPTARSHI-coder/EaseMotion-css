const stars = document.querySelectorAll(".star");
const text = document.getElementById("starText");
const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];

stars.forEach((s) => {
  s.addEventListener("click", () => {
    const val = parseInt(s.dataset.val);
    stars.forEach((st, i) => st.classList.toggle("active", i < val));
    text.textContent = `${val} / 5 — ${labels[val]}`;
  });
});
