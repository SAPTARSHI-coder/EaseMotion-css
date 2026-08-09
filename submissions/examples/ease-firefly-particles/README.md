# ✨ Firefly Particles – Fireflies Float and Cluster

An interactive particle system that simulates glowing fireflies floating through a dark night sky with graceful, organic motion. Click to add fireflies, watch them cluster together, or scatter them across the canvas—each firefly features a glowing core, luminous tail, pulsing brightness, and gentle wobbling flight path. Adjust count, speed, and glow intensity for a fully customizable experience. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Graceful firefly motion** – Organic wandering with wobble and smooth transitions
- **Glowing visuals** – Each firefly has a pulsing glow, bright core, and luminous tail
- **Cluster behavior** – Fireflies naturally cluster together when activated
- **Scatter behavior** – Fireflies disperse across the canvas with a burst
- **Click to add** – Click anywhere on the canvas to add a new firefly
- **Customizable parameters** – Count (5-80), Speed (Slow-Fast), Glow (Dim-Bright)
- **Real-time feedback** – Firefly count, cluster status, and status messages
- **Keyboard shortcuts** – A (Add), C (Cluster), S (Scatter), X (Clear)
- **Responsive design** – Adapts to any screen size
- **Beautiful visuals** – Glowing cores, trailing particles, soft glow halos

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the fireflies:
   - **Click** anywhere on the canvas to add a firefly
   - Click **Add** to add multiple fireflies (based on count slider)
   - Click **Cluster** to make fireflies gather together
   - Click **Scatter** to disperse fireflies across the canvas
   - Click **Clear** to remove all fireflies
3. Adjust the sliders:
   - **Count** – Number of fireflies (5-80)
   - **Speed** – Movement speed (Slow → Fast)
   - **Glow** – Glow intensity (Dim → Bright)
4. Use **keyboard shortcuts**:
   - `A` – Add fireflies
   - `C` – Cluster fireflies
   - `S` – Scatter fireflies
   - `X` – Clear all fireflies

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Particle system** – Each firefly is an object with position, target, speed, size, brightness, and tail
- **Organic motion** – Fireflies use smooth interpolation toward targets with wobble for natural flight paths
- **Clustering** – Fireflies are drawn toward the center of mass with slight random offset for organic grouping
- **Glow rendering** – Each firefly renders a radial gradient glow, bright core, and trailing tail particles
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps particle animation
- **Pulse animation** – Each firefly pulses independently with varying speed and offset

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Count | Number of fireflies | 30 |
| Speed | Movement speed multiplier | Medium (50%) |
| Glow | Glow intensity multiplier | Bright (70%) |
| Max fireflies | Maximum allowed | 80 |
| Tail length | Trail particles per firefly | 5-15 |
| Wander radius | Random movement range | 30-80px |

### Modifying Firefly Appearance

```javascript
// Modify the Firefly class constructor
constructor(x, y) {
  this.size = 2 + Math.random() * 4;        // Change size range
  this.hue = 40 + Math.random() * 30;       // Change color range (40-70 = yellow-green)
  this.tailLength = 5 + Math.floor(Math.random() * 10); // Change tail length
  this.glowSize = this.size * (4 + Math.random() * 6);  // Change glow size
}