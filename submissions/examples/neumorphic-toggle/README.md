# Neumorphic Toggle Switch Set

A set of soft-UI (neumorphic) toggle switches with a smooth sliding thumb that glows purple when active. Pure HTML and CSS — no JavaScript required.

## Features

- 🎛️ Soft neumorphic shadows (dual light/dark inset+outset shadow) on both the row container and the toggle itself
- ✨ Thumb slides with a springy easing curve and glows on activation
- ⌨️ Keyboard-focusable with a visible focus ring
- 📱 Responsive by default — fixed compact size fits any layout
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<label class="neu-toggle">
  <input type="checkbox" />
  <span class="neu-toggle-track"><span class="neu-toggle-thumb"></span></span>
</label>
```

Add `checked` to the `<input>` to have a toggle start in the "on" position. Works as a real checkbox, so it's form-submittable and screen-reader accessible.

## Why it fits EaseMotion CSS

The slide and glow are handled entirely by `:checked` + the general sibling combinator plus `transition`/`transform`, no JavaScript. Class names stay simple and readable (`neu-toggle`, `neu-toggle-track`, `neu-toggle-thumb`).

## Files

- `demo.html` — three example toggle rows in a settings-style list
- `style.css` — all styles, neumorphic shadows, and animations
- `README.md` — this file

## Notes

Neumorphism relies on matching the shadow colors closely to the background color for the soft-embossed look — if you change `.toggle-row`'s background, update the shadow colors in `style.css` to match (typically a slightly darker and slightly lighter shade of the base background).