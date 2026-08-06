# 👀 Curiosity Rise – Peeks Up Like a Curious Creature

An adorable, interactive curiosity effect where a cute creature peeks up from hiding when you hover over it—creating a playful, heartwarming experience with expressive eyes, perked ears, floating question marks, and sparkling particles. Watch as the creature rises with curiosity, peeking out to see what's happening. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Adorable peeking creature** – Rises from hiding with curiosity
- **Expressive reactions** – Eyes and mouth change with curiosity level
- **Perked ears** – Ears perk up when peeking
- **Particle effects** – Sparkles burst on peek
- **Floating question marks** – Question marks orbit when curious
- **Adjustable parameters** – Curiosity level (0-100%), peek speed (1-10×), color (0-360°)
- **Interactive controls** – Pause, Reset, and Peek buttons
- **Keyboard shortcuts** – Space (Pause), R (Reset), P (Peek)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. **Hover** over the creature to make it peek up.
3. Interact with the controls:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Peek** for an instant peek burst
   - Click the **canvas** to trigger a peek
4. Adjust the sliders:
   - **Curiosity Level** – How much the creature peeks (0-100%)
   - **Peek Speed** – How fast the creature peeks (1-10×)
   - **Color** – Hue of the effects (0-360°)
5. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `P` – Peek

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Peek system** – Smooth rise from hiding with scaling and opacity
- **Expressive reactions** – Eyes and mouth change based on peek level
- **Particle system** – Sparkles burst on peek
- **Question marks** – Float around when curious
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Curiosity Level | How much the creature peeks (0-100%) | 70% |
| Peek Speed | How fast the creature peeks (1-10×) | 5× |
| Color | Hue (0-360°) | 220° (blue) |
| Eye States | 3 expressive states | 👀 → 👁️ → 👀 |

### Modifying Peek Behavior

```javascript
// In updatePeek() function – adjust transition
const diff = targetPeek - peekProgress;
peekProgress += diff * 0.06 * speed; // Change 0.06 for different smoothness

// Eye state transitions
if (peekHeight > 0.7) {
  creatureEyes.textContent = '👀';
  creatureMouth.textContent = '😮';
} else if (peekHeight > 0.3) {
  creatureEyes.textContent = '👁️';
  creatureMouth.textContent = '👄';
}