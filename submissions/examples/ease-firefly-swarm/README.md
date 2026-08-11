# Firefly Swarm

Bioluminescent particles that follow random paths with glowing trails, creating a magical firefly swarm effect with customizable count, speed, and colors.

## Features

- **Swarm Behavior** – Fireflies follow random paths with organic movement
- **Glowing Trails** – Each firefly leaves a luminous trail behind
- **6 Color Palettes** – Warm, Cool, Green, Purple, Pink, Rainbow
- **6 Count Options** – 20, 35, 50, 75, 100, 150 fireflies
- **4 Speeds** – Slow, Normal, Fast, Very Fast
- **Connecting Lines** – Subtle lines between nearby fireflies
- **Glow Intensity** – Individual fireflies pulse with different brightness
- **Wing Effect** – Subtle wing animation on each firefly
- **Forest Background** – Dark forest environment with grass hints
- **Keyboard Shortcuts** – F (count), S (speed), C (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/firefly-swarm.git

2. Navigate to the project folder:
   cd firefly-swarm

3. Open demo.html in your browser

## File Structure

firefly-swarm/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Count: 50" | Cycle through 20, 35, 50, 75, 100, 150 fireflies |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Warm" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| F | Cycle counts |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |

### Color Palettes

1. **Warm** – Orange/Yellow/Gold (firefly-like)
2. **Cool** – Blue/Cyan (mystical)
3. **Green** – Neon Green (bioluminescent)
4. **Purple** – Violet/Purple (magical)
5. **Pink** – Pink/Rose (romantic)
6. **Rainbow** – Full spectrum (colorful)

### Speed Options

- **Slow** – 0.008 (gentle, meditative)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.035 (energetic)
- **Very Fast** – 0.055 (rapid movement)

### Count Options

- **20** – Sparse, intimate
- **35** – Light swarm
- **50** – Balanced swarm (default)
- **75** – Dense swarm
- **100** – Heavy swarm
- **150** – Maximum density

## How It Works

| Feature | Implementation |
|---------|---------------|
| Swarm behavior | Random target points with smooth pursuit |
| Glowing trails | Trail array with decreasing alpha |
| Color palettes | Array of color sets with glow color |
| Pulse animation | Sine wave on glow intensity |
| Wing effect | Ellipses with phase-based rotation |
| Connecting lines | Distance-based line drawing |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
const colorPalettes = [
    { 
        name: 'MyPalette', 
        colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
        glow: '#glowColor'
    },
];