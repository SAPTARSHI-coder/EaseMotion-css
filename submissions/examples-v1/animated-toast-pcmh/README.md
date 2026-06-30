# Animated Toast Component

A lightweight, accessible toast notification system built with EaseMotion CSS. Supports success, error, warning, and info variants with smooth slide-in/out animations, auto-dismiss progress bar, and stack management.

## Features

- **4 variants** — success (green), error (red), warning (amber), info (primary)
- **Slide animation** — slides in from the right with a spring-like cubic bezier
- **Auto-dismiss** — each toast auto-dismisses after 4 seconds with a shrinking progress bar
- **Stack support** — multiple toasts stack vertically without overlap
- **Manual dismiss** — close button on each toast
- **Accessible** — `role="alert"` and `aria-live="assertive"` for screen readers
- **Reduced motion** — respects `prefers-reduced-motion: reduce`
- **Responsive** — full-width on mobile, fixed width on desktop

## Usage

Link the CSS and add the container to your HTML, then trigger toasts via JavaScript:

```html
<link rel="stylesheet" href="style.css" />

<div class="toast-container" id="toastContainer"></div>

<script>
  const container = document.getElementById("toastContainer");

  function showToast(type, title, message, duration = 4000) {
    const toast = document.createElement("div");
    toast.className = "toast toast-" + type;
    toast.setAttribute("role", "alert");
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" onclick="this.closest('.toast').classList.add('dismissing')">&times;</button>
      <div class="toast-progress" style="animation-duration: ${duration}ms"></div>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("dismissing");
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
</script>
```

## Files

- `demo.html` — interactive demo with trigger buttons
- `style.css` — complete toast component styles
- `README.md` — this file
