# Accessible Theme Switcher Pill with Sun/Moon Icon Morph

> A beautifully polished, accessible dark/light mode toggle switch featuring fluid SVG icon morphing and robust ARIA state management.

## Features

- **Fluid SVG Morphing** — Smoothly transforms a sun icon into a crescent moon using CSS rotations, scale transformations, and SVG masking (`<mask id="moon-mask">`).
- **Accessible State Management** — Utilizes a semantic `<button role="switch">` and dynamically updates the `aria-checked` attribute so screen readers announce the exact theme state accurately.
- **Global CSS Custom Properties** — Automatically transitions page colors globally by binding `--bg-primary` and `--text-primary` tokens to the `data-theme` attribute on the `<html>` root.
- **Persistent Memory** — Uses vanilla JavaScript and `localStorage` to save user preference across sessions, seamlessly gracefully falling back to OS-level `prefers-color-scheme` settings.
- **Motion Safe** — Respects `prefers-reduced-motion: reduce`, replacing the morphing animations with instant state swaps for users who require reduced motion.

## Files

```
submissions/examples/theme-switcher-morph-em/
├── demo.html    — Semantic `<button role="switch">` structure featuring the masked inline SVG icon
├── style.css    — Global theme variables, focus outlines, and the complex SVG morphing keyframes/transitions
├── script.js    — ARIA property synching, `localStorage` persistence, and OS media query listeners
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--bg-primary` | `#f8fafc` (Light) / `#0f172a` (Dark) | Page background transition token |
| `--toggle-bg` | `#e2e8f0` (Light) / `#334155` (Dark) | The background track of the pill |
| `--toggle-icon` | `#f59e0b` (Sun) / `#fbbf24` (Moon) | The SVG morphing icon color |
| `--morph-transition`| `0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Bouncy transform timing function |

## Usage

Include the toggle button structure anywhere in your application:

```html
<button type="button" class="theme-toggle" id="theme-toggle" role="switch" aria-checked="false" aria-label="Toggle Dark Theme">
  <span class="theme-toggle__sr-only">Toggle Dark Theme</span>
  <span class="theme-toggle__track" aria-hidden="true">
    <span class="theme-toggle__thumb">
      <!-- Inline SVG goes here -->
    </span>
  </span>
</button>
```

And ensure your global CSS variables are mapped to the root:
```css
:root { /* Light Mode Tokens */ }
:root[data-theme="dark"] { /* Dark Mode Tokens */ }
```

## Acceptance Criteria ✅

- [x] SVG sun rays rotate and scale down smoothly while the moon crescent scales in natively during the toggle action.
- [x] Color theme transitions smoothly across background and text properties (`transition: background-color 0.4s ease`).
- [x] ARIA switch attributes (`role="switch"`, `aria-checked="true/false"`) update dynamically on click.
- [x] JavaScript persists the selected theme choice securely in browser `localStorage`.
- [x] Conforms to the repository component file structure constraints (`demo.html`, `style.css`, etc).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
