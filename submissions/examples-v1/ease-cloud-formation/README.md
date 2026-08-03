# Cloud Formation

Fluffy clouds forming and dissipating with changing shapes, creating a dynamic sky experience with particle-based cloud simulation.

## Features

- **Cloud Formation** – Fluffy clouds form from particles
- **Dissipation** – Clouds naturally dissipate over time
- **4 Density Options** – Sparse, Medium, Dense, Fluffy
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Dynamic Sky** – Changing sky colors with sun/moon
- **Particle System** – Individual cloud particles with life cycles
- **Organic Shapes** – Irregular, fluffy cloud shapes
- **Glow Effects** – Soft glowing cloud particles
- **Auto-Formation** – Clouds form automatically when empty
- **Keyboard Shortcuts** – F (form), S (speed), D (density), R (reset), SPACE (form)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/cloud-formation.git

2. Navigate to the project folder:
   cd cloud-formation

3. Open demo.html in your browser

## File Structure

cloud-formation/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Form" | Create a new cloud |
| "Speed: Normal" | Cycle through 4 speeds |
| "Density: Medium" | Cycle through 4 density options |
| "Reset" | Reset to default |
| F | Form cloud |
| S | Cycle speeds |
| D | Cycle densities |
| R | Reset |
| SPACE | Form cloud |

### Density Options

- **Sparse** – 0.5 (fewer particles)
- **Medium** – 1 (balanced)
- **Dense** – 1.5 (more particles)
- **Fluffy** – 2 (maximum particles)

### Speed Options

- **Slow** – 0.005 (gentle motion)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick motion)
- **Very Fast** – 0.07 (rapid motion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Cloud formation | Particles generated from overlapping circles |
| Particle system | Individual particles with life cycles |
| Organic shapes | Irregular particle blobs |
| Dissipation | Particles fade and die over time |
| Sky dynamics | Changing colors with sun/moon |

## Customization

### Density Values

Modify in `densities` array:
```javascript
const densities = [
    { name: 'Custom', value: 1.2 },
];