# Animated Music Player UI

A sleek, modern, and fully responsive **Music Player Interface** featuring a glassmorphism design. This example demonstrates how to combine **EaseMotion CSS** continuous animations (like spinning vinyl and pulsing equalizer bars) with staggered entrance effects to create a lively, engaging media player without writing custom JavaScript.

## 🚀 Features

- **Continuous Vinyl Rotation**: Uses `ease-spin-slow` to create a smooth, infinite spinning effect for the album art.
- **Pulsing Equalizer**: Uses `ease-pulse` with staggered delays (`ease-delay-*`) on multiple bars to create a realistic, wave-like audio visualizer.
- **Staggered UI Entrance**: The track info, equalizer, progress bar, and controls fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Interactive Controls**: Uses `ease-hover-grow` on the playback buttons for a satisfying, tactile click target.
- **Glassmorphism Aesthetic**: Features a frosted glass card with a deep purple/indigo gradient background.
- **Fully Responsive**: Scales down gracefully for mobile screens.

## 📂 File Structure

```text
submissions/examples/animated-music-player/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, vinyl styling, and glassmorphism
└── README.md    # Documentation