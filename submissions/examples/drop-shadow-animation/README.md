# drop-shadow() Animation

## What does this do?

Animates the CSS `drop-shadow()` filter — creating glowing orbs, color-shifting shadows, and hover-triggered icon glows. Unlike `box-shadow`, `drop-shadow()` follows the shape of the element (including transparent PNGs).

## How is it used?

```css
.element {
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 8px blue); }
  50%      { filter: drop-shadow(0 0 30px blue); }
}
```

## Why is it useful?

`drop-shadow()` creates richer shadows than `box-shadow` because it respects alpha channels and element shape — critical for icons, logos, and irregular shapes. Animated drop shadows create premium glow effects, hover feedback, and atmospheric lighting without image assets, fitting EaseMotion CSS's zero-dependency approach.
