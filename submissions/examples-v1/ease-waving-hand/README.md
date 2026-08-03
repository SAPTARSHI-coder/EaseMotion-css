# Waving Hand

Hand waving with different speeds, featuring 6 color palettes, particle effects, and interactive controls.

## Features

- **Interactive Waving** – Toggle hand waving on/off
- **6 Color Palettes** – Skin, Blue, Green, Purple, Gold, Pink
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Animated Fingers** – Individual finger movement
- **Particle Effects** – Sparkle particles while waving
- **Glow Effects** – Dynamic glow on wave
- **Detailed Hand** – Palm, fingers, thumb, nails
- **Keyboard Shortcuts** – W (wave), S (speed), C (color), R (reset), SPACE (wave)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/waving-hand.git

2. Navigate to the project folder:
   cd waving-hand

3. Open demo.html in your browser

## File Structure

waving-hand/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Wave" | Toggle waving on/off |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Skin" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| W | Toggle wave |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Toggle wave |

### Color Palettes

1. **Skin** – Natural skin tones
2. **Blue** – Cool blue tones
3. **Green** – Natural green tones
4. **Purple** – Mystical purple tones
5. **Gold** – Golden tones
6. **Pink** – Soft pink tones

### Speed Options

- **Slow** – 0.005 (gentle wave)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick wave)
- **Very Fast** – 0.07 (rapid wave)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Hand waving | Sine wave finger movement |
| Color palettes | RGB arrays for hand parts |
| Particles | Sparkle particles on wave |
| Glow effect | Radial gradient glow |
| Speed control | Animation speed multiplier |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    palm: '#palmColor',
    finger: '#fingerColor',
    shadow: '#shadowColor',
    nail: '#nailColor',
    outline: '#outlineColor'
}