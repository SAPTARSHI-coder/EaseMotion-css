document.getElementById("emberBtn").addEventListener("click", () => {
  const card = document.getElementById("emberCard");
  const btn = document.getElementById("emberBtn");
  card.classList.add("burning");
  btn.classList.add("burning");
  btn.textContent = "🔥 Burning";
});
