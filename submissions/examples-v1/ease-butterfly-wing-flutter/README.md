# Butterfly Wing Flutter

Symmetrical patterns that open and close like butterfly wings with multiple wing patterns, flapping animation, and particle effects.

## Features

- **Wing Flapping** – Smooth wing opening and closing animation
- **8 Wing Patterns** – Monarch, Blue Morpho, Rainbow, Glasswing, Sunset, Galaxy, Neon, Nature
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Symmetrical Wings** – Perfect mirror symmetry with detailed patterns
- **Wing Veins** – Detailed vein patterns on wings
- **Spots and Markings** – Pattern-specific wing markings
- **Particle Effects** – Floating particles around the butterfly
- **Body and Antennae** – Detailed butterfly body with animated antennae
- **Keyboard Shortcuts** – F (flap), S (speed), P (pattern), R (reset), SPACE (toggle flap)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients, shadows, and clipping)
- Vanilla JavaScript (Animation loop, Pattern generation)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/butterfly-wing-flutter.git

2. Navigate to the project folder:
   cd butterfly-wing-flutter

3. Open demo.html in your browser

## File Structure

butterfly-wing-flutter/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Flap" | Start/stop wing flapping |
| "Speed: Normal" | Cycle through 4 speeds |
| "Pattern: Monarch" | Cycle through 8 wing patterns |
| "Reset" | Reset to default |
| F | Toggle flap |
| S | Cycle speeds |
| P | Cycle patterns |
| R | Reset |
| SPACE | Toggle flap |

### Wing Patterns

1. **Monarch** – Orange/black with white spots
2. **Blue Morpho** – Brilliant blue with dark borders
3. **Rainbow** – Full spectrum rainbow colors
4. **Glasswing** – Transparent with delicate patterns
5. **Sunset** – Warm sunset orange/yellow
6. **Galaxy** – Deep purple/pink cosmic colors
7. **Neon** – Bright neon colors
8. **Nature** – Earthy green/brown tones

### Speed Options

- **Slow** – 0.008 (gentle flutter)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick flutter)
- **Very Fast** – 0.07 (rapid flutter)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Wing flapping | Sine wave angle interpolation |
| Wing patterns | Pre-defined color arrays and shapes |
| Symmetry | Mirror drawing on both sides |
| Veins | Radiating line patterns |
| Spots | Circular markings on wings |

## Customization

### Adding Wing Patterns

Add to `patterns` array:

```javascript
{
    name: 'MyPattern',
    colors: ['#color1', '#color2', '#color3', '#color4'],
    wingShape: 'rounded', // 'rounded', 'pointed', 'delicate'
    spots: true,
    spotColor: '#ffffff',
    borderColor: '#1a1a1a'
}