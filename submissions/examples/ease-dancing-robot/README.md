# Dancing Robot

Robot with dancing limbs to the beat, featuring multiple dance moves, color palettes, speed control, and particle effects.

## Features

- **Dance Moves** – 5 different dance styles (Wave, Robot, Flail, Bounce, Spinning)
- **6 Color Palettes** – Rainbow, Metallic, Neon, Retro, Ocean, Galaxy
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Animated Limbs** – Arms and legs move to the beat
- **Particle Effects** – Glow particles while dancing
- **Idle Animation** – Gentle sway when not dancing
- **LED Details** – Chest light, antenna glow, smile
- **Keyboard Shortcuts** – D (dance), S (speed), C (color), R (reset), SPACE (dance)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D rendering with gradients and shadows)
- Vanilla JavaScript (Animation loop, Dance engine)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/dancing-robot.git

2. Navigate to the project folder:
   cd dancing-robot

3. Open demo.html in your browser

## File Structure

dancing-robot/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Dance" | Start/Stop dancing |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| D | Toggle dance |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Toggle dance |

### Color Palettes

1. **Rainbow** – Colorful robot
2. **Metallic** – Silver/steel tones
3. **Neon** – Bright neon colors
4. **Retro** – Classic retro colors
5. **Ocean** – Blue ocean tones
6. **Galaxy** – Purple cosmic tones

### Speed Options

- **Slow** – 0.008 (gentle moves)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick moves)
- **Very Fast** – 0.07 (rapid moves)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Dance moves | Random move generator with timing |
| Limbs | Rotating arm/leg joints |
| Color palettes | RGB arrays for body parts |
| Particles | Glow particles on dance |
| Idle | Gentle sine wave sway |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    body: '#bodyColor',
    accent: '#accentColor',
    highlight: '#highlightColor',
    glow: '#glowColor'
}