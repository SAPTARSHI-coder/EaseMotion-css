# Neon Sign Flicker

## What it does
A retro **neon OPEN sign** with realistic flicker, glow pulse, and power-off states — all driven by pure CSS `@keyframes` and `text-shadow`.

## Animations & Techniques
- **Flicker keyframes**: Random-looking opacity drops simulate faulty neon tubes.
- **Glow pulse**: `filter: brightness()` alternates for a living hum effect.
- **Hover stabilize**: Moving the pointer "fixes" the sign — brightness locks steady.
- **Power toggle**: `.is-off` class kills glow instantly via JS class toggle.

## Folder structure
```
animations/neon-sign-flicker/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Demonstrates layered `@keyframes` compositing and `text-shadow` glow stacks without canvas or SVG filters — a classic micro-interaction pattern for storefront UIs.
