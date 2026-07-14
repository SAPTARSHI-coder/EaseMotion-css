# Coral Reef Bloom

Coral branches that pulse and extend with glowing polyps, creating an underwater reef ecosystem with organic growth and bioluminescent effects.

## Features

- **Organic Growth** – Coral branches grow and extend naturally
- **Glowing Polyps** – Bioluminescent polyps with tentacles and glow
- **Branching System** – Recursive branching creates complex coral structures
- **Pulse Animation** – Coral branches pulse with life
- **Particle Effects** – Glowing particles float upward
- **6 Color Modes** – Rainbow, Ocean, Sunset, Neon, Pastel, Galaxy
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Interactive Growth** – Click to grow the coral further
- **Underwater Atmosphere** – Deep ocean background with water particles
- **Keyboard Shortcuts** – G (grow), S (speed), C (color), R (reset), SPACE (quick grow)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Recursive tree structure, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/coral-reef-bloom.git

2. Navigate to the project folder:
   cd coral-reef-bloom

3. Open demo.html in your browser

## File Structure

coral-reef-bloom/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Grow" | Extend the coral with new branches |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color modes |
| "Reset" | Reset to initial state |
| G | Grow coral |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Quick grow |

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Calm blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Neon** – Bright cyberpunk colors
5. **Pastel** – Soft gentle colors
6. **Galaxy** – Deep purple/pink tones

### Speed Options

- **Slow** – 0.002 (gentle growth)
- **Normal** – 0.005 (balanced)
- **Fast** – 0.01 (quick growth)
- **Very Fast** – 0.02 (rapid growth)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Coral growth | Recursive tree structure with branches |
| Polyp generation | Glowing polyps at branch tips |
| Pulse animation | Sine wave on size and glow |
| Branching | Random branching based on chance |
| Particles | Floating particles with upward drift |

## Customization

### Speed Values

Modify in `speeds` array:
```javascript
const speeds = [
    { name: 'Custom', value: 0.008 },
];