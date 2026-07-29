# Magic Wand Sparkle

Wand with trailing sparkles and glow, featuring interactive waving, 6 color palettes, particle effects, and magical animations.

## Features

- **Interactive Waving** – Click to wave the wand
- **Trailing Sparkles** – Sparkle particles follow wand motion
- **6 Color Palettes** – Rainbow, Gold, Blue, Pink, Green, Purple
- **Particle Effects** – Star and circle sparkles
- **Glow Effects** – Radiant glow from wand tip
- **Glow Particles** – Floating glow particles
- **Magical Animation** – Smooth wand waving motion
- **Keyboard Shortcuts** – W (wave), C (color), R (reset), SPACE (wave)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/magic-wand-sparkle.git

2. Navigate to the project folder:
   cd magic-wand-sparkle

3. Open demo.html in your browser

## File Structure

magic-wand-sparkle/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Wave wand |
| "Wave" | Wave wand |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| W | Wave |
| C | Cycle colors |
| R | Reset |
| SPACE | Wave |

### Color Palettes

1. **Rainbow** – Colorful sparkles
2. **Gold** – Golden sparkles
3. **Blue** – Blue sparkles
4. **Pink** – Pink sparkles
5. **Green** – Green sparkles
6. **Purple** – Purple sparkles

## How It Works

| Feature | Implementation |
|---------|---------------|
| Wand waving | Angle animation with sine wave |
| Sparkles | Particle system with star/circle shapes |
| Glow effects | Radial gradients with alpha |
| Color palettes | HSL functions with time |
| Particles | Gravity and fade physics |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    sparkle: (t) => `hsl(${value}, 100%, ${light}%)`,
    glow: '#glowColor',
    trail: '#trailColor'
}