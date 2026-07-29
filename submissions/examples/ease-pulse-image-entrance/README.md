# Pulse Image Entrance

A smooth, pulse-style entrance animation for image components. The image
fades in while gently overshooting its scale and settling back to size —
useful for hero images, galleries, and cards.

## Usage

```html
<img
  src="image.jpg"
  class="ease-pulse-image-entrance"
  alt="Example"
/>
```

Include `style.css` and the class handles the rest. No JS required.

## Customization

The animation is controlled by CSS custom properties, so you can tune it
per-element without editing the core CSS:

| Variable               | Default     | Description                          |
|-------------------------|-------------|---------------------------------------|
| `--pulse-duration`      | `0.8s`      | Total animation length                |
| `--pulse-scale-start`   | `0.85`      | Starting scale (entry size)           |
| `--pulse-scale-peak`    | `1.05`      | Overshoot scale at the midpoint       |
| `--pulse-easing`        | `ease-out`  | Timing function                       |
| `--pulse-delay`         | `0s`        | Delay before animation starts         |

Example override:

```html
<img
  src="image.jpg"
  class="ease-pulse-image-entrance"
  style="--pulse-duration: 1.2s; --pulse-scale-peak: 1.1;"
  alt="Example"
/>
```

### Built-in variants

```html
<img class="ease-pulse-image-entrance subtle" ... />
<img class="ease-pulse-image-entrance dramatic" ... />
<img class="ease-pulse-image-entrance fast" ... />
<img class="ease-pulse-image-entrance slow" ... />
```

| Class      | Effect                                  |
|------------|------------------------------------------|
| `.subtle`    | Smaller scale range, gentler pulse     |
| `.dramatic`  | Larger scale range, stronger pulse     |
| `.fast`      | 0.4s duration                          |
| `.slow`      | 1.4s duration                          |

Combine variants freely, e.g. `class="ease-pulse-image-entrance dramatic slow"`.

## Accessibility

Respects `prefers-reduced-motion`. Users with this setting enabled will see
the image appear instantly at full opacity and scale, with no animation.

## Triggering on scroll (optional)

By default the animation runs immediately on page load. To trigger it only
when an image scrolls into view, pause it by default and use an
`IntersectionObserver` to start it:

```css
.ease-pulse-image-entrance {
  animation-play-state: paused;
}
.ease-pulse-image-entrance.is-visible {
  animation-play-state: running;
}
```

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document
  .querySelectorAll('.ease-pulse-image-entrance')
  .forEach((el) => observer.observe(el));
```

## Browser support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Relies only
on standard CSS animations, custom properties, and `prefers-reduced-motion`.

## License

MIT