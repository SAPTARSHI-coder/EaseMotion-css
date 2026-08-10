# Blinking Eye

Realistic eye with blink and pupil tracking, featuring 6 eye colors, smooth blink animation, and interactive pupil tracking.

## Features

- **Realistic Eye** – Detailed eye with iris texture, pupil, and sclera
- **Blink Animation** – Smooth eyelid blink with auto-blink every 3-5 seconds
- **Pupil Tracking** – Pupil follows mouse or touch movement
- **6 Eye Colors** – Brown, Blue, Green, Hazel, Gray, Amber
- **Iris Texture** – Detailed radial iris lines
- **Glow Effects** – Eye highlights and shadow effects
- **Eyelash Details** – Subtle eyelash lines
- **Manual Blink** – Click or press SPACE to blink
- **Auto-Blink** – Random blinking every few seconds
- **Keyboard Shortcuts** – B (blink), C (color), R (reset), SPACE (blink)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D rendering with gradients and shadows)
- Vanilla JavaScript (Animation loop, Event handling)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/blinking-eye.git

2. Navigate to the project folder:
   cd blinking-eye

3. Open demo.html in your browser

## File Structure

blinking-eye/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Move mouse over eye | Pupil tracks movement |
| Click eye | Blink |
| "Blink" | Manual blink |
| "Color: Brown" | Cycle through 6 eye colors |
| "Reset" | Reset pupil to center |
| B | Blink |
| C | Cycle colors |
| R | Reset |
| SPACE | Blink |

### Eye Colors

1. **Brown** – Classic brown eyes
2. **Blue** – Cool blue eyes
3. **Green** – Natural green eyes
4. **Hazel** – Warm hazel eyes
5. **Gray** – Elegant gray eyes
6. **Amber** – Golden amber eyes

## How It Works

| Feature | Implementation |
|---------|---------------|
| Blink animation | Eyelid scaling with progress |
| Pupil tracking | Mouse position mapping |
| Iris texture | Radial line patterns |
| Eye colors | RGB color arrays with gradients |
| Auto-blink | Timer-based random blinking |

## Customization

### Adding Eye Colors

Add to `eyeColors` array:

```javascript
{
    name: 'MyColor',
    iris: ['#color1', '#color2', '#color3', '#color4', '#color5'],
    pupil: '#pupilColor',
    sclera: '#scleraColor',
    highlight: '#highlightColor'
}