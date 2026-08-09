# 🌡️ Thermometer – Rises/Falls with Temperature Indicator

An interactive thermometer that simulates rising and falling temperatures with smooth animations, real-time color feedback, and multiple control methods. Adjust the temperature with buttons, slider, or keyboard shortcuts—watch the mercury rise and fall with fluid motion while the color shifts from cool blue to hot red. Built with pure HTML, CSS, and JavaScript – no external dependencies.

## ✨ Features

- **Realistic thermometer** – Mercury column rises and falls with smooth animation
- **Temperature range** – -20°C to 100°C with real-time display
- **Dynamic color feedback** – Mercury and indicator shift from blue (cold) to red (hot)
- **Multiple control methods** – Buttons, slider, keyboard shortcuts, click on thermometer
- **Preset temperatures** – Cycle through common temperatures with one click
- **Random temperature** – Generate random temperatures for exploration
- **Heat/Cool controls** – Incrementally raise or lower temperature
- **Status messages** – Contextual feedback for every action
- **State labels** – Displays current condition (Freezing, Cold, Cool, Normal, Warm, Hot, Extreme Heat)
- **Keyboard shortcuts** – ↑/↓ (adjust), H (heat), C (cool), R (random), 0,2,4,8 (presets)
- **Responsive design** – Adapts to any screen size

## 🚀 How to Use

1. Open `demo.html` in any modern browser (no server required).
2. Adjust the temperature:
   - Click **Heat Up** to increase temperature
   - Click **Cool Down** to decrease temperature
   - Click **Preset** to cycle through common temperatures
   - Click **Random** for a random temperature
   - Drag the **slider** for precise control
   - Click the thermometer body to cycle presets
3. Use **keyboard shortcuts**:
   - `↑` – Increase temperature
   - `↓` – Decrease temperature
   - `H` – Heat up
   - `C` – Cool down
   - `R` – Random temperature
   - `P` – Preset cycle
   - `0` – Set to 0°C (Freezing)
   - `2` – Set to 25°C (Room Temperature)
   - `4` – Set to 40°C (Hot)
   - `8` – Set to 80°C (Very Hot)
4. Watch the mercury rise/fall with smooth animation and color changes.

## 🧩 Files Included

- `demo.html` – complete interactive page (HTML + embedded JavaScript)
- `style.css` – all styling, thermometer design, and responsive layout
- `README.md` – you're reading it!

## 🧠 How It Works

- **Mercury simulation** – The mercury column height maps to temperature (0°C = 40%, 100°C = 90%)
- **Color mapping** – Temperature maps to hue (blue at -20°C → red at 100°C)
- **Smooth animation** – Uses `requestAnimationFrame` with easeOutCubic for fluid transitions
- **State detection** – Automatic classification of temperature ranges (Freezing, Cold, Cool, Normal, Warm, Hot, Extreme Heat)
- **Multiple inputs** – Buttons, slider, keyboard, and click events all update the same state

## 🎨 Customization

| Parameter | Description | Default |
|-----------|-------------|---------|
| `MIN_TEMP` | Minimum temperature | -20°C |
| `MAX_TEMP` | Maximum temperature | 100°C |
| `temperature` | Current temperature | 25°C |
| Heat increment | Temperature increase per click | 15°C (above 50°C: 8°C) |
| Cool decrement | Temperature decrease per click | 15°C (below 0°C: 8°C) |
| Animation duration | Transition time | 800ms |

### Adjusting Temperature Range

```javascript
// Modify these constants at the top of the script
const MIN_TEMP = -30;  // Extend cold range
const MAX_TEMP = 120;  // Extend hot range