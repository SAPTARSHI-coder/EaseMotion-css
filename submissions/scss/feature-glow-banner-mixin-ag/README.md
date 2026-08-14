# Glow Banner Mixin

## Description
The `ease-glow-banner-mixin-ag` is an SCSS mixin designed for banners, alerts, or notifications that are being dismissed. Instead of simply fading out, the banner briefly flashes a bright glow and slightly expands before dissipating. This creates a satisfying, energetic exit effect indicating that an action (like "accepting" or "dismissing") was successfully registered.

## Installation & Usage
Import the `_glow-banner.scss` file into your styles.

```scss
@import 'path/to/feature-glow-banner-mixin-ag/glow-banner';

.my-alert-banner {
  /* Basic banner styling */
  background-color: #1e293b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  
  /* Include the mixin */
  @include ease-glow-banner-mixin-ag(0.6s);
  
  /* Optionally override the default glow color using the CSS variable */
  --glow-color-ag: rgba(16, 185, 129, 0.6); /* emerald green glow */
}
```

Trigger the exit animation by adding the `.exiting-ag` class, typically via JavaScript when the close button is clicked, before removing the element from the DOM.

```javascript
const banner = document.querySelector('.my-alert-banner');
const closeBtn = banner.querySelector('.close-btn');

closeBtn.addEventListener('click', () => {
  banner.classList.add('exiting-ag');
  banner.addEventListener('animationend', () => {
    banner.remove();
  });
});
```

## Parameters
The mixin accepts the following optional parameters:
- `$duration`: How long the exit animation lasts. Default is `0.6s`.
- `$easing`: The timing function. Default is `ease-in-out`.

You can also customize the color of the glow dynamically by setting the `--glow-color-ag` CSS variable on the element.

## Accessibility Considerations
- **Pointer Events**: Applies `pointer-events: none` during the exit animation to prevent accidental clicks while the element is disappearing.
- **Reduced Motion**: The glow effect and scaling can be distracting. A `@media (prefers-reduced-motion: reduce)` media query overrides the complex animation and replaces it with a simple, fast opacity fade (`ease-glow-banner-fallback-ag`), ensuring a calm and accessible experience for sensitive users.
