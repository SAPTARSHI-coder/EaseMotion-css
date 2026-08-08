# Elastic-Slide Pricing Table

A responsive glassmorphism pricing table with a spring-like horizontal slide interaction. The motion overshoots slightly and settles back, giving the cards a tactile elastic personality.

## File structure

```text
elastic-slide-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Detailed three-tier pricing content and feature lists.
- Elastic horizontal movement driven by a custom `cubic-bezier()` curve.
- Decorative ambient highlight follows the card during the interaction.
- Hover and keyboard focus share the same motion state.
- Responsive fallback changes the motion from horizontal slide to vertical lift on narrow screens.
- No JavaScript or external dependencies.
- `prefers-reduced-motion` disables all elastic movement.

## Usage

Open `demo.html` directly in a browser. Copy the `.plans` section and include `style.css` to reuse the component.

## Motion details

The desktop interaction uses `translateX(12px)` with `cubic-bezier(.22,1.6,.36,1)`. The easing curve intentionally exceeds a standard ease-out curve to create a spring-like arrival without JavaScript physics. On smaller screens the movement becomes a vertical lift so the card never pushes outside the viewport.

## Customization

Tune `--spring` for more or less bounce. Reduce the translation distance for dense interfaces, or increase it for a showcase component. The decorative `::after` element can be removed if a flatter treatment is preferred.

## Accessibility

Actions remain native links and keyboard focus activates the same state as hover. The motion is decorative and does not change content. Reduced-motion preferences remove both the card translation and ambient highlight movement.
