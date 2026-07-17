# Popcorn Popper

Kernels popping with visual effects, particle bursts, and colorful popcorn creation.

## Features

- **Pop Animation** – Kernels pop with expanding animation
- **Particle Effects** – Burst particles on each pop
- **6 Count Options** – 10, 20, 30, 50, 75, 100 kernels
- **7 Color Palettes** – Rainbow, Golden, Classic, Ocean, Sunset, Galaxy, Pastel
- **Flying Popcorn** – Popped kernels fly and settle
- **Bowl Visual** – Popcorn collects in a bowl
- **Steam Effects** – Animated steam lines
- **Touch Support** – Works on mobile devices
- **Keyboard Shortcuts** – P (pop), C (count), L (color), R (reset), SPACE (pop)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/popcorn-popper.git

2. Navigate to the project folder:
   cd popcorn-popper

3. Open demo.html in your browser

## File Structure

popcorn-popper/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Pop kernels |
| "Pop!" | Pop multiple kernels |
| "Count: 30" | Cycle through 6 count options |
| "Color: Rainbow" | Cycle through 7 color palettes |
| "Reset" | Reset all kernels |
| P | Pop |
| C | Cycle counts |
| L | Cycle colors |
| R | Reset |
| SPACE | Pop |

### Count Options

- **10** – Small batch
- **20** – Medium batch
- **30** – Balanced batch (default)
- **50** – Large batch
- **75** – Extra large batch
- **100** – Maximum batch

### Color Palettes

1. **Rainbow** – Full spectrum
2. **Golden** – Warm golden tones
3. **Classic** – Traditional popcorn colors
4. **Ocean** – Blue/teal tones
5. **Sunset** – Warm sunset tones
6. **Galaxy** – Deep purple/pink tones
7. **Pastel** – Soft gentle colors

## How It Works

| Feature | Implementation |
|---------|---------------|
| Pop animation | Expanding kernel with particles |
| Particle effects | Burst particles on pop |
| Flying popcorn | Physics-based flight and settling |
| Bowl collection | Gravity-based collection |
| Color modes | HSL functions with position/time |

## Customization

### Adding Color Palettes

Add to `colorPalettes` array:

```javascript
{
    name: 'MyPalette',
    fn: (t) => `hsl(${value}, ${sat}%, ${light}%)`
}