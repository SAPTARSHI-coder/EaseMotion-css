# Jumping Frog

Frog that hops when clicked, featuring realistic jump physics, 6 color palettes, particle effects, and interactive controls.

## Features

- **Jump Physics** – Realistic jump with arc and rotation
- **6 Color Palettes** – Green, Blue, Red, Golden, Purple, Rainbow
- **Animated Frog** – Eyes, legs, body, and mouth
- **Particle Effects** – Particles on jump and landing
- **Squish Animation** – Squish on landing
- **Idle Animation** – Gentle breathing movement
- **Jump Counter** – Tracks number of jumps
- **Keyboard Shortcuts** – J (jump), C (color), R (reset), SPACE (jump)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Physics simulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/jumping-frog.git

2. Navigate to the project folder:
   cd jumping-frog

3. Open demo.html in your browser

## File Structure

jumping-frog/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click frog | Jump |
| "Jump!" | Jump |
| "Color: Green" | Cycle through 6 color palettes |
| "Reset" | Reset to default |
| J | Jump |
| C | Cycle colors |
| R | Reset |
| SPACE | Jump |

### Color Palettes

1. **Green** – Classic green frog
2. **Blue** – Cool blue frog
3. **Red** – Red frog
4. **Golden** – Golden frog
5. **Purple** – Mystical purple frog
6. **Rainbow** – Colorful rainbow frog

## How It Works

| Feature | Implementation |
|---------|---------------|
| Jump physics | Velocity-based arc with gravity |
| Squish | Scale on impact |
| Particles | Burst particles on jump/landing |
| Idle animation | Sine wave body movement |
| Color palettes | RGB arrays for frog parts |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyColor',
    body: '#bodyColor',
    belly: '#bellyColor',
    eye: '#eyeColor',
    pupil: '#pupilColor',
    spot: '#spotColor',
    tongue: '#tongueColor',
    leg: '#legColor',
    toe: '#toeColor'
}