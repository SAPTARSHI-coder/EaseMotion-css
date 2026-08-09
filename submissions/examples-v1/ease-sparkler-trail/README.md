# Sparkler Trail

Sparkler writing with fading trails, featuring interactive drawing with glowing sparkle particles, 8 color palettes, and fading trail effects.

## Features

- **Interactive Drawing** – Draw with sparkler on canvas
- **Fading Trails** – Trails fade away naturally
- **Sparkle Particles** – Glowing sparkles follow the trail
- **8 Color Palettes** – Gold, Rainbow, Pink, Blue, Green, Purple, White, Fire
- **Demo Drawing** – Click to draw a star pattern
- **Clear Canvas** – Remove all drawings
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – D (demo), C (clear), P (color), R (reset), SPACE (demo)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/sparkler-trail.git

2. Navigate to the project folder:
   cd sparkler-trail

3. Open demo.html in your browser

## File Structure

sparkler-trail/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Draw on canvas | Create sparkler trail |
| "Draw" | Demo star drawing |
| "Clear" | Clear all drawings |
| "Color: Gold" | Cycle through 8 color palettes |
| "Reset" | Reset to default |
| D | Demo drawing |
| C | Clear |
| P | Cycle colors |
| R | Reset |
| SPACE | Demo drawing |

### Color Palettes

1. **Gold** – Golden sparkles
2. **Rainbow** – Full spectrum
3. **Pink** – Pink sparkles
4. **Blue** – Blue sparkles
5. **Green** – Green sparkles
6. **Purple** – Purple sparkles
7. **White** – White sparkles
8. **Fire** – Fire colors

## How It Works

| Feature | Implementation |
|---------|---------------|
| Sparkler trails | Points with fading alpha |
| Sparkle particles | Glowing particles with physics |
| Color palettes | Array of colors for trails and sparkles |
| Fading | Alpha decay over time |
| Drawing | Mouse/touch event handling |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    glow: '#glowColor'
}