# ease-venetian-blind-wipe

A hover-triggered reveal effect that splits a container into horizontal slats and collapses them sequentially using `scaleY`, exposing the content underneath — no JavaScript required.

## Usage

```html
<div class="venetian-blind-container">
  <div class="venetian-blind-content">Your content here</div>
  <div class="venetian-blind-slats">
    <div class="slat"></div>
    <div class="slat"></div>
    <div class="slat"></div>
    <div class="slat"></div>
    <div class="slat"></div>
    <div class="slat"></div>
    <div class="slat"></div>
    <div class="slat"></div>
  </div>
</div>
```

## How it works

- The slat overlay sits `position: absolute` over the content layer
- Each `.slat` uses `transform-origin: center top` so it folds downward
- Staggered `transition-delay` on `nth-child` selectors creates the sequential wipe
- On hover, all slats animate `scaleY(1) → scaleY(0)`, revealing the content behind
- `@media (prefers-reduced-motion: reduce)` disables all transitions for accessibility

## Customization

| Variable | Description |
|----------|-------------|
| `.slat` background | Color of the slat panels (default: `#1a1a2e`) |
| `transition-delay` step | Controls wipe speed between slats (default: `0.04s`) |
| Slat count | Add/remove `.slat` divs; update `nth-child` delays to match |
| `transition` duration | Per-slat collapse speed (default: `0.35s`) |

## Accessibility

Respects `prefers-reduced-motion`. When reduced motion is preferred, slats disappear instantly without animation.
