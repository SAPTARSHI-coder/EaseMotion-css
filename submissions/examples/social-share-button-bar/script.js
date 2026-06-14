document.getElementById("copyBtn").addEventListener("click", function () {
  navigator.clipboard.writeText(window.location.href).then(() => {
    this.classList.add("copied");
    setTimeout(() => this.classList.remove("copied"), 1500);
  });
});
