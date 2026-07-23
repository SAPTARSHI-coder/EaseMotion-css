# Animated Weather Card

An interactive weather card with rotating sun, drifting clouds, bouncing temperature animations, and day/night toggle.

## Features

- **Sun/Moon Rotation** – Celestial body rotates continuously with glow effect
- **Glow Pulse Animation** – Radiant glow rings pulse around the sun
- **Cloud Drift** – Clouds float across the card with varying speeds
- **Temperature Bounce** – Temperature numbers animate with bounce easing
- **Day/Night Toggle** – Switch between day and night modes
- **Temperature Controls** – Increase/decrease temperature with smooth animation
- **Dynamic Weather Conditions** – Changes based on temperature value
- **Glassmorphism Design** – Modern blurred backdrop effects
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Keyframes, Flexbox, Grid, Glassmorphism)
- Vanilla JavaScript (DOM manipulation, AnimationFrame)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/animated-weather-card.git

2. Navigate to the project folder:
   cd animated-weather-card

3. Open demo.html in your browser

## File Structure

animated-weather-card/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

Simply open demo.html in your browser. The card includes:

- Click "Switch to Night" to toggle day/night mode
- Click "+ Temp" to increase temperature (bounce animation)
- Click "- Temp" to decrease temperature (bounce animation)

## Customization

### Colors
Modify gradient values in style.css:
- Day background: .weather-card { background: linear-gradient(...) }
- Night background: .weather-card.night { background: linear-gradient(...) }
- Sun gradient: .sun { background: radial-gradient(...) }

### Animation Speed
Adjust transition durations:
- Card transition: transition: all 0.8s cubic-bezier(...)
- Sun glow: animation: sunGlow 3s ease-in-out infinite alternate
- Cloud drift: animation-duration in cloud classes
- Temperature: duration: 600ms in JavaScript

### Temperature Range
Modify in JavaScript:
- Min: Math.max(-20, Math.min(120, value))
- Change step: setTemperature(currentTemp + 5) or -5

## How It Works

| Feature | Implementation |
|---------|---------------|
| Sun rotation | CSS transform: rotate() updated via setInterval |
| Glow rings | CSS @keyframes ringPulse with scale and opacity |
| Cloud drift | CSS @keyframes cloudDrift with translateX |
| Temperature bounce | JavaScript requestAnimationFrame with easeOutBounce |
| Day/Night toggle | JavaScript toggles .night class and updates styles |

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