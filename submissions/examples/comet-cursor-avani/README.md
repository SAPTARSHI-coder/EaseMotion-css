# Comet Cursor (#57216)

## Engineering Overview
A magical, celestial cursor effect where the cursor leaves a glowing comet tail behind it. Built with optimized DOM tracking and lightweight keyframe animations, offering a stellar interactive user experience.

## Key Technical Features
- **Pulsing Core:** A dynamic 1.5s looping core indicator that mimics a glowing celestial body.
- **Dynamic Particle Trailing:** Real-time generation of shimmering particles with varied dimensions and natural fade-out trajectories.
- **Interactive Bursts:** Click-triggered multi-particle bursts for enhanced user feedback.
- **Accessibility Safeguard:** Automatically disables all cursor trails and pulse loops when `@media (prefers-reduced-motion: reduce)` is detected.