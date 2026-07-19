# Particle Orbit Loader

## What it does
A **CSS-only loading spinner** with colored particles orbiting a pulsing central core on two counter-rotating rings.

## Animations & Techniques
- **Orbit spin**: Parent ring rotates; child particles stay at fixed positions creating orbit illusion.
- **Counter-rotation**: Inner ring spins reverse for visual complexity.
- **Core pulse**: Central dot scales with glow shadow pulse.

## Folder structure
```
animations/particle-orbit-loader/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Zero-JS loading indicator using nested `rotate` animations — composable and accessible with `role="status"`.
