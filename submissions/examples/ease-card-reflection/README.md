# ease-card-reflection

A glass-like glare spot follows the cursor across the card surface.

## Usage

Add `.cr-glare` as a sibling inside the `.ease-card-reflection` container. Include the companion script to update `--cx` / `--cy` CSS variables on `mousemove`.

```html
<div class="ease-card-reflection">
  <div>Card content</div>
  <div class="cr-glare"></div>
</div>
```

## Why it fits EaseMotion CSS

The radial gradient glare spot is CSS-driven via custom properties. The script only updates two variables.
