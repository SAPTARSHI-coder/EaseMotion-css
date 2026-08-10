# Scroll-Triggered Reading Progress Bar

A thin animated progress bar fixed at the top of the viewport that fills proportionally as the user scrolls down the page — ideal for blog posts, documentation, and long-form content.

## Features

- **`.ease-reading-progress`** — fixed to top, full width, 3px default height
- **CSS custom properties** — `--ease-scroll` (0–100) drives the bar width via `calc()`
- **Customizable** — `--ease-progress-height`, `--ease-progress-color`, `--ease-z-progress`
- **`::after` pseudo-element** — no extra DOM elements needed, `pointer-events: none`
- **requestAnimationFrame throttle** — performant scroll listener with passive event
- **Smooth transition** — `width 0.1s linear` for a polished feel

## Files

- `style.css` — progress bar styles and demo layout
- `demo.html` — working demo page with scrollable article content
- `README.md` — this file

## Usage

```html
<div class="ease-reading-progress"></div>

<script>
  const bar = document.querySelector('.ease-reading-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.setProperty('--ease-scroll', percent);
  }, { passive: true });
</script>
```
