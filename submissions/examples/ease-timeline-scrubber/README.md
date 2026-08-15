# Timeline Scrubber

Interactive timeline with thumb and progress markers, featuring play/pause controls, marker placement, and keyboard shortcuts.

## Features

- **Interactive Timeline** – Click and drag to scrub through time
- **Play/Pause** – Animated playback with smooth progress
- **Markers** – Add and manage time markers
- **Thumb Control** – Drag thumb for precise control
- **Tooltip** – Hover to see current time
- **Keyboard Shortcuts** – SPACE (play/pause), ← → (step), M (add marker), R (reset), C (clear markers)
- **Time Display** – Current and total time
- **Marker Count** – Track number of markers
- **Touch Support** – Works on mobile devices
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Transitions, Flexbox)
- Vanilla JavaScript (DOM manipulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/timeline-scrubber.git

2. Navigate to the project folder:
   cd timeline-scrubber

3. Open demo.html in your browser

## File Structure

timeline-scrubber/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click/drag timeline | Scrub through time |
| Drag thumb | Precise time control |
| "Play" | Start playback |
| "Pause" | Pause playback |
| "Reset" | Go to start |
| "Add Marker" | Add marker at current time |
| "Clear Markers" | Remove all markers |
| Click marker | Jump to marker position |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| SPACE | Play/Pause |
| ← | Step backward 1 second |
| → | Step forward 1 second |
| M | Add marker at current time |
| R | Reset to start |
| C | Clear all markers |

## How It Works

| Feature | Implementation |
|---------|---------------|
| Timeline | Percentage-based progress |
| Thumb | Absolute positioning on track |
| Playback | requestAnimationFrame loop |
| Markers | Stored times with visual indicators |
| Tooltip | Hover-triggered time display |

## Customization

### Duration

Modify `duration` variable:
```javascript
let duration = 300; // 5 minutes in seconds