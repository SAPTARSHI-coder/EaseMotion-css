# Blur-Entrance Tabs — Minimalist Tech

CSS-only tab component where each panel enters with a blur-to-sharp transition. When switching tabs, the active panel starts blurred and slightly offset, then sharpens into place.

## How It Works

Three radio inputs control which tab is active. Only the panel matching the checked radio is visible. Inactive panels have `filter: blur(10px)`, reduced opacity, and a small vertical offset. The active panel transitions to `blur(0)`, full opacity, and its natural position.

The blur creates a frosted-glass feel — the content appears to resolve from a soft haze into focus, which fits well with minimalist tech aesthetics.

## Customization

- Change `--bet-blue` for a different active tab color
- Adjust the `blur()` value for more or less dramatic entrance
- Modify `translateY()` for vertical offset control
- Swap the easing to `ease-out` for less spring

## Notes

- Pure HTML + CSS, no JavaScript
- `prefers-reduced-motion` disables the blur animation
- Radio inputs give keyboard accessibility for free
- Panels use `position: absolute` with `min-height` to prevent layout shift
