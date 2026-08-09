# Ink Drop Diffusion

A mesmerizing simulation of ink spreading through water with fractal-like patterns and organic particle behavior.

## Features

- **Fractal-Like Diffusion** – Ink spreads with organic, branching patterns
- **Particle System** – Hundreds of particles with trail effects
- **8 Colors** – Blue, Black, Red, Green, Purple, Orange, Cyan, Magenta
- **4 Speeds** – Slow, Normal, Fast, Very Fast
- **Trail Effects** – Particles leave fading trails behind
- **Branching** – Particles spawn smaller branches
- **Turbulence** – Organic random movement
- **Click to Drop** – Click anywhere on canvas to drop ink
- **Keyboard Shortcuts** – SPACE (drop), C (color), S (speed), X (clear)
- **Particle Counter** – Real-time particle count
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with radial gradients)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/ink-drop-diffusion.git

2. Navigate to the project folder:
   cd ink-drop-diffusion

3. Open demo.html in your browser

## File Structure

ink-drop-diffusion/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Drop ink at cursor position |
| "Drop Ink" | Drop ink at center |
| "Color: Blue" | Cycle through 8 colors |
| "Speed: Normal" | Cycle through 4 speeds |
| "Clear" | Remove all particles |
| SPACE | Drop ink at center |
| C | Cycle colors |
| S | Cycle speeds |
| X | Clear all |

### Color Options

1. **Blue** – #1a73e8
2. **Black** – #1a1a1a
3. **Red** – #d32f2f
4. **Green** – #2e7d32
5. **Purple** – #7b1fa2
6. **Orange** – #e65100
7. **Cyan** – #00838f
8. **Magenta** – #c2185b

### Speed Options

- **Slow** – 0.3 (gentle diffusion)
- **Normal** – 0.5 (balanced)
- **Fast** – 0.8 (rapid spread)
- **Very Fast** – 1.2 (explosive diffusion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Particle diffusion | Random walk with turbulence |
| Fractal patterns | Branching particle system |
| Trail effects | Array of trail positions with alpha |
| Color control | JavaScript updates particle color |
| Speed control | Multiplier on movement and branching |
| Auto-diffusion | Particles spawn branches naturally |

## Customization

### Adding Colors

Add to the `colors` array:

```javascript
const colors = [
    { name: 'MyColor', value: '#hexcode' },
];