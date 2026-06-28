# ease-back-to-top

## What does this do?

Provides a **back-to-top button** — a floating button that appears after scrolling past a configurable threshold and smoothly scrolls to the top when clicked. Supports size variants, secondary theme, and ease-hover-grow/ease-hover-lift effects.

## How is it used?

```html
<button class="ease-back-to-top ease-hover-lift" id="backToTop" aria-label="Back to top">↑</button>

<script>
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('ease-visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>
```

### Available Classes

| Class | Purpose |
|-------|---------|
| `.ease-back-to-top` | Fixed floating button (hidden by default) |
| `.ease-visible` | Shows the button with fade + slide-up |
| `.ease-hover-grow` | Scale up on hover (1.1x) |
| `.ease-hover-lift` | Lift up with enhanced shadow on hover |
| `.ease-back-to-top-sm` | Small size (2.25rem) |
| `.ease-back-to-top-lg` | Large size (3.25rem) |
| `.ease-back-to-top-secondary` | Light/secondary theme (white bg, dark icon) |

### Button States

| State | Behavior |
|-------|----------|
| Hidden (default) | `opacity: 0`, `pointer-events: none`, `translateY(20px)` |
| Visible | `.ease-visible` — fade + slide-up animation, clickable |
| Hover | Background darkens, shadow increases, optional grow/lift |
| Focus-visible | Primary color outline ring |

### Scroll Listener

The demo uses a simple scroll listener with a 400px threshold. The threshold can be changed to any value:

```js
window.addEventListener('scroll', () => {
  btn.classList.toggle('ease-visible', window.scrollY > threshold);
});
```

### Design Tokens Used

| Token | Fallback | Purpose |
|-------|----------|---------|
| `--ease-color-primary` | `#6c63ff` | Button background |
| `--ease-color-primary-dark` | `#5a52e0` | Button hover |
| `--ease-color-surface` | `#fff` / `#141e33` | Secondary bg |
| `--ease-color-text` | `#1e293b` / `#e2e8f0` | Secondary icon |
| `--ease-color-neutral-200` | `#e2e8f0` | Secondary border |
| `--ease-color-neutral-700` | `#334155` | Dark secondary border |
| `--ease-color-neutral-800` | `#1e293b` | Dark secondary hover |
| `--ease-shadow-md` | `0 4px 12px...` | Button shadow |
| `--ease-shadow-lg` | `0 10px 30px...` | Hover shadow |
| `--ease-shadow-xl` | `0 15px 40px...` | Lift hover shadow |
| `--ease-radius-full` | `9999px` | Circular shape |
| `--ease-space-8` | `2rem` | Bottom/right offset |
| `--ease-z-raised` | `100` | Z-index |
| `--ease-speed-fast` | `150ms` | Transition duration |

Fixes #25560
