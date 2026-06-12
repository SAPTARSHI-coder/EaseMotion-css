# ease-spotlight-creative

## What does this do?

A creative interactive spotlight effect that follows
the cursor with multi-color radial gradients and
glow layers over a dark overlay.

## How is it used?

Add the class to any container element:

```html
<div class="spotlight-creative">Your content here</div>
```

Add this script to enable mouse tracking:

```js
document.querySelectorAll(".spotlight-creative").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  });
});
```

## Why is it useful?

Adds a visually rich cinematic spotlight effect
using pure CSS gradients and blend modes.
No JavaScript animation libraries needed.
Fits EaseMotion CSS philosophy of lightweight
reusable visual utilities.

## Customization

Change spotlight size by editing circle radius:

```css
/* Larger spotlight */
circle 300px at var(--x, 50%) var(--y, 50%)

/* Smaller spotlight */
circle 100px at var(--x, 50%) var(--y, 50%)
```
