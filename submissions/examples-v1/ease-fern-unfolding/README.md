# Fern Unfolding

Fern frond unfurling with spiral motion, featuring organic growth animation, branching fronds, leaflets, and 6 color palettes.

## Features

- **Organic Unfolding** – Fern frond unfurls with spiral motion
- **Branching Fronds** – Recursive branching for natural fern structure
- **Leaflets (Pinnae)** – Detailed leaflets along each frond
- **Fiddlehead Curl** – Spiral tip that unfurls first
- **6 Color Palettes** – Green, Golden, Blue, Purple, Red, Rainbow
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Particle Effects** – Glowing particles during unfolding
- **Recursive Growth** – Natural branching pattern
- **Keyboard Shortcuts** – U (unfold), S (speed), C (color), R (reset), SPACE (unfold)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Recursive tree structure, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/fern-unfolding.git

2. Navigate to the project folder:
   cd fern-unfolding

3. Open demo.html in your browser

## File Structure

fern-unfolding/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Unfold fern |
| "Unfold" | Start unfolding animation |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Green" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| U | Unfold |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Unfold |

### Color Palettes

1. **Green** – Natural green tones
2. **Golden** – Warm golden tones
3. **Blue** – Cool blue tones
4. **Purple** – Mystical purple tones
5. **Red** – Red tones
6. **Rainbow** – Full spectrum

### Speed Options

- **Slow** – 0.005 (gentle unfolding)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick unfolding)
- **Very Fast** – 0.07 (rapid unfolding)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Fern growth | Recursive tree structure |
| Spiral motion | Sine wave angle modulation |
| Leaflets | Quadratic bezier shapes |
| Color palettes | HSL functions with position/time |
| Unfolding | Progressive growth animation |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    stem: '#stemColor',
    leaf: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    tip: '#tipColor'
}