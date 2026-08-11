# Neon Range Slider Component

A modern, fluid input range slider showcasing advanced neon typography and pulsing ambient box-shadow glow styles built natively with pure HTML and CSS variables.

## Features

- **Pulsing Neon Visuals:** Leverages box-shadow layers paired with webkit/mozilla thumb psuedo-elements to create intense luminescence effects.
- **Micro-Interaction States:** Scale and tone transforms adapt reactively when the range input thumb is hovered or clicked.
- **Zero JS Dependency:** Operates fully inside CSS keyframe compositor schedules for low latency styling overhead.
- **Configurable Theming Tokens:** Employs standard isolated variables (`--neon-cyan`, `--neon-glow-radius`, etc.) inside the root selector for painless color swaps.

## Setup Directory

```text
neon-range-slider-ui/
├── demo.html   # Markup structure 
├── style.css   # Input thumb structural overrides & keyframe tracking
└── README.md   # Documentation