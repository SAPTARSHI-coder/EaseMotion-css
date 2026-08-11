# 🧭 Compass Drift

A living compass component where the needle gently drifts, oscillates, and settles instead of behaving like a static navigation indicator.

Built with vanilla HTML, CSS, and JavaScript for EaseMotion CSS.

---

## ✨ Overview

Compass Drift transforms a traditional compass into an animated interaction.

Instead of immediately snapping the needle to a heading, the component uses smooth interpolation and a lightweight drift simulation to create subtle magnetic movement.

The compass can be manually rotated, placed into an automatic drift mode, adjusted using a drift intensity control, or returned to north.

The entire component is self-contained and does not require a framework, build step, package installation, or external dependency.

Simply open `demo.html` in a browser.

---

## 🎯 Features

- 🧭 360° interactive compass
- 🧲 Organic magnetic drift
- 🎚️ Adjustable drift intensity
- 🔄 Smooth needle interpolation
- 📐 Real-time degree heading
- 🗺️ Automatic cardinal direction detection
- ⌨️ Keyboard controls
- 🔁 Reset-to-north interaction
- 📱 Responsive layout
- 🌌 Atmospheric compass styling
- 💡 Subtle glow and depth effects
- 🚫 No external dependencies

---

## 🧭 Compass Behavior

The compass has two different heading values:

### Target Heading

The target heading represents the direction selected by the user.

For example:

```js
targetHeading = 90;