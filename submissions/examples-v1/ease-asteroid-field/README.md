# Asteroid Field

Rotating asteroid belt with random rocks, featuring multiple asteroids with unique shapes, 8 color palettes, speed control, and star background.

## Features

- **Rotating Asteroid Belt** – Asteroids orbit around the center
- **6 Count Options** – 20, 30, 40, 60, 80, 100 asteroids
- **8 Color Palettes** – Gray, Brown, Red, Blue, Green, Gold, Rainbow, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Unique Asteroid Shapes** – Irregular shapes with craters
- **Star Background** – Twinkling stars with parallax
- **Nebula Glow** – Subtle nebula effects
- **Depth Sorting** – Asteroids sorted by distance
- **Keyboard Shortcuts** – S (speed), C (count), P (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/asteroid-field.git

2. Navigate to the project folder:
   cd asteroid-field

3. Open demo.html in your browser

## File Structure

asteroid-field/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Count: 40" | Cycle through 6 count options |
| "Color: Gray" | Cycle through 8 color palettes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| C | Cycle counts |
| P | Cycle colors |
| R | Reset |

### Color Palettes

1. **Gray** – Classic gray rocks
2. **Brown** – Earthy brown tones
3. **Red** – Red rocks
4. **Blue** – Blue rocks
5. **Green** – Green rocks
6. **Gold** – Golden rocks
7. **Rainbow** – Colorful rocks
8. **Monochrome** – Grayscale rocks

### Speed Options

- **Slow** – 0.005 (gentle rotation)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick rotation)
- **Very Fast** – 0.07 (rapid rotation)

### Count Options

- **20** – Sparse field
- **30** – Light field
- **40** – Balanced field (default)
- **60** – Dense field
- **80** – Heavy field
- **100** – Maximum density

## How It Works

| Feature | Implementation |
|---------|---------------|
| Asteroid orbit | Circular motion around center |
| Unique shapes | Irregular polygon generation |
| Rotation | Individual asteroid spin |
| Depth sorting | Distance-based rendering order |
| Star twinkle | Sine wave brightness |

## Customization

### Adding Color Palettes

Add to `colorModes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5']
}