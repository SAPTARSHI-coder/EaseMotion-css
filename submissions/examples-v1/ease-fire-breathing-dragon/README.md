# Fire Breathing Dragon

Dragon head with flame animation, featuring detailed dragon design, fire particle system, multiple color palettes, and interactive controls.

## Features

- **Fire Breathing** – Click to breathe fire with particle effects
- **6 Color Palettes** – Red, Green, Blue, Purple, Gold, Ice
- **Particle System** – Fire, smoke, and glow particles
- **Animated Dragon** – Blinking eyes, mouth opening, head details
- **Detailed Design** – Horns, scales, teeth, ridges, nostrils
- **Eye Glow** – Dragon eyes glow with animation
- **Fire Effects** – Realistic flame particles with trails
- **Smoke Effects** – Smoke particles from fire
- **Keyboard Shortcuts** – F (fire), C (color), R (reset), SPACE (fire)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/fire-breathing-dragon.git

2. Navigate to the project folder:
   cd fire-breathing-dragon

3. Open demo.html in your browser

## File Structure

fire-breathing-dragon/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Breathe Fire" | Dragon breathes fire |
| "Color: Red" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| F | Breathe fire |
| C | Cycle colors |
| R | Reset |
| SPACE | Breathe fire |

### Color Palettes

1. **Red** – Classic red dragon
2. **Green** – Forest green dragon
3. **Blue** – Ocean blue dragon
4. **Purple** – Mystical purple dragon
5. **Gold** – Golden dragon
6. **Ice** – Ice/frost dragon

## How It Works

| Feature | Implementation |
|---------|---------------|
| Fire particles | Particle system with physics |
| Smoke particles | Floating smoke with expansion |
| Dragon eyes | Blinking with glow effects |
| Mouth animation | Open/close with fire |
| Color palettes | Dragon color schemes |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyColor',
    dragon: '#color',
    scale: '#scaleColor',
    eye: '#eyeColor',
    fire: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    smoke: ['#color1', '#color2', '#color3'],
    glow: '#glowColor'
}