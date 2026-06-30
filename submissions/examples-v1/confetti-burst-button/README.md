# CSS-Only Confetti Burst Button

## What it does

A premium button that **explodes confetti particles** on click using pure CSS `@keyframes`. Each particle flies in a different direction with a unique color, shape (square/circle/rectangle), rotation speed, and delay — creating a full celebration effect on form submission or action success.

## Animations & Techniques

- **Multi-directional Burst Keyframes**: 8 unique `@keyframes` (burst-ul, burst-up, burst-ur, burst-right, burst-dr, burst-down, burst-dl, burst-left) define particle trajectories from the button center outward.
- **CSS Class Toggle**: JavaScript only adds a `.burst` class — CSS handles all particle animation timing.
- **Springy Button Pop**: On burst, the button itself plays `@keyframes btn-pop` with a cubic-bezier overshoot `(0.34, 1.56, 0.64, 1)`.
- **Shine Sweep**: A white diagonal highlight slides across the button on hover using `@keyframes shine-sweep`.
- **Success State**: After 300ms, a `.success` class changes the gradient to green and swaps the label text — no extra JavaScript.
- **Staggered particle delays**: Each particle has a `0–80ms` unique `animation-delay` for a natural, non-synchronized burst.

## Folder structure

```
animations/confetti-burst-button/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS

- Showcases one of the most delightful micro-interactions possible in pure CSS.
- Demonstrates the power of CSS class-driven animation orchestration.
- Includes `prefers-reduced-motion` support.
