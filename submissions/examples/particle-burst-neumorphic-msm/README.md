# Particle Burst Neumorphic Effect

## What does this do?

This submission adds a pure HTML and CSS neumorphic interface card with a particle-burst interaction style.

## How is it used?

Add the card markup from `demo.html` and include `style.css` in any static HTML page:

```html
<section class="particle-neumo-card">
  <div class="particle-neumo-orb" aria-hidden="true"></div>
  <button class="particle-neumo-action" type="button">
    Launch particle burst
  </button>
</section>
```

The component is self-contained and does not require JavaScript, a build step, external fonts, or CDN assets.

## Why is it useful?

EaseMotion CSS focuses on expressive motion that still feels lightweight and readable. This component demonstrates how a soft neumorphic surface can feel more energetic through GPU-friendly transforms, layered radial gradients, clear focus states, and reduced-motion support.

## Accessibility Notes

- The demo uses semantic landmarks, headings, buttons, and list content.
- Decorative particles are hidden with `aria-hidden="true"`.
- Interactive controls include visible hover and keyboard focus states.
- Motion-heavy effects are disabled for users who prefer reduced motion.
