# Fish Swimming

Fish swimming in circle with fluid motion, featuring multiple fish with orbit movement, color palettes, and bubble effects.

## Features

- **Fluid Motion** – Fish swim in circular orbits with smooth animation
- **Multiple Fish** – Add up to many fish swimming together
- **6 Color Palettes** – Rainbow, Ocean, Tropical, Galaxy, Neon, Pastel
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Bubble Effects** – Fish emit bubbles while swimming
- **Detailed Design** – Fish with eyes, fins, tail, and scales
- **Trail Effects** – Smooth trailing motion
- **Glow Effects** – Dynamic glow on fish
- **Underwater Atmosphere** – Water gradient, light rays, seaweed
- **Keyboard Shortcuts** – A (add), S (speed), C (color), R (reset), SPACE (add)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/fish-swimming.git

2. Navigate to the project folder:
   cd fish-swimming

3. Open demo.html in your browser

## File Structure

fish-swimming/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Add Fish" | Add a new fish |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| A | Add fish |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Add fish |

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Tropical** – Warm tropical tones
4. **Galaxy** – Purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors

### Speed Options

- **Slow** – 0.005 (gentle swimming)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick swimming)
- **Very Fast** – 0.07 (rapid swimming)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Orbit motion | Circular path with oscillation |
| Fish design | Canvas drawing with gradients |
| Tail animation | Sine wave wagging |
| Bubbles | Floating particle system |
| Color palettes | HSL functions with position/time |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    body: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}