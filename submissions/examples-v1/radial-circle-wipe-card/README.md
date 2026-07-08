# Radial Circle-Wipe Card Reveal

Closes #6853

Hover overlay that expands a circular clip-path from the card center, revealing a second content state with staggered slide-up animations.

## Classes

| Class | Description |
|---|---|
| `.em-circle-wipe-card` | Card container |
| `.em-card-state-base` | Default visible state |
| `.em-card-state-overlay` | Hidden state revealed on hover |

## Usage

```html
<div class="em-circle-wipe-card">
  <div class="em-card-state-base"><!-- default content --></div>
  <div class="em-card-state-overlay"><!-- revealed content --></div>
</div>
```
