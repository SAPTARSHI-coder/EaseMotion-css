# Glitch Art Generator

Random glitch effects on images with color shifts, multiple intensity levels, and various glitch effect types.

## Features

- **8 Glitch Effects** – Horizontal shift, Vertical shift, Color shift, Scanline, Pixel sorting, Block displacement, Channel separation, Random noise
- **4 Intensity Levels** – Light, Medium, Heavy, Extreme
- **6 Color Modes** – Rainbow, Neon, Cyber, Vaporwave, Acid, Monochrome
- **Random Glitch Combinations** – Each click applies multiple random effects
- **Random Image Generation** – Creates colorful artwork to glitch
- **Real-time Preview** – Instant visual feedback
- **Keyboard Shortcuts** – G (glitch), I (intensity), C (color), R (reset), SPACE (quick glitch)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with ImageData manipulation)
- Vanilla JavaScript (Pixel manipulation, Glitch algorithms)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/glitch-art-generator.git

2. Navigate to the project folder:
   cd glitch-art-generator

3. Open demo.html in your browser

## File Structure

glitch-art-generator/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Glitch" | Apply random glitch effects |
| "Intensity: Medium" | Cycle through 4 intensity levels |
| "Color: Rainbow" | Cycle through 6 color modes |
| "Reset" | Reset to original image |
| G | Apply glitch |
| I | Cycle intensities |
| C | Cycle colors |
| R | Reset |
| SPACE | Quick glitch |

### Intensity Levels

- **Light** – 15 (subtle glitch)
- **Medium** – 30 (balanced)
- **Heavy** – 50 (strong glitch)
- **Extreme** – 80 (intense glitch)

### Color Modes

1. **Rainbow** – Full spectrum shifts
2. **Neon** – Bright neon colors
3. **Cyber** – Cyberpunk palette
4. **Vaporwave** – Retro vaporwave colors
5. **Acid** – Psychedelic acid colors
6. **Monochrome** – Grayscale shifts

### Glitch Effects

1. **Horizontal Shift** – Random row shifts horizontally
2. **Vertical Shift** – Random column shifts vertically
3. **Color Shift** – Random channel color shifts
4. **Scanline** – Scanline displacement
5. **Pixel Sorting** – Pixel brightness sorting
6. **Block Displacement** – Random block movement
7. **Channel Separation** – RGB channel offset
8. **Random Noise** – Random pixel noise

## How It Works

| Feature | Implementation |
|---------|---------------|
| Glitch effects | ImageData manipulation with algorithms |
| Color modes | HSL to RGB conversion with random shifts |
| Intensity | Effect strength multiplier |
| Random image | Canvas drawing with gradients and shapes |
| Pixel manipulation | Direct pixel array access |

## Customization

### Adding Glitch Effects

Add new effect function to `applyGlitch()` switch:

```javascript
case 8: // New effect
    glitchYourEffect(glitched, w, h, intensityFactor);
    break;