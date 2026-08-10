# Pulsing Heart Animation

An interactive heart icon that pulses with realistic beat animation, featuring scale transitions, color fill toggle, and glow effects.

## Features

- **Pulse/Beat Animation** – Heart beats with realistic timing (14%, 28%, 42% keyframes)
- **Scale Easing** – Uses `cubic-bezier(0.34, 1.56, 0.64, 1)` for elastic feel
- **Color Fill Toggle** – Switch between outline and filled heart
- **Glow Effect** – Heart glows during each beat
- **Pulse Ring** – Expanding ring radiates from heart on each beat
- **Shadow Animation** – Shadow pulses with heartbeat
- **Single Beat** – Click heart for individual beat
- **Continuous Beating** – Start/stop continuous heartbeat
- **Keyboard Shortcuts** – SPACE to toggle beating, F to toggle fill
- **Beat Counter** – Tracks total beats
- **Status Display** – Shows current state

## Technologies Used

- HTML5
- CSS3 (Keyframes, Transitions, Animations, Pseudo-elements)
- Vanilla JavaScript (DOM manipulation, Event handling, Intervals)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/pulsing-heart-animation.git

2. Navigate to the project folder:
   cd pulsing-heart-animation

3. Open demo.html in your browser

## File Structure

pulsing-heart-animation/
├── demo.html     # HTML structure with embedded JavaScript
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

### Methods

| Action | Result |
|--------|--------|
| Click heart | Single beat animation |
| Click "Start Beating" | Continuous heartbeat every 800ms |
| Click "Stop" | Stops continuous beating |
| Click "Toggle Fill" | Switches between outline and filled heart |
| Press SPACE | Toggle continuous beating on/off |
| Press F | Toggle fill on/off |

### HTML Structure

```html
<div class="heart-container" id="heartContainer">
    <svg class="heart-icon" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
</div>