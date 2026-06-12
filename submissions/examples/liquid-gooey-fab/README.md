# Liquid Gooey Floating Action Button (FAB)

## What it does

A multi-action Floating Action Button with a **liquid gooey morphing effect** between the main button and its child actions. When opened, child buttons appear to emerge organically from the parent — like drops of liquid separating from a blob.

## Animations & Techniques

- **Gooey SVG Filter**: Uses an inline SVG `<filter>` with `feGaussianBlur` + `feColorMatrix` applied via CSS `filter: url('#gooey')` to create the liquid merge effect between buttons.
- **Spring Entrance**: Child buttons use `cubic-bezier(0.34, 1.56, 0.64, 1)` for overshoot spring animations on `translateY`.
- **Staggered Delays**: Each child button has a progressively larger `transition-delay` (0ms → 40ms → 80ms → 120ms) for a cascading feel.
- **Pulse Ring**: The main FAB has a continuous `@keyframes fab-pulse` ring animation to attract attention.
- **Icon Rotation**: The `+` icon smoothly rotates 45° to become an `×` when the menu is open.
- **Backdrop Blur Overlay**: A blurred overlay closes the menu on click-outside.

## Folder structure

```
animations/liquid-gooey-fab/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS

- Pushes pure CSS capabilities with SVG filter effects — no canvas or JavaScript for animations.
- Demonstrates staggered, spring-based motion perfectly suited to the EaseMotion design philosophy.
- Includes `prefers-reduced-motion` support for full accessibility compliance.
