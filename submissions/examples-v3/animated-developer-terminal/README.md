# Animated Developer Terminal

A sleek, dark-mode **Developer Terminal UI** that simulates a live command-line session. This example demonstrates how to use **EaseMotion CSS** to create staggered, line-by-line fade-ins and a smoothly blinking cursor, bringing a static code snippet to life without writing any JavaScript.

## 🚀 Features

- **Staggered Line Entrances**: Uses `ease-fade-in-left` combined with `ease-delay-*` classes so each command and output appears sequentially, mimicking real-time typing.
- **Smooth Blinking Cursor**: The waiting cursor at the bottom uses `ease-pulse` for a continuous, smooth blinking effect.
- **macOS Window Controls**: Features the classic red, yellow, and green window dots for a familiar desktop aesthetic.
- **Syntax Highlighting**: Custom CSS variables define distinct colors for the prompt, file path, commands, and success outputs.
- **Responsive Design**: On mobile devices, the text wraps gracefully, and the header title is hidden to save space.

## 📂 File Structure

```text
submissions/examples/animated-developer-terminal/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for dark theme, syntax colors, and layout
└── README.md    # Documentation