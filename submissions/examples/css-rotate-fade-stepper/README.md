# CSS Rotate-Fade Stepper

A purely CSS-powered, minimalist tech layout stepper featuring smooth **Rotate-Fade** entry animations for the active steps and progress line transitions.

## Features

- **Pure CSS Animations**: Utilizes CSS `@keyframes` and transitions for smooth, lightweight effects.
- **Rotate-Fade Effect**: The active step rotates and fades in with a gentle pop.
- **Minimalist Tech Layout**: Sleek dark mode design with vibrant accents (glassmorphism/blur effect backdrop).
- **Responsive**: Adapts fluidly to desktop, tablet, and mobile displays.
- **Accessibility**: Includes `prefers-reduced-motion` support.

## Usage

1. **HTML Structure**: Check `demo.html` for the structural setup of the `.stepper-container`, `.step`, and `.step-line` elements.
2. **CSS Integration**: Link or copy the contents of `style.css` into your project. 
3. **State Management**:
   - Add `.completed` class to a `.step` and its preceding `.step-line` for finished steps.
   - Add `.active` class to the current `.step` to trigger the Rotate-Fade animation.
   - (A simple vanilla JS script is provided in `demo.html` purely to demonstrate state toggling).

## Customization (CSS Variables)

Easily theme the stepper using the provided CSS root variables:

```css
:root {
  --bg-color: #0f172a;       /* Background color */
  --text-primary: #f8fafc;   /* Main text color */
  --text-secondary: #94a3b8; /* Dimmed text color */
  --accent-color: #3b82f6;   /* Active step color */
  --success-color: #10b981;  /* Completed step color */
  --border-color: #334155;   /* Border color */
  --line-color: #1e293b;     /* Inactive line color */
  --step-bg: #1e293b;        /* Inactive step background */
  --transition-speed: 0.5s;  /* Animation duration */
}
```

## Preview

Open `demo.html` in any modern web browser to see the effect in action!
