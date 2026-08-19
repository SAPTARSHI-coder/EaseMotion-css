# Animated Smart Home Control Dashboard

A futuristic **Smart Home IoT Dashboard** built with **EaseMotion CSS**. Features animated SVG temperature dials, custom CSS toggle switches, energy usage bar charts, and glowing device cards with staggered entrance animations.

## ✨ Features

- **🌡️ SVG Temperature Dial**: Animated circular progress ring using `stroke-dashoffset`.
- **🔘 Custom Toggle Switches**: Pure CSS sliding toggles with glowing active states.
- **📊 Energy Chart**: Animated bar chart showing weekly consumption.
- **🔴 Live Status Indicators**: Pulsing recording dot for security cameras using `ease-pulse`.
- **💡 Device Sliders**: Brightness sliders with smooth fill animations.
- **🎬 Quick Scenes**: Action buttons for predefined home states (Movie, Sleep, Away).
- **📱 Fully Responsive**: Adapts from a 3-column device grid to a single column on mobile.

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-fade-in` | Fades in the main dashboard wrapper. |
| `ease-slide-up` | Slides cards and sections up on entrance. |
| `ease-delay-100` to `ease-delay-1000` | Creates a complex, cascading staggered load sequence. |
| `ease-card` | Applies glassmorphism base styles to main widgets. |
| `ease-hover-lift` | Adds depth to cards on hover. |
| `ease-hover-grow` | Scales profile picture and scene buttons. |
| `ease-pulse` | **Looping pulse** on the online status dot and camera recording indicator. |

## 🚀 How to Use
1. Open `demo.html` in your browser.
2. Watch the dashboard build itself with a highly staggered entrance animation.
3. Observe the **temperature dial** and **energy bars** animate into place.
4. Notice the glowing cyan borders on active device cards.
5. Resize the window to see the grid adapt to tablet and mobile layouts.