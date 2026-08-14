# Marble Run

Marbles rolling through interactive tracks with physics, color customization, and interactive controls.

## Features

- **Rolling Marbles** – Marbles roll along winding tracks
- **6 Count Options** – 5, 10, 15, 20, 30, 50 marbles
- **7 Color Palettes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **Winding Tracks** – Continuous looping track path
- **Marble Trails** – Smooth trailing motion
- **Glow Effects** – Dynamic glow on marbles
- **Drop Marbles** – Click to drop new marbles
- **Looping Track** – Marbles loop continuously
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – D (drop), C (count), P (color), R (reset), SPACE (drop)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/marble-run.git

2. Navigate to the project folder:
   cd marble-run

3. Open demo.html in your browser

## File Structure

marble-run/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Drop marble |
| "Drop Marble" | Drop a new marble |
| "Count: 10" | Cycle through 6 count options |
| "Color: Rainbow" | Cycle through 7 color palettes |
| "Reset" | Reset all marbles |
| D | Drop marble |
| C | Cycle counts |
| P | Cycle colors |
| R | Reset |
| SPACE | Drop marble |

### Count Options

- **5** – Small run
- **10** – Medium run (default)
- **15** – Balanced run
- **20** – Full run
- **30** – Dense run
- **50** – Maximum run

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors
7. **Monochrome** – Grayscale elegant

## How It Works

| Feature | Implementation |
|---------|---------------|
| Track path | Winding path with points |
| Marble movement | Position-based on track |
| Color modes | HSL functions with position/time |
| Trails | Position history with alpha |
| Looping | Continuous track loop |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fn: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}