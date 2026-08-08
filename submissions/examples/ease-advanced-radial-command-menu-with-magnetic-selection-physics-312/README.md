# Ease Advanced Radial Command Menu with Magnetic Selection Physics

A hardware-accelerated radial navigation menu featuring dynamic angle distribution and magnetic pointer attraction physics.

## Features
- **Trigonometric Radial Layout:** Arranges items along a circular path using pure CSS transforms.
- **Magnetic Pointer Attraction:** Cursor proximity calculates smooth offset physics (`--mag-x`, `--mag-y`).
- **Keyboard Shortcuts:** Built-in listener for `⌘K` / `Ctrl+K` toggling.

## Usage

1. Include `style.css` in your project's `<head>`.
2. Add the radial menu HTML structure to your document.
3. Attach mousemove listeners to compute magnetic offset variables.