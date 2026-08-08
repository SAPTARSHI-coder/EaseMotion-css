# Scale-Hover Pricing Table

A detailed glassmorphism pricing component where the active plan gently scales above the surrounding cards on hover or keyboard focus.

## File structure

```text
scale-hover-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Complete three-tier pricing content with supporting descriptions.
- `transform: scale()` interaction with a custom easing curve.
- Soft radial highlight appears inside the active card.
- Glassmorphism surfaces with depth shadows and backdrop blur.
- Responsive grid with a smaller scale factor on mobile.
- Keyboard focus receives the same visual hierarchy as hover.
- Reduced-motion support removes scaling and highlight movement.

## Usage

Open `demo.html` directly. The component requires only `style.css` and can be dropped into an existing page without JavaScript.

## Motion details

The card scales to `1.055` on larger screens and `1.025` on smaller screens. This difference prevents the interaction from feeling oversized on narrow displays. The card uses `z-index` during the active state so its shadow and border remain visually above neighboring cards.

## Customization

The `--ease` token controls the personality of the scale transition. Increase the scale slightly for a stronger showcase effect, or reduce it toward `1.025` for a subtle product UI.

## Accessibility

The component uses semantic links for actions and visible focus outlines. The animation is decorative and does not communicate information unavailable elsewhere. Reduced-motion users receive the same content and layout without transform movement.
