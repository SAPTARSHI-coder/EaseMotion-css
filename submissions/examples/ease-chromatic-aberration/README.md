# ease-chromatic-aberration

Simulates a lens chromatic aberration / RGB channel-split glitch on text. Two pseudo-elements mirror the text with red and blue tints and `mix-blend-mode: screen`, then offset horizontally to create the split-channel illusion. Two variants: hover-triggered and auto-glitching.

## Usage

```html
<!-- Hover-triggered -->
<span class="chromatic-text" data-text="Your Text">Your Text</span>

<!-- Auto-glitch pulse -->
<div class="chromatic-text-auto">Your Text</div>
```

Note: `.chromatic-text` requires the `data-text` attribute to mirror the text content into `::before` / `::after` via `content: attr(data-text)`.

## How it works

- `::before` is tinted red (`#ff0033`) and offset left; `::after` is tinted blue (`#0033ff`) and offset right
- `mix-blend-mode: screen` blends the colored copies onto the white text, creating the RGB fringe
- On hover, the offsets increase from ±3px to ±6px and opacity fades in
- The auto variant uses `@keyframes` with sparse glitch intervals (fires at 88% and 94% of a 4s loop)
- `prefers-reduced-motion` disables both transitions and animations

## Customization

| Property | Description |
|----------|-------------|
| `translate()` values on `::before` / `::after` | Red/blue channel separation distance |
| `color` on pseudo-elements | RGB channel tint colors |
| `animation` interval in keyframes | How often the auto-glitch fires |
| `mix-blend-mode` | Try `multiply` on light backgrounds |

## Accessibility

Respects `prefers-reduced-motion`. Transitions and keyframe animations are disabled when reduced motion is preferred.
