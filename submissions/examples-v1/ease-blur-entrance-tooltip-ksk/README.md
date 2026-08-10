# Blur-Entrance Tooltip (`ease-blur-entrance-tooltip-ksk`)

1. What does this do?  
An animated tooltip component designed for Creative Portfolio details. Hovering or focusing the trigger element reveals a card tooltip that animates in from a blurred, scaled-down state (`filter: blur(14px) scale(0.85)`) to a clear, full-scale card position using a smooth spring transition (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Wrap the trigger element and `.ease-tooltip` inside a parent `.ease-tooltip-wrapper`. The transition executes automatically during hover or focus:

```html
<div class="ease-tooltip-wrapper" tabindex="0" role="button">
  <span>Hover Me</span>
  <div class="ease-tooltip" role="tooltip">
    <p class="tooltip-title">Project Info</p>
    <p class="tooltip-desc">Detailed analytics information goes here.</p>
  </div>
</div>
```

Customize dimensions and speeds via CSS custom properties:
```css
.ease-tooltip-wrapper {
  --ease-tooltip-blur:     14px;          /* initial blur distance */
  --ease-tooltip-scale:    0.85;          /* initial scale offset */
  --ease-tooltip-duration: 0.3s;           /* transition speed */
  --ease-tooltip-width:    220px;          /* tooltip card width */
  --ease-tooltip-accent:   #f43f5e;        /* theme highlight color */
}
```

3. Why is it useful?  
Instead of traditional blocky tooltips, the blur-entrance effect adds a premium focal fade-in that feels organic. Features built-in keyboard accessibility (`tabindex`, `:focus-within`), caret arrows, and automatic animation overrides for `prefers-reduced-motion` compliance.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54559.*
