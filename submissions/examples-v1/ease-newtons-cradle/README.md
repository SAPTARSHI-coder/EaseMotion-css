# Newton's Cradle

Classic physics toy with clicking balls, realistic pendulum physics, and color customization.

## Features

- **Realistic Physics** – Pendulum motion with energy transfer
- **7 Count Options** – 3, 4, 5, 6, 7, 8 balls
- **7 Color Palettes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **Click to Swing** – Click anywhere to start the motion
- **Energy Transfer** – Realistic momentum transfer between balls
- **Trail Effects** – Smooth motion trails
- **Glow Effects** – Dynamic glow on balls
- **Particle Effects** – Particles on swing
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – S (swing), C (count), P (color), R (reset), SPACE (swing)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/newtons-cradle.git

2. Navigate to the project folder:
   cd newtons-cradle

3. Open demo.html in your browser

## File Structure

newtons-cradle/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Swing cradle |
| "Swing" | Start the motion |
| "Balls: 5" | Cycle through 7 count options |
| "Color: Rainbow" | Cycle through 7 color palettes |
| "Reset" | Reset all balls |
| S | Swing |
| C | Cycle counts |
| P | Cycle colors |
| R | Reset |
| SPACE | Swing |

### Count Options

- **3** – Small cradle
- **4** – Balanced
- **5** – Classic (default)
- **6** – Large
- **7** – Extended
- **8** – Maximum

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
| Pendulum physics | Gravity-based oscillation |
| Energy transfer | Momentum conservation |
| Collision | Elastic collision between adjacent balls |
| Damping | Gradual energy loss |
| Color modes | HSL functions with position/time |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fn: (i, total) => `hsl(${value}, ${sat}%, ${light}%)`
}