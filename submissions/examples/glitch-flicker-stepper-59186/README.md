# Glitch-Flicker Stepper

A cyberpunk/gaming-inspired CSS stepper component with glitch effects, scanlines, and flicker animations. Built strictly with pure CSS/HTML, perfect for gaming hub layouts and futuristic interfaces.

## Features

- **Pure CSS/HTML:** No JavaScript required for the visual states.
- **Glitch Effect:** Custom CSS keyframe animations for the title text glitching.
- **Flicker & Pulse:** Active steps feature a dynamic flicker and pulse animation.
- **Scanline Overlay:** An animated scanline effect over the component wrapper.
- **Responsive Design:** Adapts smoothly from horizontal layout on desktop to vertical layout on mobile devices.
- **Accessibility Support:** Respects `prefers-reduced-motion` to disable high-intensity animations for users who prefer minimal movement.

## Usage

1. Copy the HTML structure from `demo.html`.
2. Link the `style.css` in your project.
3. Update the `data-text` attribute on the title to match the inner text for the glitch effect.
4. Add the `completed` or `active` class to `.step` elements to change their state.

## CSS Custom Properties (Variables)

The component uses several CSS variables for easy customization:

```css
:root {
    --primary-color: #0ff;        /* Cyan for active/completed states */
    --secondary-color: #f0f;      /* Magenta for glitch secondary color */
    --bg-color: #050510;          /* Dark background */
    --text-color: #fff;           /* Main text color */
    --inactive-color: #333;       /* Color for upcoming/inactive steps */
    --accent-color: #ff0055;      /* Accent color for hover effects */
    --glitch-offset: 3px;         /* Glitch shift amount */
    --transition-speed: 0.3s;     /* Speed for smooth transitions */
}
```

## Structure

- `.showcase-container`: Centers and constrains the component.
- `.stepper-wrapper`: The main container with the scanline effect.
- `.stepper-title`: The title featuring the pseudo-element glitch effect.
- `.glitch-stepper`: The list container (`<ol>`) for the steps.
- `.step`: Individual list items. Add `.completed` or `.active` classes here.
- `.step-icon`: The diamond shape. Needs an inner `<span>` to counter-rotate the text.
- `.step-content`: Contains the label and description.
- `.controls`: Contains the prev/next buttons.
