# ease-spinner

Pure CSS loading spinners for EaseMotion CSS.
Four styles · three sizes · two colour modifiers · zero JS · zero SVG.

## Files

| File | Purpose |
|------|---------|
| `style.css` | All spinner styles and `@keyframes` |
| `demo.html` | Visual showcase of every variant |
| `README.md` | This file |

## Classes

| Class | Description |
|-------|-------------|
| `.ease-spinner` | Classic rotating ring |
| `.ease-spinner-dots` | 3 bouncing dots (3 `<span>` children required) |
| `.ease-spinner-bars` | 5 equalizer bars (5 `<span>` children required) |
| `.ease-spinner-dual` | Two counter-rotating rings |
| `.ease-spinner-sm` | 16px size |
| `.ease-spinner-lg` | 48px size |
| `.ease-spinner-primary` | Uses `--ease-color-primary` |
| `.ease-spinner-white` | White — for dark backgrounds / coloured buttons |

## Usage

```html
<!-- Page loader -->
<div class="ease-spinner ease-spinner-lg ease-spinner-primary"></div>

<!-- Inside a button -->
<button class="ease-btn ease-btn-primary" disabled>
  <span class="ease-spinner ease-spinner-sm ease-spinner-white"></span>
  Loading…
</button>

<!-- Dots -->
<div class="ease-spinner-dots">
  <span></span><span></span><span></span>
</div>

<!-- Bars -->
<div class="ease-spinner-bars">
  <span></span><span></span><span></span><span></span><span></span>
</div>
```

## CSS Variables

```css
:root {
  --ease-color-primary:   #7c3aed;
  --ease-color-white:     #ffffff;
  --ease-spinner-size:    32px;
  --ease-spinner-size-sm: 16px;
  --ease-spinner-size-lg: 48px;
  --ease-spinner-border:  3px;
  --ease-spinner-speed:   0.7s;
}
```

## Technical notes

- All animation via CSS `@keyframes` — no JS, no SVG.
- Dots and bars require child `<span>` elements; ring variants are self-contained.
- All selectors use the `ease-` prefix to avoid collisions.

Closes #2726
