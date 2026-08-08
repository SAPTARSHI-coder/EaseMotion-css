# ease-floating-label-textarea

A reusable floating label textarea component with auto-resize, live character counter, clear control, disabled/read-only states, and visual variants.

## Overview

`ease-floating-label-textarea` demonstrates a modern textarea experience with a label that floats on focus or when text is present. It also includes auto-growing height, character limit feedback, and polished focus styling.

## Features

- Floating label animation for focus and populated state
- Auto-resizing textarea up to a maximum height of 300px
- Live character counter with warning and error states
- Clear button for easy reset
- Disabled state example
- Read-only state example
- Success and error visual variants
- Keyboard accessible and screen-reader friendly

## Folder Structure

```
submissions/examples/ease-floating-label-textarea/
├── demo.html
├── script.js
├── style.css
└── README.md
```

## Installation

No packages are required. Open `demo.html` in a browser to view the component.

## Usage

- Type into the textarea to see the floating label and live character counter.
- Use the `Clear` button to reset the textarea and return the label to its starting position.
- The textarea automatically expands as you type until it reaches the 300px max height.
- The live counter changes color when character count reaches 450 and displays an error state at 500.

## Accessibility

- Uses a proper `<label for="message">` and `textarea` pairing.
- The character counter is announced with `aria-live="polite"`.
- Buttons are native HTML controls, ensuring keyboard accessibility.
- Focus-visible styles are provided for clear keyboard navigation.

## Browser Compatibility

Supports modern browsers with standard HTML, CSS, and JavaScript. The component uses CSS transitions, keyframe animations, and accessible form markup.

## Customization

- Adjust `MAX_CHARS` and `MAX_HEIGHT` in `script.js`.
- Edit the floating label text, placeholder, or variant examples in `demo.html`.
- Change colors and spacing in `style.css` to match a design system.
