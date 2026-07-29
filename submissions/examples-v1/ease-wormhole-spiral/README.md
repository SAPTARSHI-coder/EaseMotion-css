# Wormhole Spiral

Spiraling tunnel with color distortion effect, featuring 800+ particles, 7 color modes, twist control, and speed settings.

## Features

- **Spiraling Tunnel** – Hypnotic wormhole effect with particles
- **800+ Particles** – Dense particle system for smooth flow
- **7 Color Modes** – Rainbow, Galaxy, Neon, Ocean, Fire, Pastel, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **4 Twist Levels** – Light, Medium, Heavy, Extreme
- **Particle Trails** – Smooth trailing effect
- **Tunnel Rings** – Animated ring structures
- **Distortion Effects** – Color and shape distortion
- **Keyboard Shortcuts** – S (speed), T (twist), C (color), R (reset)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/wormhole-spiral.git

2. Navigate to the project folder:
   cd wormhole-spiral

3. Open demo.html in your browser

## File Structure

wormhole-spiral/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Twist: Medium" | Cycle through 4 twist levels |
| "Color: Rainbow" | Cycle through 7 color modes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| T | Cycle twists |
| C | Cycle colors |
| R | Reset |

### Color Modes

1. **Rainbow** – Full spectrum
2. **Galaxy** – Purple/pink cosmic tones
3. **Neon** – Bright neon colors
4. **Ocean** – Blue/teal tones
5. **Fire** – Red/orange tones
6. **Pastel** – Soft gentle colors
7. **Monochrome** – Grayscale elegant

### Speed Options

- **Slow** – 0.005 (gentle flow)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick flow)
- **Very Fast** – 0.07 (rapid flow)

### Twist Options

- **Light** – 1.5 (gentle curve)
- **Medium** – 3 (balanced)
- **Heavy** – 5 (strong twist)
- **Extreme** – 8 (intense distortion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Particle system | 800+ particles with orbital motion |
| Twist effect | Angle modification based on distance |
| Color modes | HSL functions with position/time |
| Trails | Position history with alpha |
| Tunnel rings | Animated ring visualization |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
{
    name: 'MyMode',
    fn: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}