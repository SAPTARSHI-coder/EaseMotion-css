# Mood Toggle Switch

Switch that changes emotion emojis with animation, color transitions, and interactive controls.

## Features

- **Emoji Moods** – 16 different emotion emojis
- **Smooth Animation** – Bouncing emoji and sliding toggle
- **Color Transitions** – Track color changes with mood
- **Interactive Controls** – Click toggle or press SPACE
- **Random Mood** – Click emoji or press R for random
- **Mood Label** – Shows current mood name
- **Toggle Counter** – Tracks number of toggles
- **Keyboard Shortcuts** – SPACE to toggle, R for random
- **Haptic Feedback** – Scale animations on interaction
- **Touch Support** – Works on mobile devices
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Transitions, Flexbox)
- Vanilla JavaScript (DOM manipulation, Event handling)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/mood-toggle-switch.git

2. Navigate to the project folder:
   cd mood-toggle-switch

3. Open demo.html in your browser

## File Structure

mood-toggle-switch/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Click toggle | Change to next/previous mood |
| Click emoji | Random mood |
| SPACE | Toggle mood |
| R | Random mood |

### Moods

| Emoji | Label | Color |
|-------|-------|-------|
| 😊 | Happy | #ffd93d |
| 😍 | Love | #ff6b6b |
| 😂 | Funny | #ffa94d |
| 😎 | Cool | #4d96ff |
| 🤔 | Thinking | #a29bfe |
| 😌 | Relaxed | #6bcb77 |
| 🥳 | Celebrate | #ffd93d |
| 😴 | Sleepy | #9b59b6 |
| 🔥 | Fired Up | #ff6b35 |
| 💪 | Strong | #ff6b6b |
| 🙌 | Yay! | #ffd93d |
| ✨ | Magical | #e0a0ff |
| 🌈 | Colorful | #ff6b6b |
| 🎉 | Party | #ffa94d |
| 💖 | Heart | #ff6b6b |
| 🌟 | Star | #ffd93d |

## Customization

### Adding Moods

Add to the `moods` array:
```javascript
const moods = [
    { emoji: '😊', label: 'Happy', color: '#ffd93d' },
    // Add your moods here
];