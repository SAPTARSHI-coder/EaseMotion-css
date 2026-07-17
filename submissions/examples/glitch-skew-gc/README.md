# Glitch Skew Animation

### What does this do?
Creates a rapid, digital glitch effect using random skew offsets and optional color splitting (RGB shift).

### How is it used?
1. Apply the class `glitch-skew-gc` to any element to trigger the skew effect on hover.
2. For the color-split effect, add the class `glitch-skew-split-gc` and include a `data-text` attribute matching the element's content.
3. You can also trigger the animation programmatically by toggling the `glitch-skew-active-gc` class.

Example:
```html
<div class="glitch-skew-gc glitch-skew-split-gc" data-text="GLITCH">GLITCH</div>
```

### Why is it useful?
It provides a high-energy, "cyberpunk" aesthetic that is perfect for gaming interfaces, tech-themed websites, or attention-grabbing UI elements. The use of skew offsets creates a more dynamic distortion than simple translation-based glitches.
