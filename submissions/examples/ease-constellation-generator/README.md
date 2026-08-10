# ✨ Constellation Generator – Creates Constellations on Click

An interactive constellation generator that creates beautiful star patterns with connections, glowing particles, and dynamic animations. Click anywhere on the canvas to add stars, generate random constellations, or customize the number of stars, connection density, and spread. Watch as constellations form with glowing connections, twinkling stars, and ethereal particle effects. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Click to add stars** – Build your own constellation by clicking on the canvas
- **Generate constellations** – Create complete constellations with adjustable parameters
- **Random constellations** – Instantly generate unique star patterns
- **Customizable parameters** – Adjust star count (5-30), connection chance (10-80%), and spread
- **Beautiful visuals** – Glowing stars, gradient connections, particle effects, and twinkling animations
- **Constellation names** – Each generated constellation gets a random mythological name
- **Save as image** – Export your constellation as a PNG file
- **Keyboard shortcuts** – G (Generate), C (Clear), R (Random), S (Save)
- **Responsive design** – Adapts to any screen size
- **Real-time feedback** – Star count display, status messages, and constellation name

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the constellation:
   - **Click** anywhere on the canvas to add a star
   - Click **Generate** to create a new constellation with current settings
   - Click **Random** for a completely random constellation
   - Click **Clear** to remove all stars
   - Click **Save** to download your constellation as an image
3. Adjust the sliders:
   - **Stars** – Number of stars in generated constellations (5-30)
   - **Connections** – Chance of connections between stars (10-80%)
   - **Spread** – How spread out the stars are (Tight → Wide)
4. Use **keyboard shortcuts**:
   - `G` – Generate constellation
   - `C` – Clear all stars
   - `R` – Random constellation
   - `S` – Save as image

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Star generation** – Stars are positioned radially with random spread, creating organic, natural-looking clusters
- **Connection algorithm** – Stars are connected with a probability based on distance and connection chance slider
- **Glow particles** – Each star emits glowing particles that orbit slowly, creating a magical, ethereal effect
- **Animation loop** – Uses `requestAnimationFrame` for smooth particle animation at 60fps
- **Drawing engine** – Canvas-based rendering with gradients, shadows, and transparency for rich visuals
- **Interactive adding** – Click position is converted to canvas coordinates, and stars are added with size variation

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Star count | Number of stars (5-30) | 12 |
| Connection chance | Probability of connections (10-80%) | 40% |
| Spread | How spread out stars are | 50% (Medium) |
| Star size | Random range | 3-8px |
| Glow particles | Per star particle count | 3-8 |
| Constraint names | Array of mythological names | 34 names |

### Adding Custom Star Colors

```javascript
// Modify the star drawing in the draw() function
const gradient4 = ctx.createRadialGradient(
  star.x - star.size * 0.3, star.y - star.size * 0.3, 0,
  star.x, star.y, star.size
);
gradient4.addColorStop(0, `rgba(255, 255, 255, ${0.9 * brightness})`);
gradient4.addColorStop(0.5, `rgba(255, 240, 200, ${0.7 * brightness})`);
gradient4.addColorStop(1, `rgba(200, 200, 255, ${0.3 * brightness})`);
// Customize colors here