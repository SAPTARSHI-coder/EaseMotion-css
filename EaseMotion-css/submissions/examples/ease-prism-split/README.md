# 🌈 Prism Split – Content Splits into Rainbow Colors

An interactive prism split effect where content splits into vibrant rainbow colors on hover or interaction, creating a stunning prismatic dispersion effect. Watch as text and elements separate into individual rainbow layers, spreading outward with fluid motion and glowing colors. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Rainbow split effect** – Content splits into individual rainbow-colored layers
- **Interactive control** – Hover to split, leave to merge
- **11 rainbow layers** – Full spectrum from red to violet
- **Adjustable parameters** – Split amount (0-100%), spread (20-100%), speed (1-10×)
- **Multiple controls** – Split, Merge, Toggle, and Reset buttons
- **Keyboard shortcuts** – S (Split), M (Merge), T (Toggle), R (Reset), Space (Toggle)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the prism:
   - **Hover** over the content to split into rainbow
   - Click **Split** to split the content
   - Click **Merge** to merge the rainbow back
   - Click **Toggle** to switch between states
   - Click **Reset** to restore default settings
   - Click the **content** itself to toggle
3. Adjust the sliders:
   - **Split Amount** – How much the content splits (0-100%)
   - **Spread** – How far the layers spread (20-100%)
   - **Speed** – Animation speed (1-10×)
4. Use **keyboard shortcuts**:
   - `S` – Split
   - `M` – Merge
   - `T` – Toggle
   - `R` – Reset
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, prism design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Layer system** – Content is split into 11 individual rainbow layers
- **Prismatic dispersion** – Each layer moves to a different position based on split amount
- **Color mapping** – Each layer has a unique hue (0-330°)
- **Smooth transitions** – Fluid animation between split and merged states
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Split Amount | How much to split (0-100%) | 0% |
| Spread | How far layers spread (20-100%) | 60% |
| Speed | Animation speed (1-10×) | 5× |
| Layers | Number of rainbow layers | 11 |

### Modifying Rainbow Layers

```javascript
// In the HTML, add or remove layer divs
<div class="layer layer-1" style="--hue: 0deg; --delay: 0s">
  <span class="layer-char">P</span>
</div>
// Add more layers with different hues