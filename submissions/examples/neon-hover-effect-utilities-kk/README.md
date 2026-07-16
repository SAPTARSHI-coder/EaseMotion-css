# Neon Hover Effect Utility Classes

## What does this do?
Provides five CSS-only utility classes that apply vivid neon glow effects to any HTML element on hover — from single-colour electric glows to an animated multi-colour rainbow cycle — with no JavaScript or external dependencies.

## How is it used?
Add the class directly to any HTML element:

```html
<!-- Electric-blue neon glow -->
<button class="ease-neon-blue">Hover Me</button>

<!-- Hot-pink neon glow -->
<button class="ease-neon-pink">Hover Me</button>

<!-- Terminal-green neon glow -->
<div class="ease-neon-green">Neon Card</div>

<!-- Premium-purple neon glow -->
<div class="ease-neon-purple">Neon Card</div>

<!-- Animated rainbow neon cycle -->
<button class="ease-neon-rainbow">Hover Me</button>
```

## Included Utilities

| Class | Glow Colour | Description |
|---|---|---|
| `.ease-neon-blue` | `#00bfff` | Electric-blue glow on hover |
| `.ease-neon-pink` | `#ff1493` | Hot-pink neon glow on hover |
| `.ease-neon-green` | `#00ff88` | Terminal-green glow on hover |
| `.ease-neon-purple` | `#bf00ff` | Rich-purple glow on hover |
| `.ease-neon-rainbow` | Multi-colour | Animates through the full spectrum on hover |

## Why is it useful?
Neon glow effects are a staple of modern dark-mode UI design — used everywhere from gaming dashboards to SaaS landing pages. By shipping them as single-class utilities, EaseMotion CSS lets developers apply polished, consistent neon interactions without writing custom `box-shadow` stacks per element. All effects use only `box-shadow`, `border-color`, and `transform` — properties that don't trigger layout recalculation — keeping performance on par with the library's existing animation classes.

## Accessibility
All effects are suppressed for users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-neon-blue,
  .ease-neon-pink,
  .ease-neon-green,
  .ease-neon-purple,
  .ease-neon-rainbow {
    transition: none;
    animation: none;
  }
}
```

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see all five utilities with buttons, cards, and a side-by-side comparison panel.

## Contribution Notes
- Class naming follows the `ease-*` convention used throughout EaseMotion CSS.
- Maintainer may rename or adjust before merging.
- All work is self-contained — no changes to `core/` or `components/`.
