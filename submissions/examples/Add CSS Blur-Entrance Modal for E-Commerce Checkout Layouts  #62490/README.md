# CSS Blur-Entrance Modal for E-Commerce Checkout

A highly polished, pure CSS modal component designed for e-commerce workflows (such as adding payment methods, entering discount codes, or confirming orders). It features a cinematic "Blur-Entrance" transition where the modal gracefully scales up and unblurs into focus, creating a deep, premium user experience.

## Features

- **Pure CSS Interactivity**: Relies entirely on the hidden checkbox trick (`input[type="checkbox"] + label`). This seamlessly manages the modal's open, close, and backdrop-click behaviors without a single line of JavaScript.
- **Blur-Entrance Animation**: Utilizes CSS `filter: blur()` combined with `transform: scale()` on the modal container to create a depth-of-field entrance effect.
- **Glassmorphism Backdrop**: The backdrop elegantly blurs the main application content behind it using `backdrop-filter`.
- **Pure CSS Credit Card**: The demo includes a sleek, CSS-only credit card preview to fit the e-commerce checkout context perfectly.
- **Fully Responsive**: Perfectly centered on desktop and seamlessly adapts width and padding for mobile viewports.
- **Accessibility Integrated**: Heavily respects `@media (prefers-reduced-motion: reduce)` by bypassing the intensive blur and scale computations, falling back to a clean, lightning-fast opacity crossfade.

## File Structure

```
Add CSS Blur-Entrance Modal for E-Commerce Checkout Layouts  #62490/
├── demo.html     # Semantic layout mimicking a premium e-commerce checkout interface
├── style.css     # CSS rules encapsulating the modal state logic and blur transitions
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The CSS Checkbox Hack
The `.modal-checkbox` is placed at the very top level of the DOM. Clicking the backdrop, the "Add New Payment Method" button, or any of the "Cancel" / "Save" buttons checks or unchecks this box. We then use the general sibling combinator `~` to target the modal container and backdrop overlay, triggering their entrance transitions.

### The Blur Transition
We employ a custom `--ease-blur: cubic-bezier(0.16, 1, 0.3, 1);` timing function to make the entrance feel incredibly responsive yet soft. 
The modal transitions three distinct properties simultaneously:
1. `transform` (scaling from 0.9 up to 1)
2. `filter` (unblurring from 12px to 0)
3. `opacity` (fading from 0 to 1)

## Custom Properties

You can customize the modal's behavior and colors by tweaking the CSS variables at the top of `style.css`:

```css
:root {
  --primary: #4f46e5;            /* Main brand color */
  --bg-main: #f3f4f6;            /* Background of the main page */
  --surface: #ffffff;            /* Modal and card surface color */
  --ease-blur: cubic-bezier(0.16, 1, 0.3, 1); /* Custom entrance spring */
  --modal-transition-speed: 0.6s; /* Duration of the blur entrance */
}
```

## Usage

1. Open `demo.html` in any modern web browser.
2. Click the dashed "Add New Payment Method" button to witness the pure CSS Blur-Entrance effect!
