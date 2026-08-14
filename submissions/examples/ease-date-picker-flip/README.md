# Date Picker with Flip

Date picker with flip animation like old clocks, featuring flip card animation, keyboard shortcuts, and interactive controls.

## Features

- **Flip Animation** – Smooth flip card animation like old clocks
- **Day/Month/Year Selection** – Independent control for each
- **Keyboard Shortcuts** – ← → (day), Ctrl+← → (month), Shift+← → (year)
- **Today Button** – Jump to current date
- **Random Date** – Generate random date
- **Reset** – Reset to initial date
- **Flip Queue** – Queues flips during animation
- **Responsive** – Adapts to all screen sizes
- **3D Perspective** – Realistic flip card effect
- **Glow Effects** – Subtle glow on cards

## Technologies Used

- HTML5
- CSS3 (3D Transforms, Animations, Flexbox)
- Vanilla JavaScript (DOM manipulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/date-picker-flip.git

2. Navigate to the project folder:
   cd date-picker-flip

3. Open demo.html in your browser

## File Structure

date-picker-flip/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| ◀ ▶ buttons | Change day/month/year |
| "Today" | Jump to current date |
| "Random" | Generate random date |
| "Reset" | Reset to initial date |
| ← → | Change day |
| Ctrl+← → | Change month |
| Shift+← → | Change year |
| T | Today |
| R | Reset |
| SPACE | Random date |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| ← → | Change day |
| Ctrl+← → | Change month |
| Shift+← → | Change year |
| T | Today |
| R | Reset |
| SPACE | Random date |

## How It Works

| Feature | Implementation |
|---------|---------------|
| Flip animation | CSS 3D transforms with rotateX |
| Date management | JavaScript Date object |
| Keyboard shortcuts | Keydown event listeners |
| Flip queue | Queues flips during animation |

## Customization

### Flip Speed

Modify in CSS:
```css
.flip-card-inner {
    transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
}