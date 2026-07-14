# Stress Ball Squish

An interactive stress ball that squishes and deforms when clicked or dragged, with realistic physics, particle effects, and color customization.

## Features

- **Realistic Squish Physics** – Ball deforms based on pressure and direction
- **Interactive Controls** – Click, drag, hover to squish
- **6 Color Palettes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel
- **Particle Effects** – Squish creates particle bursts
- **Glow Effects** – Dynamic glow intensity
- **Trail Effect** – Smooth trailing motion
- **Wrinkle Effects** – Squish creates wrinkles on surface
- **Bounce Animation** – Ball bounces back when released
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – C (color), R (reset), SPACE (random squish)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/stress-ball-squish.git

2. Navigate to the project folder:
   cd stress-ball-squish

3. Open demo.html in your browser

## File Structure

stress-ball-squish/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click ball | Squish the ball |
| Drag ball | Deform and move the ball |
| Hover ball | Gentle squish effect |
| "Color: Rainbow" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| C | Cycle colors |
| R | Reset |
| SPACE | Random squish |

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Ocean** – Calm blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors

## How It Works

| Feature | Implementation |
|---------|---------------|
| Squish physics | Directional deformation with smooth interpolation |
| Particle effects | Burst particles on squish |
| Glow effects | Radial gradients with dynamic intensity |
| Trail | Position history with alpha fading |
| Wrinkles | Surface deformation details |

## Customization

### Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fn: (t) => `hsl(${value}, ${sat}%, ${light}%)`,
    glow: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}