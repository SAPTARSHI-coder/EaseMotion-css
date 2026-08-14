# Star Hover Fall

A CSS-only celestial hover effect where glowing stars fall around a button while a shimmering highlight travels across its border.

## Features

- Falling glowing stars triggered by hover
- Animated glitter highlight around the button border
- Soft cyan glow and hover shadow
- Pure CSS implementation
- No JavaScript or external dependencies
- Respects `prefers-reduced-motion`

## Files

- `demo.html` — standalone demonstration
- `style.css` — animation and component styles

## Usage

Wrap the button and star elements inside a `.cosmic-scene` container:

```html
<div class="cosmic-scene">
  <span class="star star-1">✦</span>
  <span class="star star-2">✧</span>
  <span class="star star-3">✦</span>
  <span class="star star-4">✧</span>
  <span class="star star-5">·</span>
  <span class="star star-6">✦</span>

  <button class="cosmic-button">
    Explore
  </button>
</div>
```
## How it works

- The `.star` elements are positioned above the scene and animated downward using CSS keyframes.
- Different animation delays create a staggered falling-star effect.
- A pseudo-element on the button creates the moving glitter border.
- Hovering the scene activates both the falling stars and button highlight.
- `prefers-reduced-motion` disables the animations for users who prefer reduced motion.

## Customization

You can customize the effect by:

- Changing the star positions and animation delays.
- Adjusting the falling speed and distance.
- Changing the star and border colors.
- Adding or removing stars for different particle densities.
- Adjusting the button glow and shadow.

## Accessibility

The decorative stars use `pointer-events: none` so they do not interfere with button interaction.

The animation respects `prefers-reduced-motion` to provide a reduced-motion experience.

## Browser Support

Uses standard CSS animations, pseudo-elements, gradients, and `prefers-reduced-motion`. The demo works in current modern browsers.