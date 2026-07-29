# Geometric Metamorphosis

A mesmerizing shape transformation animation where geometric shapes seamlessly morph between circle, square, triangle, star, and hexagon with smooth transitions and dynamic colors.

## Features

- **Seamless Morphing** – Smooth transitions between 5 geometric shapes
- **5 Shapes** – Circle, Square, Triangle, Star, Hexagon
- **Auto Cycling** – Automatic shape cycling with smooth transitions
- **Manual Mode** – Select specific shapes to morph to
- **8 Color Modes** – Rainbow, Ocean, Fire, Galaxy, Pastel, Neon, Monochrome, Sunset
- **4 Speeds** – Slow, Normal, Fast, Very Fast
- **Glow Effects** – Dynamic glow and shadow effects on shapes
- **Point Animation** – Individual points pulse and glow
- **Keyboard Shortcuts** – S (shape), P (speed), C (color), R (reset), SPACE (manual morph)
- **Real-time Display** – Shows current and target shapes
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Morphing algorithm)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/geometric-metamorphosis.git

2. Navigate to the project folder:
   cd geometric-metamorphosis

3. Open demo.html in your browser

## File Structure

geometric-metamorphosis/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Shape: Auto" | Cycle through Auto, Circle, Square, Triangle, Star, Hexagon |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 8 color modes |
| "Reset" | Reset to default |
| S | Cycle shape modes |
| P | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Manual morph trigger |

### Shape Modes

1. **Auto** – Automatically cycles through all shapes
2. **Circle** – Morphs to circle
3. **Square** – Morphs to square
4. **Triangle** – Morphs to triangle
5. **Star** – Morphs to star
6. **Hexagon** – Morphs to hexagon

### Color Modes

1. **Rainbow** – Full spectrum cycling
2. **Ocean** – Calm blue/teal tones
3. **Fire** – Warm red/orange tones
4. **Galaxy** – Deep purple/pink tones
5. **Pastel** – Soft gentle colors
6. **Neon** – Bright cyberpunk colors
7. **Monochrome** – Grayscale elegant
8. **Sunset** – Warm sunset colors

### Speed Options

- **Slow** – 0.004 (gentle transitions)
- **Normal** – 0.008 (balanced)
- **Fast** – 0.015 (quick transitions)
- **Very Fast** – 0.025 (rapid morphing)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Shape generation | Point-based shape generators |
| Morphing | Linear interpolation between point sets |
| Color modes | HSL color functions with position mapping |
| Animation loop | RequestAnimationFrame |
| Glow effects | Canvas shadows and radial gradients |

## Customization

### Adding Shapes

Add new shape generator function and add to `getShape()` switch:

```javascript
function getMyShapePoints(cx, cy, radius, count) {
    // Generate points for your shape
    return pts;
}