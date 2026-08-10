# 👍 Nodding Approval – Nods When Interacted With

An interactive, heartwarming character that nods in approval when you click or interact with it—creating a positive, affirming experience with spring-like nodding motion, sparkling particles, and expressive face changes. Click the character to see it nod with enthusiasm and approval. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Satisfying nod animation** – Character nods with spring-like physics
- **Expressive reactions** – Eyes and mouth change when nodding
- **Sparkle effects** – Particles burst on each nod
- **Floating approval icons** – Thumbs up orbit around the character
- **Adjustable parameters** – Enthusiasm (0-100%), nod speed (1-10×), color (0-360°)
- **Interactive controls** – Pause, Reset, and Nod buttons
- **Keyboard shortcuts** – Space (Pause), R (Reset), N (Nod)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. **Click** the character to make it nod in approval.
3. Interact with the controls:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Nod** for an instant nod
   - Click the **canvas** to trigger a nod
4. Adjust the sliders:
   - **Enthusiasm** – How enthusiastic the nod is (0-100%)
   - **Nod Speed** – How fast the character nods (1-10×)
   - **Color** – Hue of the effects (0-360°)
5. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `N` – Nod

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Spring physics** – Spring-damper system creates realistic nodding motion
- **Expressive faces** – Changes from 😊 to 🙂 to 😊 based on nod intensity
- **Particle system** – Sparkles burst on each nod
- **Thumbs up icons** – Float around when nodding
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Enthusiasm | How enthusiastic the nod is (0-100%) | 70% |
| Nod Speed | How fast the character nods (1-10×) | 5× |
| Color | Hue (0-360°) | 220° (blue) |
| Face States | 3 expressive states | 😊 → 🙂 → 😊 |

### Modifying Nod Behavior

```javascript
// In updateNod() function – adjust spring physics
const stiffness = 0.15 * speed; // Change 0.15 for different spring stiffness
const damping = 0.85; // Change 0.85 for different damping

// Face state transitions
if (Math.abs(nodAngle) > 0.15) {
  characterEyes.textContent = '😊';
  characterMouth.textContent = '👍';
} else if (Math.abs(nodAngle) > 0.05) {
  characterEyes.textContent = '🙂';
  characterMouth.textContent = '👌';
}