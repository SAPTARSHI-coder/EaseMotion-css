# Particle Burst Button

A glowing, celebratory button that releases colourful particles when clicked.

## Use it

Include `style.css` and `script.js`, then add this button to your page:

```html
<button class="ease-particle-btn" type="button">Celebrate!</button>
```

`script.js` finds `.ease-particle-btn` and creates 20–30 `.ease-particle` elements on each click. Their random colour, size, and direction are passed to CSS as custom properties, while `style.css` handles the smooth movement and fade-out.

The `.ease-particle-burst` class is applied briefly during a click for the button pop animation. Without JavaScript, the button remains fully usable and retains its glow and hover effect; it simply does not create particles.

The example also honours `prefers-reduced-motion` by making the animations nearly instant.
