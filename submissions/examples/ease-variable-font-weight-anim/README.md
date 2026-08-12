# ease-variable-font-weight-anim

Animates the `wght` axis of a variable font via `font-variation-settings` to create a continuous weight-breathing effect or a hover-triggered bold snap. Requires a variable font (demo uses Inter via Google Fonts).

## Usage

```html
<!-- Auto-pulsing weight animation -->
<p class="vf-weight-pulse">Your Text</p>

<!-- Hover to bold -->
<p class="vf-weight-hover">Your Text</p>
```

## How it works

- `font-variation-settings: 'wght' <value>` controls the weight axis (100–900)
- `@keyframes weight-pulse` animates between thin (100) and black (900) on a 2s loop
- The hover variant uses `transition: font-variation-settings` for a smooth snap on pointer entry
- `@supports (font-variation-settings: 'wght' 400)` guards browsers without variable font support — falls back to static `font-weight`
- `prefers-reduced-motion` freezes the pulsing animation at mid-weight and disables the hover transition

## Requirements

The element's font must be a variable font with a `wght` axis. The demo loads Inter from Google Fonts. Any variable font works — swap the `@import` for your font of choice.

## Customization

| Property | Description |
|----------|-------------|
| `wght` range in keyframes | Adjust min/max weight (100–900 or whatever the font supports) |
| `animation` duration | Controls pulse speed (default: `2s`) |
| `transition` duration | Controls hover snap speed (default: `0.4s`) |
| Font family | Replace `'Inter'` with any variable font |

## Accessibility

Respects `prefers-reduced-motion`. Pulsing animation stops and the hover transition is disabled when reduced motion is preferred.
