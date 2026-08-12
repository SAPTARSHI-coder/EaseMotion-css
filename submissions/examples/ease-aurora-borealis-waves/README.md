# Aurora Borealis Waves

Flowing colorful waves that ripple across the screen like the Northern Lights with multiple color palettes, speed control, and wave count options.

## Features

- **Flowing Aurora Waves** – Organic, flowing wave patterns like the Northern Lights
- **8 Color Palettes** – Aurora, Sunset, Ocean, Fire, Galaxy, Forest, Cyber, Pastel
- **Wave Count Control** – 3, 5, 7, 9, or 12 waves
- **Speed Control** – Slow, Normal, Fast, Very Fast
- **Twinkling Stars** – Starfield background with twinkling animation
- **Shimmer Particles** – Sparkling particles along the waves
- **Glow Effects** – Realistic glow and blur on wave lines
- **Keyboard Shortcuts** – C (palette), S (speed), W (waves), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/aurora-borealis-waves.git

2. Navigate to the project folder:
   cd aurora-borealis-waves

3. Open demo.html in your browser

## File Structure

aurora-borealis-waves/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Palette: Aurora" | Cycle through 8 color palettes |
| "Speed: Normal" | Cycle through 4 speeds |
| "Waves: 5" | Cycle through 3, 5, 7, 9, 12 waves |
| "Clear" | Reset animation |
| C | Cycle palettes |
| S | Cycle speeds |
| W | Cycle wave counts |
| R | Reset |

### Color Palettes

1. **Aurora** – Green/Cyan/Purple (classic Northern Lights)
2. **Sunset** – Orange/Pink/Purple (warm sunset)
3. **Ocean** – Blue/Cyan/Teal (calm ocean)
4. **Fire** – Red/Orange/Yellow (fiery)
5. **Galaxy** – Purple/Pink/Blue (cosmic)
6. **Forest** – Green/Yellow/Teal (earthy)
7. **Cyber** – Cyan/Magenta/Purple (cyberpunk)
8. **Pastel** – Soft Pink/Blue/Purple (gentle)

### Speed Options

- **Slow** – 0.008 (gentle, meditative)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (energetic)
- **Very Fast** – 0.07 (dramatic)

### Wave Options

- **3 waves** – Simple, minimal
- **5 waves** – Balanced
- **7 waves** – Rich, detailed
- **9 waves** – Dense, complex
- **12 waves** – Maximum density

## How It Works

| Feature | Implementation |
|---------|---------------|
| Wave generation | Sine waves with multiple frequencies |
| Color blending | Interpolation between palette colors |
| Glow effects | Radial gradients and shadow blur |
| Star twinkling | Sine wave opacity modulation |
| Shimmer particles | Random particles along wave path |
| Animation loop | RequestAnimationFrame |

## Customization

### Adding Color Palettes

Add to the `palettes` array:

```javascript
const palettes = [
    { 
        name: 'MyPalette',
        colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
        bg: '#backgroundcolor'
    },
];