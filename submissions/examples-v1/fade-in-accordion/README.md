# Fade-In Accordion

A pure CSS animated accordion component with a smooth fade-in interaction.

## Features
- **Zero JavaScript:** Built using `<details>` and `<summary>` tags.
- **Customizable:** Use CSS variables to control duration and easing.
- **Responsive:** Adapts to container width automatically.

## Usage
Add the HTML structure provided in `demo.html`. You can override the animation settings in your own stylesheet:

```css
:root {
    --fade-duration: 0.6s; /* Change duration */
}