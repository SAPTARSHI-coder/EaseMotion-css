document.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("toast");
  const copyButtons = document.querySelectorAll(".copy-btn");
  let toastTimeout;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }

  async function copyClassName(className, btn) {
    try {
      await navigator.clipboard.writeText(className);
      showToast(`Class name copied: ${className}`);

      const original = btn.textContent;
      btn.textContent = "✅";
      btn.classList.add("copied");

      setTimeout(() => {
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 1200);
    } catch (err) {
      showToast("Copy failed — please copy manually");
    }
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const className = btn.getAttribute("data-class");
      if (className) {
        copyClassName(className, btn);
      }
    });
  });
});
