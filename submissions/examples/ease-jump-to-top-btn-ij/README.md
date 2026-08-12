# Jump to Top Button

A "Back to Top" button that appears with a smooth fade + slide animation when the user scrolls down past a threshold. Clicking smoothly scrolls the page back to the top.

## Features

- Fixed position button in the bottom-right corner
- Hidden when near the top of the page
- Fades in and slides up on scroll past the threshold
- Smooth scroll-to-top on click
- Accessible with `aria-label`
- Configurable via CSS custom properties

## CSS Custom Properties

| Property            | Default   | Description              |
| ------------------- | --------- | ------------------------ |
| `--jtt-duration`   | `0.3s`    | Transition duration      |
| `--jtt-btn-bg`     | `#4f46e5` | Button background color  |
| `--jtt-btn-color`  | `#ffffff` | Button text color        |
| `--jtt-btn-shadow` | `0 4px 12px rgba(0,0,0,0.2)` | Button box-shadow |
| `--jtt-btn-size`   | `1rem`    | Button font size         |
| `--jtt-radius`     | `8px`     | Button border-radius     |
