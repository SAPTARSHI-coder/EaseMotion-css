# 💎 Crystal Shatter – Glass Shatters and Reforms on Click

An interactive crystal shatter effect where a beautiful diamond-like crystal explodes into glowing shards on click, then gracefully reforms back into its original shape. Watch as the crystal shatters with realistic physics—shards fly outward with gravity, bounce, and shimmer—then smoothly return and reassemble into a perfect crystal. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Dramatic shatter effect** – Crystal explodes into glowing shards
- **Graceful reformation** – Shards smoothly return and reassemble
- **Realistic physics** – Gravity, friction, bounce, and velocity
- **Glowing shards** – Each shard has unique color, shimmer, and sparkle
- **Adjustable parameters** – Shatter force (1-10×), shard size (20-80%), reform speed (1-10×)
- **Toggle controls** – Shatter, Reform, Toggle, and Reset buttons
- **Keyboard shortcuts** – S (Shatter), R (Reform), T (Toggle), Space (Toggle)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the crystal:
   - **Click** the crystal to shatter or reform it
   - Click **Shatter** to break the crystal
   - Click **Reform** to reassemble the crystal
   - Click **Toggle** to switch between states
   - Click **Reset** to restore default settings
3. Adjust the sliders:
   - **Shatter Force** – How far shards fly (1-10×)
   - **Shard Size** – Size of shards (20-80%)
   - **Reform Speed** – How fast shards return (1-10×)
4. Use **keyboard shortcuts**:
   - `S` – Shatter crystal
   - `R` – Reform crystal
   - `T` – Toggle
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Crystal rendering** – Diamond-like shape with facets, glow, and highlights
- **Shard system** – Each shard has physics (velocity, gravity, friction, bounce)
- **Reformation** – Shards smoothly return to origin with easing
- **Visual effects** – Glowing shards, shimmer, sparkle, and color variation
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Shatter Force | How far shards fly (1-10×) | 5× |
| Shard Size | Size of shards (20-80%) | 40% |
| Reform Speed | How fast shards return (1-10×) | 5× |
| Shard Count | Number of shards | 15-35 |

### Modifying Crystal Shape

```javascript
// In the CRYSTAL_POINTS array – change crystal shape
const CRYSTAL_POINTS = [
  { x: 0, y: -80 },  // Top point
  { x: 30, y: -40 }, // Upper right
  { x: 40, y: 0 },   // Right
  { x: 30, y: 40 },  // Lower right
  { x: 0, y: 80 },   // Bottom
  { x: -30, y: 40 }, // Lower left
  { x: -40, y: 0 },  // Left
  { x: -30, y: -40 } // Upper left
];
// Add more points for more complex shapes