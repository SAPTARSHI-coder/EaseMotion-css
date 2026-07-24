# Water Surface Ripple

Interactive ripples with reflections and distortion on a dynamic water surface with multiple color palettes and intensity control.

## Features

- **Interactive Ripples** – Click or drag to create realistic water ripples
- **Real-time Distortion** – Ripples distort the water surface
- **Reflections** – Dynamic light reflections on the water
- **6 Color Palettes** – Ocean, Sunset, Emerald, Galaxy, Fire, Pastel
- **4 Intensity Levels** – Light, Medium, Strong, Extreme
- **Ripple Propagation** – Ripples expand and fade naturally
- **Highlight Effects** – Light highlights on ripple peaks
- **Mouse Interaction** – Hover creates gentle ripples
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – R (ripple), I (intensity), C (color), X (reset), SPACE (ripple)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with pixel manipulation)
- Vanilla JavaScript (Wave simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/water-surface-ripple.git

2. Navigate to the project folder:
   cd water-surface-ripple

3. Open demo.html in your browser

## File Structure

water-surface-ripple/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click/drag canvas | Create ripples |
| "Ripple" | Create random ripple |
| "Intensity: Medium" | Cycle through 4 intensity levels |
| "Color: Ocean" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| R | Create ripple |
| I | Cycle intensities |
| C | Cycle colors |
| X | Reset |
| SPACE | Create ripple |

### Color Palettes

1. **Ocean** – Blue/teal tones
2. **Sunset** – Warm orange/yellow tones
3. **Emerald** – Green/teal tones
4. **Galaxy** – Purple/pink cosmic tones
5. **Fire** – Red/orange/yellow tones
6. **Pastel** – Soft gentle colors

### Intensity Levels

- **Light** – 15 (gentle ripples)
- **Medium** – 30 (balanced)
- **Strong** – 50 (pronounced ripples)
- **Extreme** – 80 (dramatic ripples)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Ripple physics | Wave propagation with decay |
| Water distortion | Height map with visual displacement |
| Reflections | Dynamic light calculations |
| Color palettes | Gradient-based water coloring |
| Interaction | Mouse/touch event handling |

## Customization

### Adding Color Palettes

Add to `colorModes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5', '#color6'],
    reflection: '#reflectionColor'
}