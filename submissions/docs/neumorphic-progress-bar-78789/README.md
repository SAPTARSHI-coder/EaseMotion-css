# Neumorphic Progress Bar

Documentation showcase for issue #78789.

## What it demonstrates

- A semantic `progressbar` region with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.
- Soft neumorphic inset and outset shadows.
- A smooth CSS-only entrance animation.
- Responsive sizing and reduced-motion support.
- Light and dark color-scheme support.

## Files

- `demo.html` — accessible live example.
- `style.css` — component and showcase styling.

## Usage

Change the `width` of `.progress-fill` and keep the ARIA value synchronized with the visual percentage. The component requires no JavaScript.

## Accessibility

The demo uses a labelled `role="progressbar"` and provides a visible percentage. Users who prefer reduced motion receive a static presentation.
