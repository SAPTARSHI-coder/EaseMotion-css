# Pendulum Wave

Multiple pendulums creating wave patterns with physics simulation, color customization, and interactive controls.

## Features

- **Wave Physics** – Pendulums create mesmerizing wave patterns
- **8 Count Options** – 5, 8, 10, 12, 15, 18, 20, 24 pendulums
- **7 Color Modes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Trail Effects** – Smooth trailing motion
- **Glow Effects** – Dynamic glow on pendulums
- **Connecting Lines** – Subtle lines between pendulum bobs
- **Pause/Resume** – SPACE to pause the wave
- **Keyboard Shortcuts** – C (count), S (speed), P (color), R (reset), SPACE (pause)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/pendulum-wave.git

2. Navigate to the project folder:
   cd pendulum-wave

3. Open demo.html in your browser

## File Structure

pendulum-wave/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Count: 15" | Cycle through 8 count options |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Rainbow" | Cycle through 7 color modes |
| "Reset" | Reset to default |
| C | Cycle counts |
| S | Cycle speeds |
| P | Cycle colors |
| R | Reset |
| SPACE | Pause/Resume |

### Count Options

- **5** – Simple wave
- **8** – Small wave
- **10** – Medium wave
- **12** – Balanced wave
- **15** – Full wave (default)
- **18** – Dense wave
- **20** – Very dense wave
- **24** – Maximum density

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors
7. **Monochrome** – Grayscale elegant

### Speed Options

- **Slow** – 0.005 (gentle wave)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick wave)
- **Very Fast** – 0.07 (rapid wave)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Wave physics | Coupled pendulum equations |
| Color modes | HSL functions with position/time |
| Trail effects | Position history with alpha |
| Glow effects | Radial gradients |
| Pause | Time freeze with SPACE |

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