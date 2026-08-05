# Morphing Liquid Blob

An organic blob shape that morphs continuously with smooth color transitions and interactive controls.

## Features

- **Continuous Morphing** – Blob shape changes smoothly with SVG path animations
- **Color Transitions** – Multiple color palettes with smooth gradient transitions
- **Interactive Controls** – Click blob for manual morph, buttons for speed/color control
- **Speed Control** – Normal, Fast, and Slow morphing speeds
- **Color Palettes** – 6 unique color schemes (Ocean Blues, Sunset Warm, Forest Greens, etc.)
- **Glow Effects** – Pulsing glow rings around the blob
- **Keyboard Shortcuts** – SPACE (morph), C (colors), S (speed), R (reset)
- **Status Display** – Shows current state and morph count
- **Responsive** – Adapts to all screen sizes
- **Zero Dependencies** – Pure CSS/HTML/JS with SVG animations

## Technologies Used

- HTML5
- CSS3 (Animations, Keyframes, Gradients, Transitions)
- SVG (Path animations with animate element)
- Vanilla JavaScript (DOM manipulation, Event handling)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/morphing-liquid-blob.git

2. Navigate to the project folder:
   cd morphing-liquid-blob

3. Open demo.html in your browser

## File Structure

morphing-liquid-blob/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click blob | Manual morph to random shape |
| "Speed: Normal" | Toggle between Normal/Fast/Slow |
| "Change Colors" | Switch to random color palette |
| "Reset" | Reset to default state |
| SPACE | Manual morph |
| C | Change colors |
| S | Toggle speed |
| R | Reset |

### Color Palettes

1. **Ocean Blues** – #4facfe, #00f2fe, #43e97b, #38f9d7
2. **Sunset Warm** – #f093fb, #f5576c, #ffecd2, #fcb69f
3. **Forest Greens** – #11998e, #38ef7d, #a8e063, #56ab2f
4. **Galaxy Purple** – #a18cd1, #fbc2eb, #f6d365, #fda085
5. **Fire & Ice** – #ff6b6b, #ffa94d, #4ecdc4, #45b7d1
6. **Candy Pop** – #ff9a9e, #fad0c4, #fbc2eb, #a18cd1

## Customization

### Adding New Shapes

Add new SVG paths to the `morphShapes` array in JavaScript:

```javascript
const morphShapes = [
    'M200,100 Q250,80 ... Z', // Your custom path
    // Add more paths
];