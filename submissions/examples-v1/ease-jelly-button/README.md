# Jelly Button

A button that wobbles like jelly on hover with spring physics, particle effects, and color customization.

## Features

- **Jelly Physics** – Spring-based wobble on hover
- **8 Color Palettes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Candy, Monochrome
- **Interactive Hover** – Button wobbles and deforms on hover
- **Click Particles** – Particle burst on click
- **Glow Effects** – Dynamic glow on hover
- **Wobbly Shape** – Deforms with sine wave distortion
- **Spring Dynamics** – Smooth, elastic wobble motion
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – C (color), R (reset), SPACE (click effect)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Spring physics, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/jelly-button.git

2. Navigate to the project folder:
   cd jelly-button

3. Open demo.html in your browser

## File Structure

jelly-button/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Hover button | Wobbles like jelly |
| Click button | Particle burst effect |
| "Color: Rainbow" | Cycle through 8 color palettes |
| "Reset" | Reset wobble state |
| C | Cycle colors |
| R | Reset |
| SPACE | Click effect |

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors
7. **Candy** – Sweet pink tones
8. **Monochrome** – Grayscale elegant

## How It Works

| Feature | Implementation |
|---------|---------------|
| Jelly physics | Spring-damper system |
| Wobble shape | Sine wave deformation |
| Color palettes | Gradient arrays |
| Particles | Burst particles on click |
| Glow | Dynamic radial gradients |

## Customization

### Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    colors: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    text: '#ffffff',
    glow: '#glowColor'
}