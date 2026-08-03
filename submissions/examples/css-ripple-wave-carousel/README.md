# CSS Ripple-Wave Carousel

A pure CSS carousel styled as a "featured work" project showcase, with a ripple-wave effect that plays from the center of each slide as it becomes active. No JavaScript, no dependencies.

## How it works

Slide switching uses the same radio-button pattern as tabs: three hidden radios sharing one `name`, each paired with a dot `<label>` for navigation. Since only one radio can be checked at a time, only one slide is visible.

The ripple effect is a `::before` pseudo-element on each slide, positioned at its center. When a slide's radio is checked, its `::before` plays a `@keyframes` animation that scales the small circle up to cover the whole slide while fading out, creating a wave that radiates outward as the slide transitions in.

## Files

- `demo.html` – a 3-slide carousel with dot navigation
- `style.css` – all styling, custom properties, slide switching, and the ripple keyframe
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-carousel-duration` – 0.6s
- `--ease-carousel-easing` – ease-out
- `--ease-carousel-radius` – 12px
- `--ease-carousel-bg` – viewport background
- `--ease-carousel-border` – border color
- `--ease-carousel-text` – slide title color
- `--ease-carousel-muted-text` – slide description color
- `--ease-carousel-accent` – ripple and active-dot color
- `--ease-carousel-dot-size` – diameter of each nav dot

Example override:

```css
:root {
  --ease-carousel-accent: #22c55e;
  --ease-carousel-duration: 0.4s;
}
```

## Notes

- Fully responsive, with breakpoints at 768px and 480px
- Dots are real `<label>` elements paired with radio inputs, so navigation is keyboard-accessible
- Respects `prefers-reduced-motion` — the ripple animation is disabled and slides simply cross-fade without the wave effect