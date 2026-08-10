# CSS Floating Orbit Modal (Interactive Layouts)

A high-performance, pure CSS animated modal featuring hardware-accelerated ambient orbital background rings and floating particles. Designed specifically for highly interactive dashboard or gamified web interfaces, it implements seamless interaction transitions with zero JavaScript overhead.

## Features
- **Floating Orbit System:** Uses infinite keyframe cycles combined with 3D depth layers to simulate continuous ambient floating and orbiting particles.
- **Pure CSS State Engine:** Drives standard modal opening, scaling, and backdrop blurring actions using an accessible hidden HTML checkbox (`:checked` state mapping).
- **Fully Parameterized:** Exposes key parameters (duration, scale, orbit speed) directly via CSS Custom Properties.

## Custom Properties
Override these variables in `style.css` to change the behavior:
- `--modal-speed`: Controls the entry fade-and-scale speed (default: `0.4s`).
- `--orbit-rotation-speed`: Controls the timing loop of the orbiting planetary nodes (default: `20s`).
- `--orbit-bounce-speed`: Controls the secondary subtle floating levitation effect (default: `6s`).