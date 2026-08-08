# Ripple-Wave Pricing Table

A detailed responsive pricing component with glassmorphism surfaces and two expanding ripple layers that originate from the active card.

## File structure

```text
ripple-wave-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three complete pricing plans with feature lists and supporting copy.
- Two staggered circular waves create the signature interaction.
- CSS `@keyframes ripple` changes only size, opacity, and shadow.
- Hover and keyboard focus trigger the same decorative motion.
- Responsive three-column-to-single-column layout.
- Glass blur, gradients, borders, and depth shadows.
- No JavaScript or external dependencies.
- `prefers-reduced-motion` disables the ripple and card movement.

## Usage

Open `demo.html` directly in a modern browser. Copy the `.plans` section and keep the `.wave` elements inside each card to reproduce the effect.

## Motion details

The first ripple begins immediately and the second starts `180ms` later. The rings expand from a small `22px` origin to a large `620px` diameter before fading away. Because the elements are decorative and `aria-hidden`, the visual effect never changes the accessible content.

## Customization

Change the ripple duration, delay, starting size, or final size in `@keyframes ripple`. The visual tokens are centralized in `:root`, making the component easy to adapt to a brand palette.

## Accessibility

All actions use native links with visible focus outlines. Decorative waves are hidden from assistive technology. Reduced-motion users receive the same cards and controls without the expanding animation.
