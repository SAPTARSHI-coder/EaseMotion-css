# Rocket Launching

Rocket with flame trail and smoke rings, featuring realistic launch physics, 6 color palettes, speed control, and particle effects.

## Features

- **Rocket Launch** – Click to launch with realistic physics
- **Flame Trail** – Dynamic flame with particles and sparks
- **Smoke Rings** – Expanding smoke rings on launch
- **6 Color Palettes** – Orange, Blue, Green, Purple, Gold, Rainbow
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Altitude Tracking** – Real-time altitude and fuel display
- **Stars** – Parallax star background
- **Particle Effects** – Spark particles on launch
- **Moon** – Animated moon in background
- **Keyboard Shortcuts** – L (launch), S (speed), C (color), R (reset), SPACE (launch)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Particle system)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/rocket-launching.git

2. Navigate to the project folder:
   cd rocket-launching

3. Open demo.html in your browser

## File Structure

rocket-launching/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Launch rocket |
| "Launch" | Launch rocket |
| "Speed: Normal" | Cycle through 4 speeds |
| "Color: Orange" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| L | Launch |
| S | Cycle speeds |
| C | Cycle colors |
| R | Reset |
| SPACE | Launch |

### Color Palettes

1. **Orange** – Classic orange flame
2. **Blue** – Cool blue flame
3. **Green** – Green flame
4. **Purple** – Purple flame
5. **Gold** – Golden flame
6. **Rainbow** – Colorful flame

### Speed Options

- **Slow** – 0.005 (gentle animation)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick animation)
- **Very Fast** – 0.07 (rapid animation)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Rocket physics | Thrust, gravity, velocity, altitude |
| Flame animation | Multi-layer flame with particles |
| Smoke rings | Expanding ring particles |
| Stars | Parallax scrolling stars |
| Color palettes | RGB arrays for flame parts |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyColor',
    flame: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    smoke: ['#color1', '#color2', '#color3'],
    body: '#bodyColor',
    accent: '#accentColor',
    glow: '#glowColor'
}