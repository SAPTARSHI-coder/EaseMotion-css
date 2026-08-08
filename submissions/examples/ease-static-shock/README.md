# ⚡ Static Shock – Static Electricity Crackles Around Element

An interactive static electricity simulation where electric sparks crackle and dance around a central element with organic, dynamic motion. Watch as blue-white sparks orbit, flicker, and discharge with realistic static behavior. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Static electricity simulation** – Sparks crackle and dance around the element
- **Organic spark motion** – Sparks orbit with wobble, trails, and life cycles
- **Shock burst effect** – Explosive discharge of sparks on click
- **Adjustable parameters** – Intensity (0-100%), spark count (10-60), spark speed (1-10×)
- **Toggle controls** – Turn static effect on/off
- **Keyboard shortcuts** – T (Toggle), R (Reset), S (Shock), Space (Toggle)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the static electricity:
   - Click **Toggle** to turn static on/off
   - Click **Reset** to restore default settings
   - Click **Shock** for an explosive discharge
   - Click the **canvas** to trigger a shock
3. Adjust the sliders:
   - **Intensity** – Brightness and activity (0-100%)
   - **Spark Count** – Number of sparks (10-60)
   - **Spark Speed** – Motion speed (1-10×)
4. Use **keyboard shortcuts**:
   - `T` – Toggle static
   - `R` – Reset
   - `S` – Shock
   - `Space` – Toggle

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Spark system** – Sparks orbit with organic wobble, trails, and life cycles
- **Static behavior** – Sparks flicker, jitter, and discharge naturally
- **Shock effect** – Explosive burst of particles on interaction
- **Self-sustaining** – Sparks respawn to maintain count
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Intensity | Brightness and activity (0-100%) | 70% |
| Spark Count | Number of sparks (10-60) | 30 |
| Spark Speed | Motion speed (1-10×) | 5× |

### Modifying Spark Behavior

```javascript
// In the Spark class constructor
this.size = 1 + Math.random() * 3; // Spark size range
this.speed = 0.5 + Math.random() * 1.5; // Orbit speed range
this.life = 0.5 + Math.random() * 0.5; // Life range
this.hue = 180 + Math.random() * 40; // Color range (blue-white)