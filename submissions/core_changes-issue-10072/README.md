# .ease-hover-pulse-glow — Combined Pulse + Glow Hover Animation

Adds a new `.ease-hover-pulse-glow` class that combines a 1.05x scale pulse burst with a primary-colored shadow glow on hover, giving interactive elements a lively, energetic feel.

## Problem

- `ease-hover-grow` scales up (scale 1.06) but has no glow
- `ease-hover-glow` adds drop-shadow glow but no scale change
- Applying both on the same element causes shadow/transform conflicts
- No existing class combines **pulse** (animated scale burst) **+ glow** (colored shadow)

## Solution

`.ease-hover-pulse-glow` uses a `@keyframes` animation triggered on `:hover` to:
1. Scale from 1× → 1.05× (pulse burst)
2. Grow a `drop-shadow()` glow using `--ease-color-primary`
3. Hold the final state (scale 1.05 + glow) while hovered
4. Uses `var(--ease-ease-bounce)` for a peppy feel

## Integration

### CSS to add to `core/animations.css`:

```css
@keyframes ease-kf-hover-pulse-glow {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 transparent);
  }
  50% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px color-mix(in srgb, var(--ease-color-primary) 50%, transparent));
  }
  100% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 12px color-mix(in srgb, var(--ease-color-primary) 40%, transparent));
  }
}

.ease-hover-pulse-glow {
  z-index: 1;
  position: relative;
  transform-origin: center;
  transition: transform var(--ease-speed-medium) var(--ease-ease-bounce),
              filter var(--ease-speed-medium) var(--ease-ease-bounce);
}

.ease-hover-pulse-glow:hover {
  animation: ease-kf-hover-pulse-glow var(--ease-speed-medium) var(--ease-ease-bounce) forwards;
}
```

### Usage

```html
<button class="ease-btn ease-btn-primary ease-hover-pulse-glow">
  Click Me ✨
</button>

<div class="ease-card ease-hover-pulse-glow">
  Hover this card
</div>
```

## Files
- `README.md` — this file
- `demo.html` — interactive demo page
- `style.css` — CSS for the hover-pulse-glow animation
