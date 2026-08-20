# 🔮 Echo Chamber

Echo Chamber is an interactive ripple-memory component where each user
interaction creates a temporary visual echo.

Every click produces a circular wave that expands outward and gradually fades,
allowing multiple interactions to overlap and create an evolving visual field.

## ✨ Features

- Click-generated echoes
- Multiple simultaneous animations
- Expanding ripple effect
- Smooth fade-out
- Echo counter
- Intensity control
- Clear functionality
- Center glow
- Mouse-position-based placement
- Keyboard interaction
- Responsive design
- No external dependencies

## 🎮 Controls

### Click

Click anywhere inside the field to create an echo at that location.

### Echo Intensity

Controls the initial size of generated echoes.

### Clear Echoes

Immediately removes all active echoes.

### Keyboard

- `Space` — Create an echo at the center
- `R` — Clear all echoes

## 🧠 Animation System

Each interaction creates a new DOM element.

The element receives a randomized visual size based on the selected intensity
and is positioned relative to the click location.

CSS animation then controls:

- Initial scale
- Opacity
- Expansion
- Final disappearance

Multiple echoes can exist simultaneously, allowing their animations to overlap.

## 🎨 Design Philosophy

Echo Chamber is based around the idea that interaction can leave a temporary
visual trace.

Instead of replacing the previous interaction, every action becomes another
animated layer.

This creates a simple but expressive interaction model suitable for
experimental interfaces, landing pages, creative portfolios, and ambient UI
components.

## 🛠️ Technologies

- HTML5
- CSS3
- CSS animations
- JavaScript ES6
- DOM manipulation

## 📁 Files

```text
echo-chamber/
├── demo.html
├── style.css
└── README.md
📜 License

MIT License.