# Growing Vine

An animated vine with leaves that grows and curls around objects with organic branching, leaf generation, and bud formation.

## Features

- **Organic Growth** – Vine grows and curls with natural movement
- **Branching System** – Random branching creates complex patterns
- **Leaf Generation** – Leaves grow along the vine with wobble animation
- **Bud Formation** – Buds appear at growing tips
- **Obstacle Avoidance** – Vine curls around obstacles
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **4 Density Options** – Sparse, Medium, Dense, Lush
- **Interactive Growth** – Click to grow the vine further
- **Curling Effect** – Vine curls with sine wave motion
- **Visual Feedback** – Status shows segment, leaf, and bud counts
- **Keyboard Shortcuts** – G (grow), S (speed), D (density), R (reset), SPACE (quick grow)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Recursive tree structure, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/growing-vine.git

2. Navigate to the project folder:
   cd growing-vine

3. Open demo.html in your browser

## File Structure

growing-vine/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Grow" | Extend the vine with new growth |
| "Speed: Normal" | Cycle through 4 speeds |
| "Density: Medium" | Cycle through 4 density options |
| "Reset" | Reset to initial state |
| G | Grow vine |
| S | Cycle speeds |
| D | Cycle densities |
| R | Reset |
| SPACE | Quick grow |

### Speed Options

- **Slow** – 0.002 (gentle growth)
- **Normal** – 0.005 (balanced)
- **Fast** – 0.01 (quick growth)
- **Very Fast** – 0.02 (rapid growth)

### Density Options

- **Sparse** – 0.5 (fewer branches and leaves)
- **Medium** – 1 (balanced)
- **Dense** – 1.5 (more branches and leaves)
- **Lush** – 2 (maximum branches and leaves)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Vine growth | Recursive tree structure with segments |
| Branching | Random branching based on chance and density |
| Leaf generation | Leaves spawn at segment tips |
| Curling | Sine wave angle modulation |
| Obstacle avoidance | Angle adjustment based on proximity |

## Customization

### Speed Values

Modify in `speeds` array:
```javascript
const speeds = [
    { name: 'Custom', value: 0.008 },
];