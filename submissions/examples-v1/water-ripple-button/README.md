# Water Ripple Button

## What it does
Material Design-inspired **click ripple** that expands from the exact click coordinates using CSS `@keyframes` scale animation.

## Animations & Techniques
- **Ripple expand**: `scale(0) → scale(1)` with opacity fade-out.
- **Click-origin positioning**: JS sets ripple position; CSS handles all motion.
- **Variant styles**: Primary, outline, and circular FAB variants.

## Folder structure
```
animations/water-ripple-button/
├── demo.html
├── style.css
├── README.md
├── pr.txt
└── issue.txt
```

## Why it fits EaseMotion CSS
Classic touch feedback pattern — CSS owns the animation curve while JS only spawns positioned elements.
