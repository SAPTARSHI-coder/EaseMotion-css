# Physics Sandbox

Falling sand particles with interactive barriers, multiple brush types, colors, and sizes for creative sand physics simulation.

## Features

- **Sand Physics** – Realistic falling sand with gravity
- **5 Brush Types** – Circle, Square, Line, Spray, Eraser
- **4 Brush Sizes** – Small, Medium, Large, Huge
- **8 Color Palettes** – Sand, Rainbow, Ocean, Fire, Galaxy, Neon, Pastel, Monochrome
- **Interactive Barriers** – Place barriers that sand piles against
- **Real-time Physics** – Sand falls and settles naturally
- **Pixel-based Rendering** – Detailed sand grain simulation
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – B (brush), S (size), C (color), X (clear), SPACE (barrier)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with pixel manipulation)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/physics-sandbox.git

2. Navigate to the project folder:
   cd physics-sandbox

3. Open demo.html in your browser

## File Structure

physics-sandbox/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click/drag canvas | Paint sand |
| "Brush: Circle" | Cycle through 5 brush types |
| "Size: Medium" | Cycle through 4 sizes |
| "Color: Sand" | Cycle through 8 color palettes |
| "Clear" | Clear all sand |
| B | Cycle brushes |
| S | Cycle sizes |
| C | Cycle colors |
| X | Clear |
| SPACE | Place random barrier |

### Brush Types

1. **Circle** – Round brush
2. **Square** – Square brush
3. **Line** – Wavy line brush
4. **Spray** – Spray paint effect
5. **Eraser** – Remove sand

### Color Palettes

1. **Sand** – Natural sand colors
2. **Rainbow** – Full spectrum
3. **Ocean** – Blue/teal tones
4. **Fire** – Red/orange tones
5. **Galaxy** – Purple/pink tones
6. **Neon** – Bright neon colors
7. **Pastel** – Soft gentle colors
8. **Monochrome** – Grayscale

### Brush Sizes

- **Small** – 1x size
- **Medium** – 2x size
- **Large** – 3x size
- **Huge** – 5x size

## How It Works

| Feature | Implementation |
|---------|---------------|
| Sand physics | Grid-based falling with gravity |
| Barriers | Immovable grid cells |
| Brush painting | Cell-based painting with patterns |
| Colors | Palette-based color mapping |
| Rendering | Pixel-level canvas rendering |

## Customization

### Adding Color Palettes

Add to `colorModes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5']
}