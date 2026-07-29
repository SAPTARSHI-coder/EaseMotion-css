# Alien Creature

Glowing alien with tentacles and blinking eyes, featuring organic tentacle movement, 6 color palettes, and interactive controls.

## Features

- **Glowing Alien** – Bioluminescent alien with glow effects
- **Tentacles** – Organic tentacles with suction cups
- **Blinking Eyes** – Auto-blink every few seconds
- **6 Color Palettes** – Green, Purple, Blue, Red, Gold, White
- **Animated Features** – Head bob, eye tracking, mouth opening
- **Particle Effects** – Glow particles floating around
- **Antennae** – Animated antennae with glowing tips
- **Keyboard Shortcuts** – B (blink), C (color), R (reset), SPACE (blink)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/alien-creature.git

2. Navigate to the project folder:
   cd alien-creature

3. Open demo.html in your browser

## File Structure

alien-creature/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click alien | Blink |
| "Blink" | Manual blink |
| "Color: Green" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| B | Blink |
| C | Cycle colors |
| R | Reset |
| SPACE | Blink |

### Color Palettes

1. **Green** – Classic alien green
2. **Purple** – Mystical purple
3. **Blue** – Cool blue
4. **Red** – Red alien
5. **Gold** – Golden alien
6. **White** – White alien

## How It Works

| Feature | Implementation |
|---------|---------------|
| Tentacles | Segmented points with wave motion |
| Blinking | Eye scale animation |
| Glow | Radial gradients with alpha |
| Color palettes | RGB arrays for body parts |
| Particles | Floating glow particles |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyColor',
    body: '#bodyColor',
    glow: '#glowColor',
    eye: '#eyeColor',
    pupil: '#pupilColor',
    tentacle: '#tentacleColor',
    accent: '#accentColor'
}