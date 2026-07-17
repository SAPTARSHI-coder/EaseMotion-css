# 🌐 Ease Radar Loader

A futuristic CSS-only radar loading animation featuring a rotating sweep, concentric scan rings, and a pulsing center dot. Built for modern UI systems like dashboards, AI tools, network monitoring, and security interfaces.

No JavaScript. No dependencies. Just pure CSS motion design.

---

## ✨ Features

- ⚡ Pure HTML + CSS implementation
- 🎯 Realistic radar sweep animation using `conic-gradient`
- 🌊 Concentric scanning rings
- 💡 Pulsing center signal origin
- 🎨 5 built-in themes
- 📏 5 responsive size variants
- 🚀 Turbo scanning mode
- ⏸️ Paused state support
- 🌙 Dark UI optimized
- ♿ Reduced motion support

---

## 📦 Installation

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">

Add the markup:

<div class="ease-radar ease-radar--md ease-radar--cyan">
  <div class="ease-radar__dot"></div>
</div>

## 🧩 Basic Usage
<div class="ease-radar ease-radar--lg ease-radar--emerald">
  <div class="ease-radar__dot"></div>
</div>

## Size Variants
Size	Class	Pixels
XS	ease-radar--xs	32px
SM	ease-radar--sm	48px
MD	ease-radar--md	64px
LG	ease-radar--lg	96px
XL	ease-radar--xl	140px
🎨 Themes
Theme	Class	Description
Slate	ease-radar--slate	Neutral gray-blue
Emerald	ease-radar--emerald	Success / scan green
Cyan	ease-radar--cyan	Tech default blue
Amber	ease-radar--amber	Warning / alert
Midnight	ease-radar--midnight	Deep dark UI
⚡ States
🚀 Turbo Mode

Faster scanning animation for active processing states.

<div class="ease-radar ease-radar--md ease-radar--turbo"></div>

Use cases:

AI processing
Live network scanning
Security analysis
Real-time monitoring
⏸️ Paused State

Freezes radar motion while keeping UI visible.

<div class="ease-radar ease-radar--paused"></div>

Use cases:

Disabled systems
Idle states
Completed scans
🧠 How It Works

The radar loader is built using:

A circular base container
A conic-gradient rotating sweep layer
Radial concentric ring overlays
A pulsing center dot

Animation techniques:

transform: rotate() for sweep motion
scale() + opacity for pulse effect
animation-play-state for pause control
💡 Use Cases
🛰 Network monitoring dashboards
🤖 AI / ML processing states
🔐 Security scanning interfaces
📡 Signal detection systems
📊 Data analysis pipelines
⚙ Background job processing
🧭 System diagnostics
♿ Accessibility

Respects reduced motion preferences:

@media (prefers-reduced-motion: reduce) {
  .ease-radar::after,
  .ease-radar__dot::after {
    animation: none !important;
  }
}
🔧 Customization

Override default variables:

.ease-radar {
  --sweep: #38bdf8;
  --ring: rgba(56, 189, 248, 0.25);
  --center: #38bdf8;
}
📁 Project Structure
ease-radar-loader/
├── demo.html
├── style.css
└── README.md
🌟 Philosophy

Ease Radar Loader transforms a simple loading state into a meaningful motion system. Instead of generic spinners, it communicates activity, scanning, and analysis through structured animation design.

## 📄 License

Part of the EaseMotion component library.
Free to use, modify, and extend.


---
