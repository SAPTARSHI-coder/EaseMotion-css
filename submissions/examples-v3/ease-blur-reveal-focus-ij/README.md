# Blur Reveal Focus

Cards are blurred by default and become sharp on hover or focus. Staggered `--brf-delay` per card for a cascade effect.

## Features

- Blur-to-sharp reveal on hover/focus
- Staggered animation via `--brf-delay` CSS variable
- Keyboard accessible with `focus-visible`
- Smooth `cubic-bezier` transition

## Usage

Add `tabindex="0"` and `--brf-delay` to each `.brf-card`. The `filter: blur()` transitions to `0` on hover and focus-visible.

```css
.brf-card {
  filter: blur(6px);
  transition: filter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.brf-card:hover,
.brf-card:focus-visible {
  filter: blur(0);
}
```
