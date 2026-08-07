# Breathing Flower

Flower opening and closing like breathing with organic petal animation, color palettes, and particle effects.

## Features

- **Breathing Animation** – Flower opens and closes like breathing
- **7 Color Palettes** – Pink, Rose, Sunset, Lavender, Ocean, Rainbow, Peach
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Organic Petals** – Multiple petals with natural curl and wobble
- **Stem and Leaves** – Detailed stem with leaves
- **Pollen Particles** – Floating pollen particles
- **Center Detail** – Detailed flower center with pollen dots
- **Pause/Resume** – Toggle breathing animation
- **Keyboard Shortcuts** – B (breathe), C (color), S (speed), R (reset), SPACE (breathe)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/breathing-flower.git

2. Navigate to the project folder:
   cd breathing-flower

3. Open demo.html in your browser

## File Structure

breathing-flower/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Breathe" | Toggle breathing animation |
| "Color: Pink" | Cycle through 7 color palettes |
| "Speed: Normal" | Cycle through 4 speeds |
| "Reset" | Reset to default |
| B | Toggle breathe |
| C | Cycle colors |
| S | Cycle speeds |
| R | Reset |
| SPACE | Toggle breathe |

### Color Palettes

1. **Pink** – Soft pink tones
2. **Rose** – Deep red rose tones
3. **Sunset** – Warm sunset tones
4. **Lavender** – Purple lavender tones
5. **Ocean** – Blue ocean tones
6. **Rainbow** – Full spectrum
7. **Peach** – Soft peach tones

### Speed Options

- **Slow** – 0.008 (gentle breathing)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick breathing)
- **Very Fast** – 0.07 (rapid breathing)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Breathing | Sine wave on petal size and curl |
| Petals | Bezier curves with organic wobble |
| Color palettes | RGB arrays for gradients |
| Particles | Floating pollen with gravity |
| Stem | Quadratic bezier with leaves |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    petals: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    center: ['#center1', '#center2', '#center3'],
    stem: '#stemColor',
    leaf: '#leafColor'
}