# Raindrop Splash

Droplets hitting surface with ripple rings and splash particles, creating a realistic water simulation with multiple modes and interactive controls.

## Features

- **Ripple Rings** – Expanding ripple rings with wave distortion
- **Splash Particles** – Realistic particle splashes on impact
- **Falling Droplets** – Animated droplets with trails
- **4 Modes** – Rain, Drops, Storm, Calm
- **4 Speed Settings** – Slow, Normal, Fast, Very Fast
- **Interactive** – Click anywhere to create splashes
- **Water Surface** – Reflective water surface with ripples
- **Particle System** – Splash particles with gravity and wobble
- **Keyboard Shortcuts** – D (drop), M (mode), S (speed), R (reset), SPACE (quick drop)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/raindrop-splash.git

2. Navigate to the project folder:
   cd raindrop-splash

3. Open demo.html in your browser

## File Structure

raindrop-splash/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click canvas | Create splash at cursor |
| "Drop" | Create random splash |
| "Mode: Rain" | Cycle through 4 modes |
| "Speed: Normal" | Cycle through 4 speeds |
| "Reset" | Reset to default |
| D | Create drop |
| M | Cycle modes |
| S | Cycle speeds |
| R | Reset |
| SPACE | Quick drop |

### Modes

1. **Rain** – Continuous light rain
2. **Drops** – Manual drops only
3. **Storm** – Heavy rain with frequent drops
4. **Calm** – No automatic drops

### Speed Options

- **Slow** – 0.008 (gentle motion)
- **Normal** – 0.02 (balanced)
- **Fast** – 0.04 (quick motion)
- **Very Fast** – 0.07 (rapid motion)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Ripple rings | Expanding circles with wave distortion |
| Splash particles | Physics-based particles with gravity |
| Falling drops | Animated droplets with trails |
| Water surface | Reflective line with wave animation |
| Modes | Different drop generation rates |

## Customization

### Ripple Parameters

Modify in `Ripple` class:
- `maxRadius` – Maximum ripple size (40-100)
- `waveCount` – Number of wave distortions (3-7)
- `layers` – Number of ripple layers (2-5)

### Splash Parameters

Modify in `Splash` class:
- `numParticles` – Number of splash particles (8-20)
- `gravity` – Particle fall speed (0.08-0.13)
- `maxAge` – Splash lifespan (30-60 frames)

### Drop Parameters

Modify in `FallingDrop` class:
- `speed` – Drop fall speed (2-5)
- `size` – Drop size (1-4)
- `maxTrail` – Trail length (8-16)

## Keyboard Shortcuts

- **D** – Create drop
- **M** – Cycle modes
- **S** – Cycle speeds
- **R** – Reset
- **SPACE** – Quick drop

## Browser Support

Works in all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License – Free for personal and commercial use

## Author

Your Name – [Your GitHub Profile URL]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using pure vanilla web technologies