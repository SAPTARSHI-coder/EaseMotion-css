# 🏃 Dodge Reaction – Moves Away from Cursor Like Dodging

An interactive dodge reaction where a character skillfully dodges away from your cursor with fluid, responsive motion. Move your cursor near the character and watch it flee, jitter, or circle away with realistic, playful dodging behavior. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic dodging** – Character moves away from cursor with fluid motion
- **Multiple dodge modes** – Flee, Jitter, and Circle modes
- **Responsive interaction** – Instant reaction to cursor movement
- **Visual feedback** – Trail particles, dodge zone ring, character rotation
- **Particle effects** – Glowing particles burst on dodge
- **Adjustable parameters** – Dodge speed (1-20×), distance (20-150px), zone (30-200px), character size (30-80px)
- **Interactive controls** – Pause, Reset, and Mode toggle
- **Keyboard shortcuts** – Space (Pause), R (Reset), M (Mode)
- **Touch support** – Works on mobile devices
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Move your cursor near the character to make it dodge.
3. Interact with the controls:
   - Click **Pause** to pause/resume the animation
   - Click **Reset** to restore default settings
   - Click **Mode** to cycle through Flee, Jitter, and Circle modes
4. Adjust the sliders:
   - **Dodge Speed** – How fast the character moves (1-20×)
   - **Dodge Distance** – How far the character dodges (20-150px)
   - **Dodge Zone** – The trigger zone around the character (30-200px)
   - **Character Size** – Size of the character (30-80px)
5. Use **keyboard shortcuts**:
   - `Space` – Pause/Resume
   - `R` – Reset
   - `M` – Toggle mode

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, canvas layout, and responsive design
- `README.md` – you're reading it!

## 🧠 How It Works

- **Cursor tracking** – Character detects cursor position and distance
- **Dodge logic** – When cursor enters the dodge zone, character moves away
- **Smooth motion** – Fluid interpolation for natural dodging feel
- **Three modes** – Flee (direct away), Jitter (with randomness), Circle (circular pattern)
- **Animation loop** – Uses `requestAnimationFrame` for smooth 60fps updates

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| Dodge Speed | How fast the character moves (1-20×) | 8× |
| Dodge Distance | How far the character dodges (20-150px) | 70px |
| Dodge Zone | The trigger zone around the character (30-200px) | 100px |
| Character Size | Size of the character (30-80px) | 50px |
| Dodge Modes | Flee, Jitter, Circle | Flee |

### Modifying Dodge Behavior

```javascript
// In updateDodge() function – adjust dodge logic
const moveSpeed = speed * 0.1; // Change 0.1 for different smoothness

// Mode-specific behavior
case 'flee':
  // Flee directly away from cursor
  break;
case 'jitter':
  // Add random jitter to dodge direction
  targetDX += (Math.random() - 0.5) * 30;
  targetDY += (Math.random() - 0.5) * 30;
  break;
case 'circle':
  // Dodge in a circular pattern
  const perpAngle = angle + Math.PI / 2 * (Math.random() > 0.5 ? 1 : -1);
  targetDX = Math.cos(perpAngle) * distance * 0.7;
  targetDY = Math.sin(perpAngle) * distance * 0.7;
  break;