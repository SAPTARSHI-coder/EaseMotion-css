# Windshield Wiper Interval Sweep Component

Simulates a classic windshield wiper moving across a rainy pane – entirely in CSS.

## Features
- CSS only – no JavaScript needed
- Configurable interval via the `animation` timing
- `prefers-reduced-motion` disables animation for accessibility
- Simple markup that can be dropped into any page

## Usage
```html
<link rel="stylesheet" href="style.css" />
<div class="wiper-scene">
  <div class="windshield">
    <div class="raindrop"></div>
    <div class="raindrop"></div>
    <div class="raindrop"></div>
  </div>
  <div class="wiper-arm"></div>
</div>
```

## Customisation
- Adjust `animation-duration` on `.wiper-arm` to change sweep speed.
- Add more `.raindrop` elements for heavier rain.
