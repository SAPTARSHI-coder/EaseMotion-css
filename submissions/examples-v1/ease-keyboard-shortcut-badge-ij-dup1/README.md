# Keyboard Shortcut Badge

A component that renders keyboard shortcuts as physical-key-like badges with a press animation on click.

## Features

- Badges styled to resemble physical keyboard keys (bevel/shadow effect)
- Click/tap triggers a scale-down press animation
- Groups of related shortcuts displayed in a responsive grid
- Visual feedback area showing which shortcut was pressed
- Fully themable via CSS custom properties

## CSS Custom Properties

| Property            | Default   | Description              |
| ------------------- | --------- | ------------------------ |
| `--ksb-duration`   | `0.12s`   | Key press animation duration |
| `--ksb-key-bg`     | `#f3f4f6` | Key background color     |
| `--ksb-key-color`  | `#1f2937` | Key text color           |
| `--ksb-key-shadow` | `0 3px 0 0 #9ca3af, …` | Key box-shadow |
| `--ksb-radius`     | `6px`     | Key border-radius        |
| `--ksb-font-size`  | `0.85rem` | Key font size            |
