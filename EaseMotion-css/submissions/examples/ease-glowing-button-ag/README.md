# Glowing Gradient Border Button

A sleek, dark-mode button featuring an animated gradient border that glows continuously and intensifies on hover.

## Preview

Open `demo.html` in your browser and hover over the button to see the glowing gradient border animation speed up and shine brighter.

## Implementation Details

- **No JavaScript:** The animation and hover effects are achieved purely with CSS.
- **Gradient Animation:** Uses an oversized `linear-gradient` background (at `400%` size) and animates its `background-position` using `@keyframes` to create the illusion of flowing colors.
- **Glowing Effect:** The `::after` pseudo-element copies the gradient border but applies a strong CSS `filter: blur(20px)`. This blurred layer fades in on `:hover`, creating the bright glowing aura around the button.
