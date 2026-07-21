# Animated Terminal / CLI Emulator

A sleek, modern, and fully responsive **Terminal Emulator Component** perfect for developer portfolios, CLI tool documentation, and tech landing pages. This example demonstrates how to combine **EaseMotion CSS** for smooth window entrances, staggered line reveals, and a blinking cursor to create a realistic, engaging command-line interface.

## 🚀 Features

- **Smooth Window Entrance**: The terminal window scales into view using `ease-zoom-in` for a premium feel.
- **Interactive Window Controls**: The red, yellow, and green dots use `ease-hover-grow` for tactile feedback.
- **Staggered Line Reveals**: Each command and output line fades in sequentially using `ease-fade-in-left` and `ease-delay-*` to simulate typing.
- **Blinking Cursor**: The cursor at the end of the final command uses `ease-pulse` to simulate an active terminal waiting for input.
- **Syntax Highlighting**: Distinct colors for prompts (green), paths (blue), commands (white), and outputs (success/info/warning/error).
- **Multiple Variations**: Includes a standard success flow and an error state terminal.
- **Monospace Font**: Uses system monospace fonts for an authentic CLI look.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted font sizes and hidden title on small devices.

## 📂 File Structure

```text
submissions/examples/animated-terminal-emulator/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for terminal styling, syntax colors, and responsive behavior
└── README.md    # Documentation