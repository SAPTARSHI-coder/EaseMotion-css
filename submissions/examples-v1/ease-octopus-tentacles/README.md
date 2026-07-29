# Octopus Tentacles

Tentacles waving with random motion, featuring multiple tentacles with organic movement, color palettes, and interactive controls.

## Features

- **Organic Motion** – Tentacles wave with random, fluid motion
- **Multiple Tentacles** – Add up to many tentacles
- **6 Color Palettes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Detailed Design** – Suction cups, glowing tips, gradients
- **Trail Effects** – Smooth trailing motion
- **Glow Effects** – Dynamic glow on tentacles
- **Wave Propagation** – Waves flow from base to tip
- **Add Tentacles** – Click to add more tentacles
- **Keyboard Shortcuts** – T (add), S (speed), C (color), R (reset), SPACE (add)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/octopus-tentacles.git

2. Navigate to the project folder:
   cd octopus-tentacles

3. Open demo.html in your browser

## File Structure

octopus-tentacles/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Add Tentacle" | Add a new tentacle |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| T | Add tentacle |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Add tentacle |

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors

### Speed Options

- **Slow** – 0.005 (gentle waving)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick waving)
- **Very Fast** – 0.07 (rapid waving)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Tentacle motion | Segmented points with wave propagation |
| Random motion | Multiple sine waves with different frequencies |
| Suction cups | Ellipses along tentacle |
| Color palettes | HSL functions with position/time |
| Trails | Position history with alpha |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fn: (t, time) => `hsl(${value}, ${sat}%, ${light}%)`
}