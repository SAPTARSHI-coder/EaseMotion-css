# 🌱 BioPulse Garden

BioPulse Garden is an interactive plant-growth animation component where a
seed progressively develops into a flowering plant.

The component transforms a numerical growth value into a visual animation
sequence consisting of a seed, stem, leaves, and flower.

## ✨ Features

- Seed-to-flower animation
- Growth progress from 0–100%
- Progressive stem growth
- Dynamic leaf appearance
- Flower blooming animation
- Floating pollen particles
- Animated sunlight
- Water interaction
- Reset interaction
- Keyboard shortcuts
- Responsive layout
- No external dependencies

## 🌿 Growth System

The component uses five visual stages:

### Seed

0–20%

Only the seed is visible.

### Sprout

20–45%

The stem begins growing.

### Young Plant

45–70%

Leaves progressively appear.

### Mature Plant

70–90%

Additional leaves develop and the plant approaches flowering.

### Full Bloom

90–100%

The flower reaches its complete size.

## 🎮 Controls

### Growth Slider

Directly controls the current growth percentage.

### Water

Increases growth by 10%.

### Reset

Returns the plant to its initial seed state.

### Keyboard

- `Space` — Water the plant
- `R` — Reset

## 🎨 Animation Philosophy

BioPulse Garden treats animation as the primary feedback mechanism.

Instead of simply displaying a progress percentage, the numerical value
controls multiple visual properties.

The growth value affects:

- Stem height
- Leaf scale
- Leaf opacity
- Flower scale
- Seed visibility

This allows one interaction value to drive an entire visual state.

## 🛠️ Technologies

- HTML5
- CSS3
- CSS Custom Properties
- CSS transitions
- CSS keyframes
- JavaScript ES6

## 📁 Files

```text
bio-pulse-garden/
├── demo.html
├── style.css
└── README.md
📜 License

MIT License.