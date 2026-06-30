# Animated Form Stepper

A reusable, fully responsive multi-step form stepper with animated progress states. Ideal for checkout flows, multi-page surveys, and user onboarding. Integrates smoothly with EaseMotion CSS utilities.

## Features

- 🚦 **Three Visual States:** Clearly distinguishes between pending, `.is-active`, and `.is-completed` steps with distinct background colors, transform scales, and focus shadow effects.
- 🔗 **Animated Connectors:** Connecting lines feature an inner fill bar (`::after` pseudo-element) that smoothly animates from left to right as the user progresses via `.is-completed` and `.is-partial` utility classes.
- 📱 **Fully Responsive Layout:** Automatically degrades from a standard horizontal stepper into a clean vertical list layout on mobile devices (`max-width: 480px`), cleanly adapting the connector layouts and fill direction from horizontal to vertical.
- 🛑 **Prefers-Reduced-Motion:** Respects OS-level accessibility settings by completely disabling the scale animations and fill transitions if a user requests reduced motion.

## Usage

1. Copy the HTML structure from `demo.html`.
2. Apply the `.is-active` class to the `.step` the user is currently on.
3. Apply the `.is-completed` class to the `.step` elements the user has already finished.
4. For the `.step-connector` bars between steps: apply `.is-completed` to connectors between two finished steps, and apply `.is-partial` to the connector leading directly into the currently active step.
5. Include `style.css` to power the flex layouts, mobile media queries, and transition curves.

## Customization

Easily adapt the stepper to precisely match your brand by modifying the CSS variables located at the top of `style.css`:

```css
:root {
  --step-active-bg: #3b82f6; /* Active step brand color */
  --step-active-shadow: rgba(
    59,
    130,
    246,
    0.4
  ); /* Glow ring around active step */

  --step-completed-bg: #10b981; /* Success color */
  --connector-fill: #10b981; /* Connecting line success color */
}
```

## Contributed by

- Man1ac-1773
