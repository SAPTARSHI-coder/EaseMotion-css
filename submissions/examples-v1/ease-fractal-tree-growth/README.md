# Fractal Tree Growth

Tree branches that grow recursively with leaf clusters, creating a beautiful fractal tree with organic growth animation.

## Features

- **Recursive Growth** – Branches grow recursively with depth control
- **Leaf Clusters** – Leaf clusters form at branch tips
- **6 Depth Levels** – 3, 4, 5, 6, 7, 8 depth levels
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Organic Motion** – Branches sway with gentle swing animation
- **Interactive Growth** – Click to grow the tree further
- **Branch Sway** – Natural wind-like swaying motion
- **Leaf Animation** – Leaves with gentle wobble and glow
- **Night Atmosphere** – Starry night sky with grass
- **Keyboard Shortcuts** – G (grow), D (depth), S (speed), R (reset), SPACE (quick grow)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Recursive tree structure, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/fractal-tree-growth.git

2. Navigate to the project folder:
   cd fractal-tree-growth

3. Open demo.html in your browser

## File Structure

fractal-tree-growth/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Grow" | Grow the tree further |
| "Depth: 6" | Cycle through 3-8 depth levels |
| "Speed: Normal" | Cycle through 4 speeds |
| "Reset" | Reset to initial state |
| G | Grow tree |
| D | Cycle depths |
| S | Cycle speeds |
| R | Reset |
| SPACE | Quick grow |

### Depth Levels

- **3** – Simple tree, few branches
- **4** – Balanced tree
- **5** – Dense tree
- **6** – Complex tree (default)
- **7** – Very complex tree
- **8** – Maximum complexity

### Speed Options

- **Slow** – 0.005 (gentle growth)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick growth)
- **Very Fast** – 0.07 (rapid growth)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Fractal growth | Recursive branching with depth control |
| Branch sway | Sine wave angle modulation |
| Leaf clusters | Multiple leaves per cluster with wobble |
| Growth animation | Progressive branch extension |
| Color | Depth-based color gradients |

## Customization

### Branch Parameters

Modify in `Branch` class:
- `thickness` – Branch thickness (max 6-depth*0.6)
- `swingAmount` – Sway intensity (0.02-0.05)
- `swingSpeed` – Sway speed (0.01-0.04)

### Leaf Parameters

Modify in `LeafCluster` class:
- `count` – Leaves per cluster (5-13)
- `size` – Leaf size (3-9)
- `wobble` – Leaf wobble intensity (0.3-1.0)

### Growth Speed

Modify in `speeds` array:
```javascript
const speeds = [
    { name: 'Custom', value: 0.03 },
];