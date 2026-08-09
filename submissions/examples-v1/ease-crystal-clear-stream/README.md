# Crystal Clear Stream

Flowing water with sparkling reflections, featuring dynamic water particles, sparkle effects, 6 color palettes, and interactive flow control.

## Features

- **Flowing Water** – Dynamic water particles with organic flow
- **Sparkling Reflections** – Twinkling star-like sparkles
- **6 Color Palettes** – Crystal, Emerald, Sunset, Galaxy, Arctic, Rainbow
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Pause/Resume** – Toggle water flow
- **Ripple Effects** – Subtle ripples on stream surface
- **Underwater Atmosphere** – Light rays and stream bed
- **Keyboard Shortcuts** – F (flow), S (speed), C (color), R (reset), SPACE (flow)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle systems, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/crystal-clear-stream.git

2. Navigate to the project folder:
   cd crystal-clear-stream

3. Open demo.html in your browser

## File Structure

crystal-clear-stream/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Flow" | Toggle water flow on/off |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Crystal" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| F | Toggle flow |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Toggle flow |

### Color Palettes

1. **Crystal** – Blue crystal tones
2. **Emerald** – Green emerald tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Cosmic purple tones
5. **Arctic** – Cool ice tones
6. **Rainbow** – Full spectrum

### Speed Options

- **Slow** – 0.005 (gentle flow)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick flow)
- **Very Fast** – 0.07 (rapid flow)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Water particles | Flow with wobble and trails |
| Sparkles | Twinkling star particles |
| Ripples | Expanding rings on surface |
| Color palettes | Gradient-based coloring |
| Flow control | Particle speed multiplier |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    water: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    sparkle: '#sparkleColor',
    glow: '#glowColor',
    bg: ['#bg1', '#bg2', '#bg3']
}