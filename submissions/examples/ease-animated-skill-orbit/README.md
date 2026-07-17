# Animated Skill Orbit

Skills orbiting around central hub like planets with interactive selection, color customization, and speed control.

## Features

- **Orbiting Skills** – Skills orbit around a central hub
- **Multiple Orbits** – 2-6 concentric orbits
- **7 Color Modes** – Rainbow, Ocean, Sunset, Galaxy, Neon, Pastel, Monochrome
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Interactive Selection** – Click skills to select them
- **Visual Feedback** – Glow effects, trails, and pulse animation
- **Skill Icons** – Emoji icons for each skill
- **Orbital Trails** – Smooth trailing effect
- **Connecting Lines** – Subtle lines between nearby skills
- **Keyboard Shortcuts** – S (speed), O (orbits), C (color), R (reset), SPACE (cycle skills)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Animation loop, Orbital mechanics)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/animated-skill-orbit.git

2. Navigate to the project folder:
   cd animated-skill-orbit

3. Open demo.html in your browser

## File Structure

animated-skill-orbit/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click skill | Select skill |
| "Speed: Normal" | Cycle through 4 speeds |
| "Orbits: 3" | Cycle through 2-6 orbits |
| "Color: Rainbow" | Cycle through 7 color modes |
| "Reset" | Reset to default |
| S | Cycle speeds |
| O | Cycle orbits |
| C | Cycle colors |
| R | Reset |
| SPACE | Cycle skills |

### Color Modes

1. **Rainbow** – Full spectrum
2. **Ocean** – Blue/teal tones
3. **Sunset** – Warm sunset tones
4. **Galaxy** – Deep purple/pink tones
5. **Neon** – Bright neon colors
6. **Pastel** – Soft gentle colors
7. **Monochrome** – Grayscale elegant

### Speed Options

- **Slow** – 0.008 (gentle orbit)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick orbit)
- **Very Fast** – 0.07 (rapid orbit)

### Orbit Counts

- **2** – Simple layout
- **3** – Balanced (default)
- **4** – Dense
- **5** – Very dense
- **6** – Maximum density

## How It Works

| Feature | Implementation |
|---------|---------------|
| Orbital mechanics | Circular motion with angle updates |
| Color modes | HSL functions with position/time |
| Selection | Click detection with visual feedback |
| Trails | Position history with alpha |
| Glow effects | Radial gradients with alpha |

## Customization

### Adding Skills

Add to `skillData` array:
```javascript
const skillData = [
    { name: 'MySkill', icon: '🌟', color: '#ff6b6b' },
    // Add more skills
];