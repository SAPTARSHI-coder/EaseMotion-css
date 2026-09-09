# Particle Password Strength

## Component description

Particle Password Strength is a polished, CSS-only password strength demo that pairs a secure form field with a music-player-inspired visualizer. The interface highlights Weak, Medium, and Strong states through animated particles, a live progress meter, and a soft glass-card layout.

## Installation

1. Copy the folder into your project or open the included demo file directly in a browser.
2. Ensure the repository root stylesheet is available for the demo page to load the EaseMotion utility classes.
3. Open [demo.html](demo.html) to preview the component.

## Usage

```html
<link rel="stylesheet" href="../../easemotion.css" />
<link rel="stylesheet" href="style.css" />
```

Then include the markup from [demo.html](demo.html) in your page. The demo uses CSS-only state switching, so no JavaScript is required.

## Accessibility notes

- Uses semantic structure with a main landmark, section heading, and form label.
- The password field includes an associated label and descriptive hint text.
- The strength feedback region updates with `aria-live="polite"` for screen readers.
- Motion is reduced automatically when the user prefers less animation.

## Why it fits EaseMotion CSS

This submission highlights the EaseMotion philosophy by combining utility-driven layout and animation with a simple, reusable pattern:

- `.ease-card` and `.ease-card-glass` provide the polished shell.
- `.ease-fade-in`, `.ease-slide-up`, and `.ease-hover-grow` bring motion without extra JavaScript.
- CSS variables keep the palette and visual states consistent and easy to extend.
- The component remains lightweight, responsive, and easy to adapt for real sign-up or auth experiences.
