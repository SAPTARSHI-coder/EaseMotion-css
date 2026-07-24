# Volume Knob

Interactive knob with rotation and light indicators, featuring smooth drag controls, LED indicators, and keyboard shortcuts.

## Features

- **Interactive Knob** – Click and drag to adjust volume
- **LED Indicators** – 12 LED lights show volume level
- **Smooth Animation** – Smooth rotation with interpolation
- **Mute Function** – Mute/Unmute with one click
- **Random Volume** – Generate random volume level
- **Keyboard Shortcuts** – ↑↓ or +/- to adjust, M to mute, R to reset
- **Visual Feedback** – Glow effects, particles, ripple animation
- **Particle Effects** – Particles on volume change
- **Touch Support** – Works on mobile devices
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Flexbox)
- Canvas API (2D rendering)
- Vanilla JavaScript (Interaction handling, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/volume-knob.git

2. Navigate to the project folder:
   cd volume-knob

3. Open demo.html in your browser

## File Structure

volume-knob/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click and drag knob | Adjust volume |
| "Reset" | Reset to 50% |
| "Mute" | Mute/Unmute |
| "Random" | Random volume |
| ↑ or + | Increase volume |
| ↓ or - | Decrease volume |
| M | Mute/Unmute |
| R | Reset |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| ↑ or + | Increase volume by 5% |
| ↓ or - | Decrease volume by 5% |
| M | Mute/Unmute |
| R | Reset to 50% |

## How It Works

| Feature | Implementation |
|---------|---------------|
| Knob rotation | Angle-based volume mapping |
| LED indicators | 12 LEDs with gradient colors |
| Smooth animation | Interpolated angle updates |
| Mute | Volume snapshot and restore |
| Particles | Burst particles on volume change |

## Customization

### LED Count

Modify `LED_COUNT` constant:
```javascript
const LED_COUNT = 16; // Change number of LEDs