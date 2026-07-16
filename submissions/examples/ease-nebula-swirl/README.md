# Nebula Swirl

Colorful gas clouds rotating slowly with 2000+ particles, 7 color palettes, speed control, and mesmerizing swirl effects.

## Features

- **Nebula Simulation** – 2000+ particles creating swirling gas clouds
- **7 Color Palettes** – Galaxy, Aurora, Sunset, Ocean, Fire, Rainbow, Pastel
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Particle Trails** – Smooth trailing effect
- **Glow Effects** – Radiant glow on particles
- **Slow Rotation** – Gentle swirling motion
- **Dynamic Colors** – Particles shift colors based on palette
- **Star Background** – Distant star field
- **Keyboard Shortcuts** – S (speed), C (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/nebula-swirl.git

2. Navigate to the project folder:
   cd nebula-swirl

3. Open demo.html in your browser

## File Structure

nebula-swirl/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Galaxy" | Cycle through 7 color palettes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |

### Color Palettes

1. **Galaxy** – Purple/pink cosmic tones
2. **Aurora** – Green/blue aurora tones
3. **Sunset** – Warm sunset tones
4. **Ocean** – Deep blue/teal tones
5. **Fire** – Red/orange tones
6. **Rainbow** – Full spectrum
7. **Pastel** – Soft gentle colors

### Speed Options

- **Slow** – 0.003 (gentle rotation)
- **Normal** – 0.008 (balanced)
- **Fast** – 0.02 (quick rotation)
- **Very Fast** – 0.04 (rapid rotation)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Particle system | 2000+ particles with orbit and wobble |
| Color palettes | RGB color arrays with alpha |
| Trails | Position history with alpha |
| Glow effects | Radial gradients on particles |
| Rotation | Angle-based particle movement |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: [
        { r: 255, g: 100, b: 50 },
        // Add more colors
    ]
}