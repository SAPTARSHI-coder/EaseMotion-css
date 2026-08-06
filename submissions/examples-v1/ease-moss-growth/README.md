# Moss Growth

Green patches that slowly spread like moss on surfaces with organic growth, spore dispersal, and interactive painting.

## Features

- **Organic Growth** – Moss patches grow and spread naturally
- **Spore Dispersal** – Mature moss releases spores that create new patches
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **4 Density Options** – Sparse, Medium, Dense, Lush
- **Interactive Painting** – Click and drag to paint moss
- **Spawning** – Click to spawn new moss patches
- **Organic Shapes** – Irregular, natural-looking moss blobs
- **Texture Details** – Moss with texture dots and highlights
- **Spore Particles** – Floating spores that spread moss
- **Keyboard Shortcuts** – S (spawn), P (speed), D (density), R (reset), SPACE (spawn)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Growth simulation)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/moss-growth.git

2. Navigate to the project folder:
   cd moss-growth

3. Open demo.html in your browser

## File Structure

moss-growth/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Spawn" | Spawn new moss patches |
| "Speed: Normal" | Cycle through 4 speeds |
| "Density: Medium" | Cycle through 4 density options |
| "Reset" | Reset to initial state |
| Click/drag canvas | Paint moss |
| S | Spawn moss |
| P | Cycle speeds |
| D | Cycle densities |
| R | Reset |
| SPACE | Spawn moss |

### Speed Options

- **Slow** – 0.005 (gentle growth)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick growth)
- **Very Fast** – 0.07 (rapid growth)

### Density Options

- **Sparse** – 0.5 (less moss)
- **Medium** – 1 (balanced)
- **Dense** – 1.5 (more moss)
- **Lush** – 2 (maximum moss)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Moss growth | Particles with growth and spawning |
| Spore dispersal | Floating spores from mature moss |
| Organic shapes | Irregular blobs with texture |
| Painting | Click/drag to place moss |
| Density | Multiplier on growth and spawning |

## Customization

### Speed Values

Modify in `speeds` array:
```javascript
const speeds = [
    { name: 'Custom', value: 0.03 },
];