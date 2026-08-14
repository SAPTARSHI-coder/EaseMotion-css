# ease-card-testimonial-carousel-sap

An auto-rotating testimonial carousel with crossfade + slight vertical drift between slides, plus clickable dot navigation. Slides are stacked absolutely and cross-animated via opacity/transform rather than a sliding track.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.testimonial-carousel-sap` markup from `demo.html`, adding one `.testimonial-carousel-sap__slide` per testimonial (first marked `is-active`).
3. Include the rotation + dots script from `demo.html` — slide indexing and the interval timer require JS; CSS handles the crossfade transition.

## Customization
- Change the `4000`ms interval for a faster/slower auto-rotate.
- Adjust the `0.5s` crossfade duration/easing on `.testimonial-carousel-sap__slide`.
- Restyle `.testimonial-carousel-sap__dot` for a different indicator look.

## Accessibility
Add `aria-live="polite"` on `.testimonial-carousel-sap__track` so screen readers announce slide changes, and pause auto-rotation on focus/hover for users reading a slide.

## Browser support
All modern browsers.