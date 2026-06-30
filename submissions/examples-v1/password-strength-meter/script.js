const input = document.getElementById("psmInput");
const fill = document.getElementById("psmFill");
const hint = document.getElementById("psmHint");

input.addEventListener("input", () => {
  const val = input.value;
  let score = 0;
  if (val.length >= 6) score++;
  if (val.length >= 10) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  const pct = (score / 5) * 100;
  fill.style.width = pct + "%";

  if (score <= 1) {
    fill.style.background = "#ef4444";
    hint.textContent = "Weak — try adding more characters, numbers, and symbols.";
    hint.style.color = "#ef4444";
  } else if (score <= 3) {
    fill.style.background = "#f59e0b";
    hint.textContent = "Medium — add uppercase letters and special characters.";
    hint.style.color = "#f59e0b";
  } else {
    fill.style.background = "#22c55e";
    hint.textContent = "Strong — your password looks great!";
    hint.style.color = "#22c55e";
  }

  if (!val) {
    fill.style.width = "0%";
    hint.textContent = "Enter a password to check strength";
    hint.style.color = "#94a3b8";
  }
});
