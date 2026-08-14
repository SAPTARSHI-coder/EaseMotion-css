# 🦢 Origami Art – Paper Folds into Shapes

An interactive origami art simulation where paper gracefully folds into beautiful shapes with smooth animations, vibrant colors, and realistic paper texture. Watch as flat paper transforms into cranes, butterflies, flowers, stars, hearts, waves, foxes, and cats—all with fluid folding animations and customizable controls. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **8 beautiful origami shapes** – Crane, Butterfly, Flower, Star, Heart, Wave, Fox, Cat
- **Smooth folding animation** – Paper folds and unfolds with fluid transitions
- **Customizable controls** – Fold progress, rotation, scale, and color
- **Realistic paper texture** – Subtle grain, edge highlights, and fold lines
- **Dynamic color** – Adjust hue for endless paper color combinations
- **Shape cycling** – Cycle through different origami designs
- **Keyboard shortcuts** – F (Fold), U (Unfold), S (Shape), R (Reset)
- **Real-time feedback** – Shape name, fold percentage, status messages
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the origami:
   - Click **Fold** to fold the paper (increments 20%)
   - Click **Unfold** to unfold the paper (decrements 20%)
   - Click **Shape** to cycle through origami designs
   - Click **Reset** to return to default state
   - Adjust **Fold Progress**, **Rotation**, **Scale**, and **Color** sliders
3. Use **keyboard shortcuts**:
   - `F` – Fold paper
   - `U` – Unfold paper
   - `S` – Next shape
   - `R` – Reset
4. Watch the paper transform into beautiful origami art.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Shape generation** – Each shape is defined by a set of points with folding transformations
- **Folding animation** – Smooth interpolation between flat and folded states
- **Paper rendering** – Gradient fills, edge highlights, paper texture, and fold lines
- **Color system** – HSL-based color with adjustable hue
- **Transformation pipeline** – Points → Fold transformation → Rotation → Scale → Canvas rendering
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Fold Progress | 0-100% folded | 0% |
| Rotation | 0-360° rotation | 0° |
| Scale | 50-150% size | 100% |
| Color | 0-360° hue shift | 0° |
| Shapes | 8 origami designs | Crane |

### Adding New Shapes

```javascript
// Add a new shape to the SHAPES array
const SHAPES = [
  // ... existing shapes
  { 
    name: '🦋 My Shape', 
    points: function(w, h, fold) {
      // Return array of {x, y} points
      const cx = w / 2;
      const cy = h / 2;
      const s = Math.min(w, h) * 0.35;
      const f = fold / 100;
      return [
        { x: cx, y: cy - s },
        { x: cx + s, y: cy + s },
        { x: cx - s, y: cy + s },
      ];
    }
  },
];