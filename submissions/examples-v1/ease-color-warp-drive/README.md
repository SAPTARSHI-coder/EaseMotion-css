# Color Warp Drive

A mesmerizing rainbow spectrum visualization that bends and twists like spacetime with multiple modes, speed control, and particle effects.

## Features

- **Warp Speed Effect** – Hyperspace-like rainbow particle visualization
- **4 Modes** – Tunnel, Spiral, Wave, Vortex
- **4 Speeds** – Slow, Normal, Fast, Very Fast
- **4 Twist Levels** – Light, Medium, Heavy, Extreme
- **Particle System** – 200 glowing particles with trails
- **Dynamic Colors** – Full rainbow spectrum based on position
- **Background Grid** – Subtle depth-inducing grid lines
- **Warp Lines** – Speed lines radiating from center
- **Center Glow** – Pulsing glow at the center
- **Keyboard Shortcuts** – S (speed), T (twist), M (mode), R (reset), SPACE (cycle modes)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/color-warp-drive.git

2. Navigate to the project folder:
   cd color-warp-drive

3. Open demo.html in your browser

## File Structure

color-warp-drive/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Speed: Normal" | Cycle through 4 speeds |
| "Twist: Medium" | Cycle through 4 twist levels |
| "Mode: Tunnel" | Cycle through 4 modes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| T | Cycle twists |
| M | Cycle modes |
| R | Reset |
| SPACE | Cycle modes |

### Modes

1. **Tunnel** – Classic warp tunnel effect
2. **Spiral** – Spiraling particle patterns
3. **Wave** – Undulating wave patterns
4. **Vortex** – Vortex-like swirling

### Speed Options

- **Slow** – 0.008 (gentle flow)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (energetic)
- **Very Fast** – 0.07 (rapid warp)

### Twist Options

- **Light** – 1.5 (gentle curve)
- **Medium** – 3 (balanced twist)
- **Heavy** – 5 (strong twist)
- **Extreme** – 8 (intense distortion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Particle system | Object-oriented particles with position, angle, distance |
| Color generation | HSL based on angle and distance |
| Mode behavior | Different update logic per mode |
| Twist effect | Angle modification based on distance |
| Speed control | Multiplier on particle movement |
| Trails | Ghost particles behind main particle |

## Customization

### Adding Modes

Add new mode to `modes` array and add case in particle update:

```javascript
case 4: // Your new mode
    // Custom update logic
    break;