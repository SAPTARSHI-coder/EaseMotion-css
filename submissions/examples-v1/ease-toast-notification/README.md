# ease-toast-notification

Stacked, positionable toast notifications with smooth entrance/exit
animation, an optional auto-dismiss progress bar, and pause-on-hover.

## Usage

```html
<div class="ease-toast-container" id="toastContainer" data-position="top-right"></div>
```

Positions available via `data-position`: `top-right`, `top-left`,
`bottom-right`, `bottom-left`, `top-center`.

```js
function showToast(type, message, duration = 3500) {
  const container = document.getElementById("toastContainer");

  const toast = document.createElement("div");
  toast.className = `ease-toast ease-toast--${type}`;
  toast.innerHTML = `
    <span class="ease-toast__message">${message}</span>
    <button class="ease-toast__close" aria-label="Dismiss">&times;</button>
    <span class="ease-toast__progress" style="animation-duration:${duration}ms;"></span>
  `;

  const dismiss = () => {
    toast.classList.add("ease-toast--leaving");
    toast.addEventListener("animationend", () => toast.remove(), { once: true });
  };

  toast.querySelector(".ease-toast__close").addEventListener("click", dismiss);
  const timer = setTimeout(dismiss, duration);
  toast.addEventListener("mouseenter", () => clearTimeout(timer));

  container.appendChild(toast);
}

showToast("success", "Changes saved successfully.");
```

## Variants

- `.ease-toast--success`
- `.ease-toast--error`
- `.ease-toast--warning`
- `.ease-toast--info`

Each sets a distinct accent color on the toast's left border.

## How it works

- **Entrance**: `ease-toast-in` keyframe slides the toast down and scales it
  up with an elastic `cubic-bezier(0.34, 1.56, 0.64, 1)` easing.
- **Exit**: adding `.ease-toast--leaving` triggers `ease-toast-out`, which
  fades, slides, and collapses the toast's height/margin so siblings
  smoothly reflow into the space, then the element is removed on
  `animationend`.
- **Stacking**: multiple toasts stack via the container's `flex` layout;
  bottom-anchored positions use `flex-direction: column-reverse` so new
  toasts push existing ones upward correctly.
- **Auto-dismiss**: each toast schedules its own removal via
  `setTimeout`, visualized by a shrinking `.ease-toast__progress` bar
  (`animation-duration` matches the timeout). Hovering a toast clears its
  timer so it won't disappear mid-read.

## Files

- `demo.html` - interactive demo with 4 toast type triggers
- `style.css` - all styles and animation
- `README.md` - this file

## Accessibility

Each toast includes a labeled close button (`aria-label="Dismiss"`). For
production use, consider adding `role="status"` / `aria-live="polite"` on
the container so screen readers announce new toasts.
