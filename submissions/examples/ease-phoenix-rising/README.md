# Phoenix Rising

Bird made of fire rising from ashes, featuring animated phoenix with wings, tail, flames, and 6 color palettes.

## Features

- **Phoenix Animation** – Bird rises from ashes with fire effects
- **Wings and Tail** – Animated wings and tail feathers
- **Flame Particles** – Glowing fire particles during rise
- **6 Color Palettes** – Fire, Ice, Galaxy, Rainbow, Sunset, Emerald
- **Ash Particles** – Floating ash before rising
- **Glow Effects** – Radiant glow on phoenix
- **Keyboard Shortcuts** – R (rise), C (color), X (reset), SPACE (rise)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/phoenix-rising.git

2. Navigate to the project folder:
   cd phoenix-rising

3. Open demo.html in your browser

## File Structure

phoenix-rising/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Rise phoenix |
| "Rise" | Rise phoenix from ashes |
| "Color: Fire" | Cycle through 6 color palettes |
| "Reset" | Reset to ashes |
| R | Rise |
| C | Cycle colors |
| X | Reset |
| SPACE | Rise |

### Color Palettes

1. **Fire** – Red/orange/gold tones
2. **Ice** – Blue/cyan tones
3. **Galaxy** – Purple cosmic tones
4. **Rainbow** – Full spectrum
5. **Sunset** – Warm sunset tones
6. **Emerald** – Green tones

## How It Works

| Feature | Implementation |
|---------|---------------|
| Phoenix body | Canvas drawing with gradients |
| Wings | Animated feather shapes |
| Flames | Particle system with physics |
| Ashes | Floating ash particles |
| Color palettes | Gradient-based coloring |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5', '#color6', '#color7'],
    glow: '#glowColor',
    ash: '#ashColor'
}