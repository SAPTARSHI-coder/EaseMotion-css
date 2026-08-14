const btn = document.getElementById("codeCopy");
const code = document.getElementById("codeContent");

btn.addEventListener("click", async () => {
  await navigator.clipboard.writeText(code.textContent);
  btn.textContent = "Copied!";
  btn.classList.add("copied");
  setTimeout(() => {
    btn.textContent = "Copy";
    btn.classList.remove("copied");
  }, 2000);
});
