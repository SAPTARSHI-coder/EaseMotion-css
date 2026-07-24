# Domino Chain Reaction

Dominos falling in sequence when first is clicked, with physics simulation, color customization, and particle effects.

## Features

- **Chain Reaction** – Dominos fall in sequence when triggered
- **7 Count Options** – 8, 12, 16, 20, 25, 30, 40 dominos
- **7 Color Modes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **Physics Simulation** – Realistic falling physics
- **Particle Effects** – Particles on impact
- **Idle Animation** – Gentle sway when standing
- **Click to Start** – Click first domino to trigger
- **Keyboard Shortcuts** – T (trigger), C (count), P (color), R (reset), SPACE (trigger)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/domino-chain-reaction.git

2. Navigate to the project folder:
   cd domino-chain-reaction

3. Open demo.html in your browser

## File Structure

domino-chain-reaction/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click first domino | Start chain reaction |
| "Trigger" | Start chain reaction |
| "Count: 20" | Cycle through 7 count options |
| "Color: Rainbow" | Cycle through 7 color modes |
| "Reset" | Reset all dominos |
| T | Trigger |
| C | Cycle counts |
| P | Cycle colors |
| R | Reset |
| SPACE | Trigger |

### Count Options

- **8** – Small chain
- **12** – Medium chain
- **16** – Balanced chain
- **20** – Full chain (default)
- **25** – Long chain
- **30** – Very long chain
- **40** – Maximum chain

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors
7. **Monochrome** – Grayscale elegant

## How It Works

| Feature | Implementation |
|---------|---------------|
| Chain reaction | Sequential falling with delay |
| Physics | Gravity and damping |
| Particle effects | Burst particles on impact |
| Idle animation | Gentle sway |
| Color modes | HSL functions with position/time |

## Customization

### Adding Color Modes

Add to `colorModes` array:

```javascript
{
    name: 'MyMode',
    fn: (i, total, time) => {
        return `hsl(${value}, ${sat}%, ${light}%)`;
    }
}