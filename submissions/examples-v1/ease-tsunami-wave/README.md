# Tsunami Wave

Massive wave that builds and crashes with particle splash, featuring realistic wave physics, 6 color palettes, and particle effects.

## Features

- **Wave Building** – Wave grows and builds up before crashing
- **Crash Effect** – Dramatic wave crash with particle splash
- **6 Color Palettes** – Ocean, Sunset, Emerald, Storm, Galaxy, Tropical
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Particle System** – Splash and foam particles
- **Wave Curl** – Realistic wave curling effect
- **Foam Trail** – Foam particles on wave crest
- **Progress Indicator** – Wave building progress bar
- **Keyboard Shortcuts** – W (wave), S (speed), C (color), R (reset), SPACE (wave)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/tsunami-wave.git

2. Navigate to the project folder:
   cd tsunami-wave

3. Open demo.html in your browser

## File Structure

tsunami-wave/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Trigger wave |
| "Wave" | Build and crash wave |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Ocean" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| W | Trigger wave |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Trigger wave |

### Color Palettes

1. **Ocean** – Blue ocean tones
2. **Sunset** – Warm sunset tones
3. **Emerald** – Green emerald tones
4. **Storm** – Dark storm tones
5. **Galaxy** – Cosmic purple tones
6. **Tropical** – Bright tropical tones

### Speed Options

- **Slow** – 0.005 (gentle wave)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick wave)
- **Very Fast** – 0.07 (rapid wave)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Wave building | Sine-based height progression |
| Wave crash | Curl effect with particles |
| Splash particles | Physics-based particle system |
| Foam particles | Rising foam bubbles |
| Color palettes | Gradient-based wave coloring |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    deep: '#color1',
    mid: '#color2',
    light: '#color3',
    crest: '#color4',
    foam: '#color5',
    spray: '#color6'
}