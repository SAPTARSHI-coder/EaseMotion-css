# 🌋 Volcanic Pulse — Eruption Simulation

A interactive volcanic eruption component built with vanilla HTML5, CSS3, JavaScript ES6, and the Canvas API. **Volcanic Pulse** simulates the life cycle of a volcanic eruption, transitioning dynamically from a calm, dormant state to an explosive eruption with real-time particle effects, custom atmospheric lighting, and responsive UI controls.

---

## ✨ Features

### 🌋 Dynamic Volcano & Particle Engine

* **Real-time Canvas Rendering:** Mountain silhouette, crater glow, smoke, embers, lava streams, and falling volcanic rocks are generated procedurally on an HTML5 canvas via `requestAnimationFrame`.
* **State-Driven Intensity:** Smoothly interpolates physical pressure and visual activity based on user input (0–100%).

### 🎨 Atmospheric Environments

Choose between four distinct visual themes with dynamic lighting and starry backdrops:

* 🌅 **Calm:** Peaceful blue and orange sky.
* 🌇 **Sunset:** Deep warm gradients and glowing horizons.
* 🌋 **Eruption:** High-contrast, fiery dark atmosphere.
* 🌙 **Midnight:** Dark night sky featuring animated twinkling stars.

### 🎮 Interactive Controls

* **Intensity Slider:** Seamlessly scale eruption activity from 0% to 100%.
* **Trigger Eruption Button / Click:** Force an immediate high-pressure volcanic burst.
* **Keyboard Shortcuts:**
* Space — Trigger an eruption burst.
* R — Reset system intensity and metrics.



---

## 📊 Eruption Activity States

| State | Intensity Range | Visual Behavior |
| --- | --- | --- |
| **Dormant** | `0% - 20%` | Peaceful landscape with subtle crater smoke. |
| **Building** | `20% - 45%` | Crater begins to glow; pressure gradually builds. |
| **Active** | `45% - 75%` | Continuous lava flows, embers, and rising smoke columns. |
| **Violent** | `75% - 100%` | Eruption bursts, heavy smoke, flying rocks, and intense particle velocity. |

---

## 🛠️ Project Structure

```text
volcanic-pulse/
├── demo.html     # Component markup and JavaScript logic
├── style.css     # UI layout, responsive styling, and animations
└── README.md     # Project documentation

```

---

## 🚀 Quick Start

1. **Clone or Download:** Copy the project files (`demo.html` and `style.css`) into your local environment.
2. **Open in Browser:** Launch `demo.html` directly in any modern Web browser (Chrome, Firefox, Safari, Edge).
3. **No Build Step:** Built entirely with native web standard tech — no external npm dependencies or bundlers required!

---

## 🎛️ Configuration & Variables

If you wish to tweak the particle systems or performance in the script:

```javascript
// Default Particle Parameters
const particleLimits = {
  lava: 60,       // Max active lava particles
  smoke: 35,      // Max active smoke clouds
  embers: 40,     // Max glowing embers
  rocks: 12       // Max volcanic rock debris
};

```

---

## 📝 License

Distributed under the **MIT License**. Free to use, modify, and distribute for personal and commercial projects.