# Scratch-Off Reveal Ticket

## What it does
An interactive **scratch-off lottery ticket** built with HTML Canvas and CSS animations. The user scrapes the gold foil surface with their mouse or finger to progressively reveal the hidden prize underneath. Once 55% of the surface is cleared, the prize auto-reveals with a springy CSS entrance animation.

## Animations & Techniques
- **Canvas `destination-out` compositing**: The scratch effect uses `ctx.globalCompositeOperation = 'destination-out'` to "erase" the gold foil layer as the user drags, revealing the CSS-animated prize layer beneath.
- **Prize Pop Animation**: The prize icon uses `@keyframes prize-pop` with `cubic-bezier(0.34, 1.56, 0.64, 1)` — a springy overshoot — to bounce into view when revealed.
- **Progress Meter**: A CSS-transitioned `width` bar tracks percentage of surface uncovered in real-time via `getImageData` pixel analysis.
- **Procedural Texture**: The gold scratch surface is generated with `createLinearGradient` + random dot noise for a realistic foil appearance.
- **Touch Support**: Full `touchstart`/`touchmove` event handling for mobile scratch interaction.

## Folder structure
```
animations/scratch-off-reveal/
├── demo.html
├── style.css
└── README.md
```

## Why it fits EaseMotion CSS
- A boundary-pushing interactive demo that blends Canvas interactivity with CSS animation for the reward state.
- The CSS prize-pop animation is the centrepiece — perfectly aligned with EaseMotion's springy, organic motion philosophy.
- Includes `prefers-reduced-motion` support for the prize animation.
