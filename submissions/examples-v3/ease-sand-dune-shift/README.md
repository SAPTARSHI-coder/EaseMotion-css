# Sand Dune Shift

Sand particles shifting like wind-blown dunes with dynamic particle simulation, wind effects, and desert atmosphere.

## Features

- **Particle-Based Sand** – Hundreds of sand grains with individual physics
- **Wind Simulation** – 4 wind levels (Gentle, Moderate, Strong, Storm)
- **Dune Morphing** – Dunes shift and reshape with wind
- **4 Density Options** – Sparse, Medium, Dense, Thick
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Dynamic Desert Sky** – Changing colors with sun
- **Particle Physics** – Wind drift, settling, and erosion
- **Dune Surface** – Smooth dune silhouette with ridges
- **Keyboard Shortcuts** – W (wind), S (speed), D (density), R (reset), SPACE (wind toggle)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle physics, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/sand-dune-shift.git

2. Navigate to the project folder:
   cd sand-dune-shift

3. Open demo.html in your browser

## File Structure

sand-dune-shift/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Wind: Gentle" | Cycle through 4 wind levels |
| "Speed: Normal" | Cycle through 4 speeds |
| "Density: Medium" | Cycle through 4 density options |
| "Reset" | Reset to default |
| W | Cycle wind |
| S | Cycle speeds |
| D | Cycle densities |
| R | Reset |
| SPACE | Toggle wind |

### Wind Levels

- **Gentle** – Light breeze, slow dune shift
- **Moderate** – Medium wind, active shift
- **Strong** – Strong wind, rapid shift
- **Storm** – Powerful wind, dramatic shift

### Density Options

- **Sparse** – Fewer particles
- **Medium** – Balanced
- **Dense** – More particles
- **Thick** – Maximum particles

### Speed Options

- **Slow** – 0.005 (gentle motion)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick motion)
- **Very Fast** – 0.07 (rapid motion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Sand particles | Individual grains with physics |
| Wind effect | Force applied to particles |
| Dune morphing | Dynamic height map with sine waves |
| Erosion | Random particle displacement |
| Settling | Particles settle to dune surface |

## Customization

### Wind Values

Modify in `windLevels` array:
```javascript
const windLevels = [
    { name: 'Custom', value: 3 },
];