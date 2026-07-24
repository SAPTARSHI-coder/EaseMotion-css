# Oil Spill Rainbow

Iridescent oil spreading with rainbow colors, featuring dynamic oil particles, rainbow ripples, and interactive spreading effects.

## Features

- **Oil Spreading** – Iridescent oil particles spread outward
- **Rainbow Colors** – Full spectrum color shifting on oil droplets
- **Ripple Effects** – Expanding rainbow ripples on spill
- **Particle System** – 50+ oil droplets with organic movement
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Glow Effects** – Radiant glow on oil particles
- **Trail Effects** – Smooth trailing motion
- **Interactive Spill** – Click or press SPACE to spill
- **Keyboard Shortcuts** – S (spill), R (reset), SPACE (spill)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/oil-spill-rainbow.git

2. Navigate to the project folder:
   cd oil-spill-rainbow

3. Open demo.html in your browser

## File Structure

oil-spill-rainbow/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Spill oil |
| "Spill" | Spill oil with rainbow effect |
| "Speed: Normal" | Cycle through 4 speeds |
| "Reset" | Reset to default |
| S | Spill oil |
| R | Reset |
| SPACE | Spill oil |

### Speed Options

- **Slow** – 0.005 (gentle spreading)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick spreading)
- **Very Fast** – 0.07 (rapid spreading)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Oil particles | Dynamic particles with color shifting |
| Rainbow colors | HSL-based hue shifting with time |
| Ripples | Expanding ring animations |
| Spreading | Particle outward motion with wobble |
| Glow effects | Radial gradients with alpha |

## Customization

### Particle Count

Modify in `spillOil()`:
```javascript
const numParticles = 50 + Math.floor(Math.random() * 50); // Adjust