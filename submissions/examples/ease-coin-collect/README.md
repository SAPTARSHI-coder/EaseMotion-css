# Coin Collect · Spinning Coin with Chime 🪙

An interactive coin collection experience featuring a realistic 3D spinning coin, satisfying chime sound effects, sparkle particles, and a coin counter. Click or press Space to collect coins and hear the satisfying chime!

## Features

- 🪙 **3D Spinning Coin** – Realistic 3D rotation with front/back faces
- 🔔 **Chime Sound** – Rich, multi-tone chime using Web Audio API
- ✨ **Sparkle Effect** – Particle bursts on coin collection
- 📊 **Coin Counter** – Track collected coins and total wealth
- 🎮 **Interactive** – Click coin, press Space, or use Collect button
- 🔄 **Reset Function** – Reset coin count with sound feedback
- 💫 **Smooth Animations** – CSS transitions and keyframe animations

## How to Use

1. **Click** the coin, press **Spacebar**, or click the **COLLECT COIN** button
2. Watch the coin spin with a satisfying 3D animation
3. Hear a rich chime sound effect on each collection
4. See sparkle particles burst from the coin
5. Track your coins with the live counter
6. Press **R** or click **RESET** to start over

## Audio Chime Details

The chime sound is generated using Web Audio API and consists of:
- **Main tone** – A5 (880Hz) sine wave
- **Harmony tone** – E6 (1320Hz) sine wave (fifth)
- **Bell-like tone** – A6 (1760Hz) sine wave (octave)
- **Sparkle noise** – Subtle noise burst for added texture

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **3D Coin** – Uses CSS 3D transforms with perspective
- **Coin Faces** – Front: "$1", Back: "★⭐"
- **Animations** – CSS keyframes for spin, collect, and hover effects
- **Audio** – Web Audio API with multiple oscillators
- **Particles** – JavaScript-generated sparkle elements
- **Keyboard** – Space to collect, R to reset

## Controls

| Action | Method |
|--------|--------|
| Collect Coin | Click coin / Spacebar / Collect button |
| Reset Game | R key / Reset button |
| Hover Effect | Mouse over coin (scale up) |

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Audio requires Web Audio API support (all modern browsers)
- Mobile browsers with touch support

## Customization

You can easily customize:
- **Coin color:** Change `#ffd700` and `#b8860b` in CSS
- **Coin faces:** Edit `coin-front` and `coin-back` HTML
- **Chime pitch:** Modify frequency values in `playChime()`
- **Sparkle count:** Adjust the loop in `createSparkles()`
- **Animation speed:** Change `0.6s` in `@keyframes coinSpin`

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Collect coins, hear the chime, and watch the sparkles fly!*