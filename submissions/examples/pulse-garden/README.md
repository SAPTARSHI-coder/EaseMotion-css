# 🫀 Pulse Garden

Pulse Garden is an interactive animated garden where flowers respond to a shared heartbeat.

The component combines organic plant movement, synchronized pulse animation, flower blooming, pollen particles, and interactive planting.

## ✨ Features

- 🫀 Animated heartbeat
- 🌱 Dynamic flower planting
- 🌸 Bloom animation
- 🌿 Organic stem movement
- ✨ Pollen particles
- 🎚️ Pulse intensity control
- 🔢 Flower counter
- ⌨️ Keyboard shortcuts
- 📱 Responsive design
- 🚫 No external dependencies

## 🎮 Controls

Click anywhere in the garden to plant a flower.

Additional controls:

- Space — Plant flower
- R — Reset
- Pulse slider — Change heartbeat speed
- Plant Flower — Create a random flower
- Reset — Clear the garden

## 🌱 Flower System

Flowers are generated dynamically with JavaScript.

Each flower receives:

- Random horizontal position
- Random animation delay
- Random flower type
- Independent growth animation

Four visual flower variations are included.

## 🫀 Pulse System

The heartbeat is implemented with CSS animation.

Changing the pulse slider updates the CSS custom property:

```css
--pulse-speed