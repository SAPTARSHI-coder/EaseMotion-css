# Underwater Caustics

Light patterns rippling on underwater surfaces, featuring dynamic caustic light patterns, 7 color palettes, speed control, and organic movement.

## Features

- **Dynamic Caustics** – Light patterns ripple and flow underwater
- **30+ Light Particles** – Organic caustic patterns with movement
- **7 Color Palettes** – Ocean, Sunset, Emerald, Galaxy, Rainbow, Pastel, Neon
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Organic Movement** – Wobbling, pulsing, and drifting patterns
- **Depth Sorting** – Caustics rendered by intensity
- **Glow Effects** – Radiant glow on light patterns
- **Keyboard Shortcuts** – S (speed), C (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/underwater-caustics.git

2. Navigate to the project folder:
   cd underwater-caustics

3. Open demo.html in your browser

## File Structure

underwater-caustics/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Ocean" | Cycle through 7 color palettes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |

### Color Palettes

1. **Ocean** – Blue ocean tones
2. **Sunset** – Warm sunset tones
3. **Emerald** – Green emerald tones
4. **Galaxy** – Cosmic purple tones
5. **Rainbow** – Full spectrum
6. **Pastel** – Soft gentle colors
7. **Neon** – Bright neon colors

### Speed Options

- **Slow** – 0.005 (gentle ripples)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick ripples)
- **Very Fast** – 0.07 (rapid ripples)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Caustic patterns | Organic shapes with wobble and pulse |
| Movement | Drift, rotation, and phase shifting |
| Color palettes | Gradient-based light coloring |
| Depth sorting | Intensity-based rendering order |
| Glow effects | Radial gradients with alpha |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5', '#color6'],
    bg: '#backgroundColor'
}