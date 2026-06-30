# ⬡ Ease Hexagon Loader

A futuristic CSS-only hexagon loading animation featuring a rotating conic sweep ring and a pulsing geometric core. Designed for modern interfaces such as AI dashboards, system monitors, and futuristic UI panels.

No JavaScript. No dependencies. Pure CSS motion design.

---

## ✨ Features

- ⚡ Pure HTML + CSS implementation
- ⬡ Hexagon shape using `clip-path`
- 🔄 Rotating conic-gradient sweep effect
- 💡 Pulsing core animation
- 🎨 Multiple color themes
- 📏 Responsive size system
- 🚀 Speed variants (fast / slow)
- ♿ Reduced motion support
- 🧩 Fully reusable component class system

---

## 📦 Installation

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css" />

Add the markup:

<div class="ease-hexagon ease-hexagon--md ease-hexagon--cyan">
  <div class="ease-hexagon__shape"></div>
</div>
🧩 Basic Usage
<div class="ease-hexagon ease-hexagon--lg ease-hexagon--emerald">
  <div class="ease-hexagon__shape"></div>
</div>
📏 Size Variants Size Class Pixels SM ease-hexagon--sm 50px MD ease-hexagon--md
80px LG ease-hexagon--lg 120px XL ease-hexagon--xl 160px 🎨 Color Themes Theme
Class Color Cyan ease-hexagon--cyan Blue tech glow Emerald ease-hexagon--emerald
Green signal Amber ease-hexagon--amber Warning tone Violet ease-hexagon--violet
Purple energy ⚡ Speed Variants 🚀 Fast Mode
<div class="ease-hexagon ease-hexagon--fast"></div>

Use cases: Active processing Live computation AI inference states 🐢 Slow Mode
<div class="ease-hexagon ease-hexagon--slow"></div>

Use cases: Idle systems Background tasks Ambient UI motion 🧠 How It Works The
loader is built using three layered systems: 1. Sweep Ring A conic-gradient
pseudo-element rotates continuously to simulate scanning motion. 2. Hexagon Core
A clip-path polygon forms a geometric hexagon shape. 3. Pulse Engine A scaling
animation creates a breathing/energy-core effect. 💡 Use Cases 🤖 AI processing
dashboards 🛰 System monitoring interfaces 🔐 Security scanning tools 📊 Data
visualization loaders ⚙ Background job indicators 🧭 Futuristic UI states ♿
Accessibility Respects reduced motion settings: @media (prefers-reduced-motion:
reduce) { .ease-hexagon::before, .ease-hexagon__shape { animation: none
!important; } } 🔧 Customization Override default CSS variables: .ease-hexagon {
--color: #38bdf8; --speed: 2s; --size: 80px; } 📁 Project Structure
ease-hexagon-loader/ ├── demo.html ├── style.css └── README.md ## 📄 License
Part of the EaseMotion UI System. Free to use, modify, and extend.
```
