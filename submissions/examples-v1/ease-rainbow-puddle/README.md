# Rainbow Puddle

Colorful reflections in a puddle with ripples, shimmer particles, and 6 color palettes.

## Features

- **Rainbow Reflections** – Colorful light reflections in puddle
- **Ripple Effects** – Click to create expanding ripples
- **6 Color Palettes** – Rainbow, Sunset, Ocean, Galaxy, Pastel, Neon
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Reflection Particles** – Floating colorful reflections
- **Shimmer Particles** – Twinkling light particles
- **Puddle Detail** – Realistic puddle with edge and glow
- **Keyboard Shortcuts** – R (ripple), S (speed), C (color), X (reset), SPACE (ripple)
- **FPS Counter** – Real-time frame rate display- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle systems, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/rainbow-puddle.git

2. Navigate to the project folder:
   cd rainbow-puddle

3. Open demo.html in your browser

## File Structure

rainbow-puddle/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Create ripple |
| "Ripple" | Create random ripple |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| R | Create ripple |
| S | Cycle speeds |
| C | Cycle colors |
| X | Reset |
| SPACE | Create ripple |

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Sunset** – Warm sunset tones
3. **Ocean** – Blue ocean tones
4. **Galaxy** – Cosmic purple tones
5. **Pastel** – Soft gentle colors
6. **Neon** – Bright neon colors

### Speed Options

- **Slow** – 0.005 (gentle ripples)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick ripples)
- **Very Fast** – 0.07 (rapid ripples)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Rainbow reflections | HSL color shifting |
| Ripples | Expanding ring animations |
| Particles | Floating reflection particles |
| Shimmer | Twinkling light particles |
| Color palettes | Gradient-based coloring |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5', '#color6'],
    bg: '#backgroundColor'
}