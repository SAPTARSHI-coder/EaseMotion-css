# Holographic Tally Counter

A sci-fi, health & fitness inspired tally counter featuring a futuristic holographic design, neon cyan glows, glassmorphism, and dynamic spring physics interactions.

## Features

- **Holographic Aesthetics**: Utilizes deep cyans, heavy text shadows, and backdrop blurs to create a HUD-like sci-fi interface.
- **Scanner Effect**: A pure CSS infinite scanner line sweeps across the component using `@keyframes` and a gradient mask.
- **Spring Physics**: Buttons scale dramatically using the signature EaseMotion `cubic-bezier(0.34, 1.56, 0.64, 1)` for snappy, tactile feedback.
- **Glitch Animation**: Includes an optional CSS glitch animation triggered on value updates for extra cyber/fitness flair.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML as shown in `demo.html`.

## Usage

```html
<div class="ease-holographic-tally">
    <button class="ease-holo-btn" onclick="updateCounter(-100)">-</button>
    <div class="ease-holo-display" id="counter">8400</div>
    <button class="ease-holo-btn" onclick="updateCounter(100)">+</button>
</div>
```

## Why it fits EaseMotion CSS

- **Bold Visuals**: Moves beyond standard flat counters into a highly stylized, engaging fitness/HUD UI space.
- **Micro-Interactions**: Hovering and clicking the buttons triggers glowing radial gradients and satisfying bouncy physics.
- **Modular**: The CSS variables (`--ease-holo-cyan`, etc.) allow easy theming to match different brand colors (like orange for workout intensity, or green for health).
