# Animated Command Palette (Cmd+K)

A sleek, modern, and fully responsive **Command Palette** component inspired by VS Code, Linear, and Raycast. This example demonstrates how to combine **EaseMotion CSS** for modal entrances, staggered list animations, and smooth transitions to create a polished, keyboard-first interface.

## 🚀 Features

- **Smooth Modal Entrance**: Uses `ease-zoom-in` to elegantly reveal the palette with a scale and fade effect.
- **Backdrop Blur**: The overlay uses `backdrop-filter: blur()` for a modern, frosted glass effect.
- **Staggered Command Entrances**: Each command fades in sequentially using `ease-fade-in-up` and `ease-delay-*` for a cascading load effect.
- **Categorized Sections**: Commands are grouped into sections (Navigation, Actions, Theme) with clear headers.
- **Keyboard Shortcut Hints**: Each command displays its keyboard shortcut in a styled `<kbd>` element.
- **Interactive Hover States**: Commands smoothly change background color on hover using `ease-hover-grow`.
- **Keyboard Navigation Hints**: Footer displays navigation shortcuts (↑↓, ↵, ESC) for discoverability.
- **Keyboard Triggers**: Opens with `⌘K` (Mac) or `Ctrl+K` (Windows), closes with `ESC`.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizing.

## 📂 File Structure

```text
submissions/examples/animated-command-palette/
├── demo.html    # HTML structure, EaseMotion utility classes, and JavaScript
├── style.css    # Custom CSS for modal, commands, and keyboard hints
└── README.md    # Documentation