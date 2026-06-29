# Animated Text Cycling Loader — Holographic Terminal Style

## 1. What does this do?

A pure CSS text loader that cycles vertically through a list of words, styled as a modern, glassy, holographic terminal UI. It features a system monospace font, neon glows, glassmorphism (`backdrop-filter`), cyber-glitch text effects, and subtle scanline flickering, creating a highly engaging sci-fi loading experience with zero JavaScript.

## 2. How is it used?

Apply the structure below anywhere you need a cycling text loader:

```html
<div class="text-loader">
  <span class="loader-label">System</span>

  <div class="word-stack">
    <span class="word">initializing</span>
    <span class="word">authenticating</span>
    <span class="word">decrypting</span>
    <span class="word">loading_data</span>
    <!-- Repeat first word to close the loop visually -->
    <span class="word">initializing</span>
  </div>
</div>
```

**Customising the cycle:**

| CSS Variable       | Default  | Controls                       |
|--------------------|----------|--------------------------------|
| `--word-height`    | `2.5rem` | Height of each word slot       |
| `--cycle-duration` | `5s`     | Total animation duration       |
| `--term-text`      | `#00ffc8`| Primary neon text color        |

Add more `<span class="word">` elements and extend the `@keyframes word-cycle` percentages proportionally.

**Smaller variant:**

Add `.text-loader--sm` to the `.text-loader` element for a compact version (used in Demo 2 with a cyan tint and block cursor).

## 3. Why is it useful?

EaseMotion CSS is built on the principle that motion communicates. This component replaces a traditional spinner with dynamic text that informs the user of actual progress or states. The modern holographic/terminal design demonstrates how to combine glassmorphism, CSS keyframe glitches, and glowing neon effects into a lightweight, pure CSS package. It is perfect for developer portfolios, admin dashboards, AI tools, or any interface embracing a "cyberpunk" or dark-mode tech aesthetic.

---

### Accessibility

- The wrapper uses `role="status"` and `aria-live="polite"` so screen readers announce the component without interrupting.
- `@media (prefers-reduced-motion: reduce)` disables all animations (glitch, flicker, and slide) and shows only the first word statically.
- Relies solely on native system monospace fonts (`ui-monospace, SFMono-Regular, etc.`), ensuring fast load times and no external font dependencies.

### Files

| File        | Purpose                             |
|-------------|-------------------------------------|
| `demo.html` | Self-contained working demonstration |
| `style.css` | Raw CSS — no framework dependency   |
| `README.md` | This file                           |
