# Star Rating with Explosion

Stars animate when selected with sparkle bursts, featuring particle explosions, hover effects, and rating feedback.

## Features

- **Animated Stars** – Stars scale and rotate on selection
- **Sparkle Explosion** – Particle bursts when rating is set
- **Hover Effects** – Stars scale up on hover
- **Rating Feedback** – Displays rating text and value
- **Total Ratings** – Tracks number of ratings
- **Keyboard Shortcuts** – 1-5 for quick rating, R to reset, SPACE for random
- **Particle System** – Star and circle particles with gravity
- **Glow Effects** – Stars glow when active
- **Random Rating** – Generate random rating with explosion
- **Touch Support** – Works on mobile devices
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Transitions, Flexbox)
- Canvas API (2D rendering for particles)
- Vanilla JavaScript (DOM manipulation, Particle system, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/star-rating-explosion.git

2. Navigate to the project folder:
   cd star-rating-explosion

3. Open demo.html in your browser

## File Structure

star-rating-explosion/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click star | Set rating with explosion |
| Hover star | Preview rating |
| "Reset" | Clear rating |
| "Random" | Set random rating with explosion |
| 1-5 | Quick rating |
| R | Reset |
| SPACE | Random rating |

### Rating Labels

| Rating | Label |
|--------|-------|
| 1 | Terrible |
| 2 | Poor |
| 3 | Average |
| 4 | Good |
| 5 | Excellent |

## How It Works

| Feature | Implementation |
|---------|---------------|
| Stars | DOM elements with SVG |
| Rating | Index-based selection |
| Explosion | Particle system with canvas |
| Hover | Scale and preview |
| Keyboard | Keydown event listeners |

## Customization

### Star Colors

Modify `getColor()` method:
```javascript
getColor(index) {
    const colors = ['#ffd93d', '#ffc107', '#ffb300', '#ffa000', '#ff8f00'];
    return colors[index % colors.length];
}