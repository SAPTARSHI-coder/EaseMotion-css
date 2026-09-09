# Animated Music Player

A sleek, modern **Music Player UI** built with **EaseMotion CSS**. Features a spinning vinyl disc, animated sound waves, glowing controls, and a smooth staggered entrance — all without JavaScript.

## ✨ Features

- **🎵 Spinning Vinyl Disc**: Uses EaseMotion's looping `ease-rotate` to create a realistic rotating record with grooves
- **🌊 Animated Sound Waves**: Five bars that dance continuously to simulate audio playback
- **💫 Glowing Effects**: Pulsing glow behind the disc and gradient play button using `ease-pulse`
- **🎬 Staggered Entrance**: Each section (disc, info, progress, controls, volume) slides up sequentially
- **🖱️ Interactive Hover**: Buttons scale with `ease-hover-grow`, playlist items lift with `ease-hover-lift`
- **📱 Fully Responsive**: Adapts beautifully to mobile screens

## 🧩 EaseMotion Classes Used

| Class | Purpose |
|-------|---------|
| `ease-center` | Centers the entire player page |
| `ease-fade-in` | Fades in the main wrapper and sound waves |
| `ease-slide-up` | Slides sections up on entrance |
| `ease-delay-100` to `ease-delay-700` | Creates cascading staggered sequence |
| `ease-card` | Base card structure for the player |
| `ease-hover-lift` | Lift effect on player card and playlist items |
| `ease-rotate` | **Looping rotation** for the vinyl disc |
| `ease-pulse` | **Looping pulse** on the play button |
| `ease-hover-grow` | Scale effect on all control buttons |

## 🚀 How to Use

1. Open `demo.html` in any modern browser
2. Watch the player components slide in with a staggered effect
3. Observe the **continuously spinning vinyl disc** and **dancing sound waves**
4. Hover over the control buttons to see them scale up
5. Hover over playlist items to see the lift effect
6. Resize to mobile to see the responsive layout

## 🎨 Design Highlights

- **Dark Glassmorphism**: Frosted glass player card over animated gradient orbs
- **Looping Animations**: Demonstrates EaseMotion's infinite animation utilities (`ease-rotate`, `ease-pulse`)
- **Custom Keyframes**: Sound wave dance, orb float, and glow pulse animations
- **Gradient Accents**: Purple-to-pink gradient on play button and progress bar

## 🛠️ Technologies Used

- HTML5
- Custom CSS (Keyframes, Gradients, Glassmorphism)
- EaseMotion CSS (via CDN)