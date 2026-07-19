# Snake Slithering

Snake moving in S-pattern with tongue flick, featuring organic slithering motion, multiple color palettes, and interactive controls.

## Features

- **S-Pattern Motion** – Snake slithers in organic S-pattern
- **Tongue Flick** – Random tongue flicking animation
- **6 Color Palettes** – Green, Python, Coral, Blue, Gold, Rainbow
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Detailed Design** – Scales, belly, eyes, nostrils
- **Pattern Details** – Diamond scale patterns on body
- **Particle Effects** – Subtle particles while slithering
- **Body Glow** – Glowing effect on snake
- **Keyboard Shortcuts** – S (speed), C (color), R (reset), SPACE (tongue)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/snake-slithering.git

2. Navigate to the project folder:
   cd snake-slithering

3. Open demo.html in your browser

## File Structure

snake-slithering/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Green" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Toggle tongue |

### Color Palettes

1. **Green** – Classic green snake
2. **Python** – Python pattern
3. **Coral** – Red coral snake
4. **Blue** – Blue snake
5. **Gold** – Golden snake
6. **Rainbow** – Colorful rainbow snake

### Speed Options

- **Slow** – 0.005 (gentle slithering)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick slithering)
- **Very Fast** – 0.07 (rapid slithering)

## How It Works

| Feature | Implementation |
|---------|---------------|
| S-pattern | Sine wave motion along path |
| Tongue flick | Random timer with animation |
| Body segments | Points along path with width |
| Color palettes | RGB arrays for body parts |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyColor',
    body: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    belly: '#bellyColor',
    eye: '#eyeColor',
    tongue: '#tongueColor',
    pattern: '#patternColor'
}