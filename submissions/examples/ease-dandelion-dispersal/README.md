# Dandelion Dispersal

Seeds floating away when blown with interactive wind, creating a magical dandelion seed dispersal simulation.

## Features

- **Seed Dispersal** – Seeds float away when blown
- **Interactive Wind** – 4 wind levels (Gentle, Moderate, Strong, Gusty)
- **Realistic Physics** – Seeds with wobble, gravity, and wind effects
- **Fluff Details** – Detailed seed parachutes with fluff
- **Trail Effects** – Seeds leave subtle trails
- **Stem Animation** – Stem sways with wind
- **Click to Blow** – Click the dandelion center to blow
- **Auto-Dispersal** – Auto-blows when few seeds remain
- **Keyboard Shortcuts** – B (blow), W (wind), R (reset), SPACE (blow)
- **FPS Counter** – Real-time frame rate display
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Gradients, Flexbox)
- Canvas API (2D context with gradients and shadows)
- Vanilla JavaScript (Particle physics, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/dandelion-dispersal.git

2. Navigate to the project folder:
   cd dandelion-dispersal

3. Open demo.html in your browser

## File Structure

dandelion-dispersal/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Blow" | Blow seeds from the dandelion |
| "Wind: Gentle" | Cycle through 4 wind levels |
| "Reset" | Reset to full dandelion |
| Click center | Blow seeds |
| B | Blow |
| W | Cycle wind |
| R | Reset |
| SPACE | Blow |

### Wind Levels

- **Gentle** – Light breeze (0.02)
- **Moderate** – Medium wind (0.04)
- **Strong** – Strong wind (0.07)
- **Gusty** – Powerful gusts (0.12)

## How It Works

| Feature | Implementation |
|---------|---------------|
| Seed physics | Velocity, wind, gravity, wobble |
| Dispersal | Seeds launch with random angles |
| Wind effect | Wind strength applied to seed velocity |
| Fluff detail | Parachute-like fluff structure |
| Stem sway | Wind-induced stem movement |

## Customization

### Wind Levels

Modify in `windLevels` array:
```javascript
const windLevels = [
    { name: 'Custom', value: 0.05 },
];