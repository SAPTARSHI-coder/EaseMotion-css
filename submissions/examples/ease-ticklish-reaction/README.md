# 🤭 Ticklish Reaction – Wobbles and Giggles on Hover

An interactive ticklish reaction that wobbles and giggles when you hover over it, creating a playful, joyful experience with physics-based motion, particle effects, and expressive emoji reactions. Watch as the emoji squirms, wobbles, and changes expressions while giggling particles burst outward. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Ticklish reaction** – Wobbles and giggles on hover
- **Expressive emojis** – Changes from 🤭 to 😊 to 😂 to 😆 to 🤣 to 😹
- **Physics-based wobble** – Organic, bouncy motion with sine-wave movement
- **Giggle particles** – Colorful particles burst from the emoji
- **Adjustable parameters** – Ticklishness (0-100%), wobble speed (1-10×), giggle duration (1-10×)
- **Interactive controls** – Tickle, Reset, and Pause buttons
- **Keyboard shortcuts** – T (Tickle), R (Reset), Space (Pause)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Interact with the ticklish emoji:
   - **Hover** over the emoji to make it giggle
   - Click **Tickle** for a quick giggle burst
   - Click **Reset** to restore default settings
   - Click **Pause** to pause/resume the animation
   - Click the **canvas** to tickle
3. Adjust the sliders:
   - **Ticklishness** – How sensitive the reaction is (0-100%)
   - **Wobble Speed** – How fast it wobbles (1-10×)
   - **Giggle Duration** – How long the giggles last (1-10×)
4. Use **keyboard shortcuts**:
   - `T` – Tickle
   - `R` – Reset
   - `Space` – Pause/Resume

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Ticklish physics** – Sine-wave wobble with intensity-based motion
- **Emoji states** – Changes expression based on tickle intensity
- **Particle system** – Colorful particles burst from the emoji
- **Hover detection** – Continuous tickling while hovering
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Ticklishness | Sensitivity (0-100%) | 70% |
| Wobble Speed | How fast it wobbles (1-10×) | 5× |
| Giggle Duration | How long giggles last (1-10×) | 5× |
| Emoji States | 7 expressive emojis | 🤭, 😊, 😂, 😆, 🤣, 😹 |

### Modifying Reaction Behavior

```javascript
// In updateTicklish() function – adjust wobble physics
const wobbleAmount = giggleIntensity * intensity * 15; // Wobble amplitude
const wobbleSpeed = 2 + speed * 2; // Wobble frequency

// Emoji state transitions
if (giggleIntensity > 0.5) {
  const emojiIndex = Math.floor((giggleIntensity - 0.5) * 4) % 4;
  emojiFace.textContent = ['😂', '😆', '🤣', '😹'][emojiIndex] || '😂';
}