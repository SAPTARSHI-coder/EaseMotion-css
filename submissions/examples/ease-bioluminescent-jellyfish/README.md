# Bioluminescent Jellyfish

Pulsing, translucent jellyfish with trailing tentacles, creating a magical underwater bioluminescent display.

## Features

- **Pulsing Jellyfish** – Jellyfish with rhythmic pulsing animation
- **Trailing Tentacles** – Flowing tentacles with organic movement
- **Bioluminescent Glow** – Glowing effects with bioluminescent particles
- **6 Color Modes** – Rainbow, Ocean, Neon, Galaxy, Pastel, Sunset
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Add Jellyfish** – Click to add more jellyfish to the scene
- **Particle Effects** – Bioluminescent particles floating around
- **Underwater Atmosphere** – Deep ocean background with light rays
- **Keyboard Shortcuts** – A (add), S (speed), C (color), R (reset), SPACE (add)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/bioluminescent-jellyfish.git

2. Navigate to the project folder:
   cd bioluminescent-jellyfish

3. Open demo.html in your browser

## File Structure

bioluminescent-jellyfish/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Add" | Add a new jellyfish |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 6 color modes |
| "Reset" | Reset to default |
| A | Add jellyfish |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Add jellyfish |

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Calm blue/teal tones
3. **Neon** – Bright neon colors
4. **Galaxy** – Deep purple/pink tones
5. **Pastel** – Soft gentle colors
6. **Sunset** – Warm sunset tones

### Speed Options

- **Slow** – 0.008 (gentle motion)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick motion)
- **Very Fast** – 0.07 (rapid motion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Jellyfish pulse | Sine wave on bell size and tentacles |
| Tentacle motion | Wave distortion along tentacle points |
| Bioluminescence | Glowing gradients and particles |
| Color modes | HSL color functions with time |
| Particle system | Floating bioluminescent particles |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
{
    name: 'MyMode',
    fn: (t, time) => {
        return `hsl(${value}, ${sat}%, ${light}%)`;
    }
}