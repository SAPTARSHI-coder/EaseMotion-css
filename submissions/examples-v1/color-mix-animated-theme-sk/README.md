# color-mix() Animated Theme Switcher

Animates an entire page palette simultaneously using a single `@property --mix-pct` custom property inside `color-mix(in oklch, ...)`.

## Classes

| Class               | Theme                                 |
| ------------------- | ------------------------------------- |
| `ease-theme-sunset` | Orange → Pink (oklch 50deg → 340deg)  |
| `ease-theme-ocean`  | Teal → Blue (oklch 200deg → 260deg)   |
| `ease-theme-forest` | Green → Brown (oklch 145deg → 100deg) |
| `ease-theme-active` | Triggers the blend-in animation       |

## Usage

```html
<div class="ease-theme-card ease-theme-ocean ease-theme-active" id="card">
  <div class="theme-header">...</div>
</div>
```

Switch theme by swapping the `ease-theme-*` class and re-adding `ease-theme-active`.

## How it works

`--mix-pct` animates 0%→100%. Every surface uses:

```css
background: color-mix(in oklch, var(--from) var(--mix-pct), var(--to));
```

`oklch` produces perceptually uniform blends with no muddy mid-tones. `@supports not (color: color-mix(in oklch, red, blue))` provides a static fallback.

Closes #9609
