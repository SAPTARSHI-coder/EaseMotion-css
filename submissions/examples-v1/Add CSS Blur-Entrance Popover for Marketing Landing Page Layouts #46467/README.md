# Ease Blur-Entrance Popover (Marketing Landing Page Edition)

A highly engaging, pure CSS blur-entrance popover component optimized for modern Marketing Landing Pages. It utilizes the native HTML `popover` API coupled with the CSS `@starting-style` to deliver a zero-JS, fully accessible, buttery smooth interaction.

## Features
- **Marketing Aesthetics**: Designed with high-contrast typography, punchy call-to-action buttons, subtle abstract background blurs, and clean whitespace.
- **Native HTML Popover API**: Seamlessly handles state management without any JavaScript, including light dismiss and focus trapping.
- **Pure CSS Animation**: Animates scaling (starting slightly larger for impact), blur, and opacity during entrance and exit phases natively.
- **Keyboard Accessible**: Leverages native accessibility properties from the browser, letting users interact safely with keyboards and screen readers.
- **EaseMotion Variables**: Easily customizable through standard `--ease-` prefixed variables.

## Usage
Simply embed `style.css` and use the semantic HTML structure showcased in `demo.html`.

### Customization
You can control the physics of the entrance transition by updating the variables in the `:root` pseudo-class:
```css
:root {
    --ease-popover-transition-duration: 0.6s;
    --ease-popover-transition-easing: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-popover-blur-amount: 30px;
    --ease-popover-scale-start: 1.1; /* Starts larger and scales down into place */
    --ease-popover-bg: #ffffff;
    --ease-popover-backdrop-bg: rgba(15, 23, 42, 0.8);
    --ease-popover-backdrop-blur: 12px;
}
```

### Note on Browser Support
This effect relies on the modern HTML Popover API and `@starting-style` in CSS, supported by all modern evergreen browsers (Chrome 114+, Safari 17+, Firefox 125+). In older browsers without `@starting-style`, it will function without the entry animation, but gracefully display the content.
