# Slinky Drop

A slinky that bounces and stretches when clicked, with realistic physics, spring dynamics, and color customization.

## Features

- **Realistic Physics** – Spring dynamics with gravity, bounce, and damping
- **Interactive Drop** – Click or press SPACE to drop the slinky
- **7 Color Palettes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **Slinky Segments** – 30 segments with individual wobble
- **Stretch & Squash** – Realistic stretching and squashing on impact
- **Ground Collision** – Bounces off the ground with damping
- **Idle Animation** – Gentle sway when not in use
- **Shadow Effect** – Dynamic shadow on the ground
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – D (drop), C (color), R (reset), SPACE (drop)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/slinky-drop.git

2. Navigate to the project folder:
   cd slinky-drop

3. Open demo.html in your browser

## File Structure

slinky-drop/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Drop slinky |
| "Drop" | Drop slinky |
| "Color: Rainbow" | Cycle through 7 color palettes |
| "Reset" | Reset slinky to initial position |
| D | Drop |
| C | Cycle colors |
| R | Reset |
| SPACE | Drop |

### Color Palettes

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
| Spring physics | Spring force with damping |
| Gravity | Constant downward acceleration |
| Bounce | Elastic collision with ground |
| Stretch | Spring extension on impact |
| Segments | Linked nodes with wobble |

## Customization

### Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fn: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}