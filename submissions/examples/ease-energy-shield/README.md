# 🛡️ Energy Shield – Protective Energy Shield Shimmers

An interactive energy shield simulation with shimmering particles, glowing rings, and pulsing effects. Watch as a protective energy shield shimmers with power, responding to your controls with vibrant colors and dynamic motion. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic energy shield** – Glowing particles, shimmering rings, and aura effects
- **Adjustable parameters** – Shield strength (0-100%), pulse speed (1-10×), shimmer intensity (0-100%)
- **Pulse effect** – Explosive energy pulse from the shield center
- **8 color schemes** – Blue, Green, Purple, Red, Orange, Cyan, Pink, Gold
- **Toggle controls** – Turn shield on/off
- **Keyboard shortcuts** – T (Toggle), R (Reset), P (Pulse), C (Color), Space (Toggle)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the energy shield:
   - Click **Toggle** to turn shield on/off
   - Click **Reset** to restore default settings
   - Click **Pulse** for an explosive energy pulse
   - Click **Color** to cycle through color schemes
   - Click the **canvas** to trigger a pulse
3. Adjust the sliders:
   - **Shield Strength** – Power of the shield (0-100%)
   - **Pulse Speed** – Animation speed (1-10×)
   - **Shimmer Intensity** – Glow intensity (0-100%)
4. Use **keyboard shortcuts**:
   - `T` – Toggle shield
   - `R` – Reset
   - `P` – Pulse
   - `C` – Color
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Orbiting particles with shimmer, trails, and glow
- **Shield rendering** – Glowing aura, rotating rings, and inner glow
- **Pulse effect** – Explosive burst of particles from center
- **Color system** – 8 color schemes with dynamic hue shifting
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Shield Strength | Power of the shield (0-100%) | 80% |
| Pulse Speed | Animation speed (1-10×) | 5× |
| Shimmer Intensity | Glow intensity (0-100%) | 60% |
| Colors | 8 color schemes | Blue |

### Modifying Shield Appearance

```javascript
// In the drawShield() function – adjust ring parameters
const ringRadius = radius * (0.4 + i * 0.3) * (0.8 + 0.2 * strength);
const ringAlpha = 0.05 + strength * 0.08 * (1 - i * 0.2);

// Adjust aura glow
auraGrad.addColorStop(0, `hsla(${hue + 20}, 100%, 60%, ${auraAlpha * 0.5})`);