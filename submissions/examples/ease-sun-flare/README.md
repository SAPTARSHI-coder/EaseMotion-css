# ☀️ Sun Flare – Lens Flare Effect Follows Cursor

An interactive lens flare effect that follows your cursor like sunlight streaming through a camera lens, creating a dramatic, cinematic light display with glowing rays, ghost images, and brilliant bursts. Move your cursor to control the flare position, adjust intensity, size, and rotation speed, or trigger explosive burst effects. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic lens flare** – Sun-like glow with rays, ghost images, and horizontal streak
- **Cursor tracking** – Flare follows cursor with smooth, responsive motion
- **Adjustable parameters** – Intensity (0-100%), flare size (50-200%), rotation speed (0-100%)
- **Burst effect** – Explosive particle burst on click or button press
- **Toggle controls** – Turn flare on/off
- **Keyboard shortcuts** – T (Toggle), R (Reset), B (Burst)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the flare:
   - **Move your cursor** over the canvas to control the flare
   - Click **Toggle** to turn flare on/off
   - Click **Reset** to restore default settings
   - Click **Burst** for an explosive particle effect
   - Click the **canvas** to trigger a burst
3. Adjust the sliders:
   - **Intensity** – Brightness of the flare (0-100%)
   - **Flare Size** – Size of the flare (50-200%)
   - **Rotation Speed** – How fast rays rotate (0-100%)
4. Use **keyboard shortcuts**:
   - `T` – Toggle flare
   - `R` – Reset
   - `B` – Burst

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Lens flare rendering** – Glow, rays, ghost images, and horizontal streak
- **Cursor tracking** – Flare position follows cursor with distance-based intensity
- **Particle burst** – Explosive particles burst from the flare center
- **Rotation system** – Rays rotate dynamically with adjustable speed
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Intensity | Brightness (0-100%) | 80% |
| Flare Size | Size of the flare (50-200%) | 100% |
| Rotation Speed | Ray rotation speed (0-100%) | 30% |
| Burst Particles | Number of burst particles | 50 |

### Modifying Flare Appearance

```javascript
// In drawFlare() function – adjust glow colors
const glowAlpha = 0.1 + flareIntensityVal * 0.4;
mainGlow.addColorStop(0, `rgba(255, 240, 200, ${glowAlpha * 0.8})`);
mainGlow.addColorStop(0.3, `rgba(255, 220, 150, ${glowAlpha * 0.5})`);
mainGlow.addColorStop(0.6, `rgba(255, 200, 100, ${glowAlpha * 0.3})`);

// Adjust ray count
const numRays = 12; // Change for more/ fewer rays