const container = document.getElementById("toastContainer");

function showToast(type, message, duration = 4000) {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-message">${message}</span>
    <button class="toast-close">&times;</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => {
    dismiss(toast);
  });

  container.appendChild(toast);

  setTimeout(() => dismiss(toast), duration);
}

function dismiss(toast) {
  toast.classList.add("toast-out");
  setTimeout(() => toast.remove(), 300);
}

document.querySelectorAll(".toast-trigger").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    const messages = {
      success: "Operation completed successfully!",
      error: "Something went wrong. Please try again.",
      info: "You have 3 new notifications.",
    };
    showToast(type, messages[type]);
  });
});
