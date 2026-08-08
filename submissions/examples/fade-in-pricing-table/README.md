# Fade-In Pricing Table

A complete responsive pricing section that introduces glassmorphism cards with a staggered CSS fade-in sequence.

## File structure

```text
fade-in-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three detailed pricing tiers with supporting descriptions and feature lists.
- Staggered `@keyframes card-enter` timing creates a clear entrance rhythm.
- Blur, opacity, and vertical movement are combined for a soft reveal.
- Hover and focus states provide a second layer of interaction after entrance.
- Responsive layout collapses cleanly to one column.
- No JavaScript or external dependencies.
- Reduced-motion support removes the entrance animation while keeping cards visible.

## Usage

Open `demo.html` directly in a browser. The component can be embedded by copying the `.plans` section and loading `style.css`.

## Motion details

The first card starts immediately, the second waits `130ms`, and the third waits `260ms`. The animation starts slightly translated and blurred, then settles at full opacity. This makes the content feel introduced rather than abruptly appearing.

## Customization

Change the animation duration, delay increments, or the `translateY()` distance in `@keyframes card-enter`. The glass surface and typography are controlled through the variables in `:root`.

## Accessibility

Pricing content is semantic HTML. Links have visible focus indicators, and no information depends on the animation. With `prefers-reduced-motion: reduce`, cards are immediately visible and all entrance/hover movement is disabled.
