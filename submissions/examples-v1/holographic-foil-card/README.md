# Holographic Foil Card

## What it does
An interactive 3D card component that features a realistic **holographic foil overlay**. When the user hovers over the card, the card tilts along its X and Y axes depending on mouse coordinates, while a shimmering multi-colored light streak reflections overlay adjusts to the cursor's location.

## Animations & Techniques
- **3D Transforms**: Uses `perspective` on the parent container, and `preserve-3d` with dynamic `rotateX` and `rotateY` custom properties on the card wrapper to create the interactive tilt.
- **Dynamic CSS Variables**: Tracks cursor position relative to the card coordinates to update `--angle-x`, `--angle-y`, `--foil-x`, and `--foil-y` dynamically in real-time.
- **Blending Modes**: Uses `mix-blend-mode: color-dodge` to blend the shifting rainbow gradients and spotlight reflections on top of the dark artwork, creating a highly realistic shiny foil effect.
- **3D Translation of Text**: Sets `transform: translateZ(50px)` on the content details to create a parallax float above the background art.

## Folder structure
```
animations/holographic-foil-card/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS
- Perfect example of modern CSS custom properties + 3D card tilt mechanisms.
- Demonstrates advanced blending techniques (`color-dodge`, multiple overlapping gradients) to achieve physical light reflection dynamics.
- Includes full accessibility considerations (`prefers-reduced-motion` fallbacks to disable tilts for users with vestibular sensitivities).
