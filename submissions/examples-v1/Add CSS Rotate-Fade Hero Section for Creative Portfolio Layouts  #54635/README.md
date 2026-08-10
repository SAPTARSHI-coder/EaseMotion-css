# CSS Rotate-Fade Hero Section for Creative Portfolio Layouts

A bold, modern, and highly-animated hero section designed specifically for creative studios and portfolios. Built purely with CSS, it features 3D staggered entrance animations and a continuously shifting ambient background.

## Features

- **Pure CSS / HTML**: Zero JavaScript dependency for animations.
- **Rotate-Fade Entrance**: Content elements (badge, headline, paragraph, buttons) enter the screen using a complex `rotateX`, `rotateY`, and `translateY` transform combined with an opacity fade. This gives a premium, 3D card-flip reveal effect.
- **Ambient Background Shapes**: Utilizes absolutely positioned divs with extreme `filter: blur()` to create gradient orbs. These orbs continuously rotate and fade (pulsate) in the background via CSS keyframes.
- **Fluid Typography**: Uses CSS `clamp()` to perfectly scale the massive typography from mobile all the way to ultrawide displays without arbitrary media queries.
- **Accessible**: Adheres to `@media (prefers-reduced-motion: reduce)` by bypassing the entrance animations and freezing the background shapes for motion-sensitive users.

## How It Works

The entrance animation relies on the `.rotate-fade-enter` base class alongside `.delay-1`, `.delay-2`, etc., utility classes to stagger the animation of children inside the `.hero-content`.

The background effect (`.bg-visuals`) uses two large gradient circles heavily blurred using CSS filters. The `@keyframes bg-rotate-fade` smoothly scales, rotates, and dims them indefinitely.

## Customization

You can easily adjust the animation timings, eases, and theme colors by editing the CSS Variables in `style.css`:

```css
:root {
  /* Accent Gradients */
  --accent-start: #ec4899; /* Pink 500 */
  --accent-mid: #8b5cf6;   /* Violet 500 */
  --accent-end: #3b82f6;   /* Blue 500 */
  
  /* Animation Timing */
  --entrance-duration: 1.2s;
  --bg-rotate-duration: 25s;
}
```

Open `demo.html` in your web browser and refresh the page to see the staggered entrance animations in action!
