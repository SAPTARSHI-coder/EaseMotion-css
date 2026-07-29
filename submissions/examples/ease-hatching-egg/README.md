# Hatching Egg

Egg cracking with emerging creature, featuring animated hatching process, 6 color palettes, particle effects, and interactive controls.

## Features

- **Hatching Animation** – Egg cracks and creature emerges
- **6 Color Palettes** – Rainbow, Dragon, Ice, Cosmic, Golden, Nature
- **Emerging Creature** – Dragon-like creature with wings, tail, and eyes
- **Particle Effects** – Glow particles and sparkles during hatching
- **Egg Cracking** – Dynamic crack lines and egg pieces
- **Glow Effects** – Radiant glow from egg and creature
- **Creature Animation** – Bouncing, wing flapping, eye movement
- **Shake Effect** – Screen shake during hatching
- **Keyboard Shortcuts** – H (hatch), C (color), R (reset), SPACE (hatch)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/hatching-egg.git

2. Navigate to the project folder:
   cd hatching-egg

3. Open demo.html in your browser

## File Structure

hatching-egg/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click egg | Start hatching |
| "Hatch" | Start hatching |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| H | Hatch |
| C | Cycle colors |
| R | Reset |
| SPACE | Hatch |

### Color Palettes

1. **Rainbow** – Colorful egg and creature
2. **Dragon** – Red/orange dragon theme
3. **Ice** – Blue/cyan ice theme
4. **Cosmic** – Purple cosmic theme
5. **Golden** – Golden theme
6. **Nature** – Green nature theme

## How It Works

| Feature | Implementation |
|---------|---------------|
| Hatching | Progressive animation with particles |
| Egg cracking | Dynamic crack lines and pieces |
| Creature | Animated dragon with wings |
| Color palettes | RGB arrays for egg and creature |
| Particles | Glow and sparkle effects |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    egg: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    creature: '#creatureColor',
    glow: '#glowColor'
}