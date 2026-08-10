# Elastic Slingshot

Object that stretches and launches when released, with realistic physics, particle effects, and color customization.

## Features

- **Elastic Stretch** – Projectile stretches elastic band when dragged
- **Physics Launch** – Realistic projectile physics with gravity
- **7 Color Palettes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **Particle Effects** – Launch and bounce particles
- **Projectile Trails** – Smooth trailing motion
- **Power Indicator** – Shows power level when aiming
- **Multiple Projectiles** – Launch multiple projectiles
- **Ground Collision** – Realistic bouncing
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – L (launch), C (color), R (reset), SPACE (launch)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/elastic-slingshot.git

2. Navigate to the project folder:
   cd elastic-slingshot

3. Open demo.html in your browser

## File Structure

elastic-slingshot/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click and drag projectile | Aim and stretch |
| Release | Launch projectile |
| "Launch" | Auto-launch |
| "Color: Rainbow" | Cycle through 7 color palettes |
| "Reset" | Reset all projectiles |
| L | Launch |
| C | Cycle colors |
| R | Reset |
| SPACE | Launch |

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
| Elastic stretch | Distance-based stretching |
| Physics launch | Velocity-based projectile motion |
| Gravity | Constant downward acceleration |
| Bounce | Elastic ground collision |
| Particles | Burst particles on launch/impact |

## Customization

### Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fn: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}