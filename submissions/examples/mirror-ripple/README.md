# 🪞 Mirror Ripple

Mirror Ripple is an experimental interactive component exploring delayed visual feedback.

The component presents a central object and its reflection. When the user interacts with the mirror, the reflection responds first and the real object follows.

## ✨ Features

- 🪞 Reflective surface
- ⏱️ Adjustable reaction delay
- 💧 Visual ripple feedback
- ✨ Particle effects
- 👤 Animated central object
- 🔢 Interaction counter
- ⌨️ Keyboard controls
- 📱 Responsive design
- 🚫 No dependencies

## 🎮 Controls

- Click the mirror — Trigger interaction
- Space — Trigger interaction
- R — Reset
- Reflection Delay — Adjust delay
- Interact — Trigger reaction
- Reset — Clear state

## 🧠 Interaction Model

The component intentionally separates the reflection and the real object into two independent visual layers.

The reflection receives its animation immediately.

The real object receives its reaction after the configured delay.

This creates the illusion that the reflection exists slightly ahead of reality.

## ✨ Particle System

Each interaction creates multiple lightweight particle elements.

Particles receive random translation vectors using CSS custom properties.

They automatically remove themselves after the animation finishes.

## 🎨 Customization

Developers can modify:

- Reflection opacity
- Reflection blur
- Delay duration
- Particle count
- Particle distance
- Object dimensions
- Mirror gradients
- Animation timing

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript ES6

## 📂 Structure

```text
mirror-ripple/
├── demo.html
├── style.css
└── README.md