# Neon Light Painter

An interactive drawing tool where cursor movement creates glowing neon trails that fade away with customizable colors, sizes, and fade speeds.

## Features

- **Neon Trails** – Glowing neon dots that follow cursor movement
- **8 Colors** – Pink, Blue, Green, Purple, Orange, Cyan, Red, White
- **4 Sizes** – Small, Medium, Large, X-Large
- **4 Fade Speeds** – Slow, Normal, Fast, Instant
- **Trail Effect** – Each dot has a fading trail behind it
- **Glow Animation** – Pulsing glow intensity and sparkle effects
- **Click to Clear** – Remove all dots instantly
- **Keyboard Shortcuts** – C (color), S (size), F (fade), SPACE (clear)
- **Touch Support** – Works on mobile devices
- **FPS Performance** – Smooth 60fps rendering
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with radial gradients)
- Vanilla JavaScript (Animation loop, Event handling)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/neon-light-painter.git

2. Navigate to the project folder:
   cd neon-light-painter

3. Open demo.html in your browser

## File Structure

neon-light-painter/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Move cursor | Paint neon trails |
| "Color: Pink" | Cycle through 8 colors |
| "Size: Medium" | Cycle through 4 sizes |
| "Fade: Normal" | Cycle through 4 fade speeds |
| "Clear" | Remove all dots |
| C | Cycle colors |
| S | Cycle sizes |
| F | Cycle fade speeds |
| SPACE | Clear all |

### Color Options

1. **Pink** – #ff1493 (Deep Pink)
2. **Blue** – #00d4ff (Cyan Blue)
3. **Green** – #39ff14 (Neon Green)
4. **Purple** – #b026ff (Violet)
5. **Orange** – #ff6b00 (Neon Orange)
6. **Cyan** – #00ffff (Cyan)
7. **Red** – #ff0040 (Neon Red)
8. **White** – #ffffff (White)

### Size Options

- **Small** – 8px
- **Medium** – 15px
- **Large** – 25px
- **X-Large** – 40px

### Fade Options

- **Slow** – 0.008 (long trails)
- **Normal** – 0.02 (medium trails)
- **Fast** – 0.04 (short trails)
- **Instant** – 0.08 (very short trails)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Neon glow | Radial gradient with alpha transparency |
| Trail effect | Multiple dots with decreasing opacity |
| Fade animation | RequestAnimationFrame with alpha decay |
| Color control | JavaScript updates dot color property |
| Size control | JavaScript updates dot size property |
| Touch support | Touch events for mobile devices |

## Customization

### Adding Colors

Add to the `colors` array:

```javascript
const colors = [
    { name: 'MyColor', value: '#hexcode' },
];