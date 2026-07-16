# Candle Flame Dance

Flickering candle with wax drip animation, featuring realistic flame physics, wax drips, spark particles, and interactive blow control.

## Features

- **Flickering Flame** – Realistic flame with dance animation
- **Wax Drips** – Animated wax dripping down the candle
- **6 Color Palettes** – Warm, Blue, Purple, Green, Pink, Gold
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Blow Interaction** – Blow on candle to make it flicker
- **Spark Particles** – Ember sparks from flame
- **Glow Effects** – Warm ambient glow
- **Candle Details** – Wick, melted wax pool, ridges
- **Keyboard Shortcuts** – B (blow), S (speed), C (color), R (reset), SPACE (blow)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle systems, Physics simulation)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/candle-flame-dance.git

2. Navigate to the project folder:
   cd candle-flame-dance

3. Open demo.html in your browser

## File Structure

candle-flame-dance/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click candle | Blow on flame |
| "Blow" | Blow on flame |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Warm" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| B | Blow |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Blow |

### Color Palettes

1. **Warm** – Warm orange/red tones
2. **Blue** – Cool blue tones
3. **Purple** – Mystical purple tones
4. **Green** – Natural green tones
5. **Pink** – Soft pink tones
6. **Gold** – Golden tones

### Speed Options

- **Slow** – 0.005 (gentle flicker)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick flicker)
- **Very Fast** – 0.07 (rapid flicker)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Flame animation | Particle system with flicker physics |
| Wax drips | Gravity-based drip animation |
| Blow effect | Flame distortion and particle burst |
| Color palettes | Gradient-based flame coloring |
| Sparks | Ember particles with physics |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    flame: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    glow: '#glowColor',
    wax: '#waxColor',
    wick: '#wickColor'
}