# Theme Toggle

A sun/moon switch that cross-fades the entire page between light and dark themes driven by CSS custom properties.

## How is it used?

Define both palettes on the root and toggle a `.dark` class:

```css
:root {
  --bg: #f6f8fc;
  --fg: #1e293b;
  transition: background 0.45s ease, color 0.45s ease;
}
:root.dark {
  --bg: #0f172a;
  --fg: #e2e8f0;
}
```

```html
<button class="theme-toggle" id="themeToggle">
  <span class="sun">&#9728;</span>
  <span class="moon">&#9790;</span>
  <span class="toggle-knob"></span>
</button>
```

`document.documentElement.classList.toggle('dark')` swaps every `var(--…)` on the page at once. The knob slides with a spring curve via `.theme-toggle.on .toggle-knob { transform: translateX(30px); }`.

## Why is it useful?

Dark mode is an expected feature, and doing it with CSS variables makes the swap both atomic and animated in a single `transition` on the root. This component also demonstrates progressive enhancement: defaulting to `prefers-color-scheme` and persisting the choice with `localStorage`, so it is a production-ready pattern rather than just a switch.
