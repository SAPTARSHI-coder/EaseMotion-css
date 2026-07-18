# CSS Jello-Hover Popover for Accessible Web Layouts

A pure CSS popover component engineered with strict web accessibility (a11y) standards in mind. It uses `:focus-within` and `:hover` to natively toggle a dropdown menu, pairing it with an engaging Jello animation that explicitly respects user motion preferences.

## Features
- **Pure CSS State Management**: Relies entirely on native `:focus-within` to maintain state, eliminating JS-related focus management issues. The popover remains open as long as the user's keyboard focus remains inside the panel.
- **Strict A11y Standards (WCAG)**:
  - **Color Contrast**: Utilizes high-contrast colors (e.g., `#000000` text on `#ffffff` backgrounds) easily meeting WCAG AAA requirements.
  - **Focus Indicators**: Implements thick, highly visible focus rings (`4px solid #ff5722`) avoiding ambiguous low-contrast outlines.
  - **Typography**: Uses Atkinson Hyperlegible, a font explicitly designed to increase character recognition and readability.
  - **Reduced Motion Support**: Implements `@media (prefers-reduced-motion: reduce)` to gracefully disable the Jello wobble for users with vestibular sensitivities, defaulting to a static translate reveal.
- **EaseMotion Jello Animation**: Employs a custom `@keyframes ease-jello` sequence, applying a fun, slightly bouncy skew effect when the menu is revealed (for users who allow motion).

## EaseMotion Classes & Variables
- `.ease-popover-panel.ease-jello-hover`: The class dictating the entry transitions and animation application.
- `@keyframes ease-jello`: The custom sequence creating the Wobble/Jello scale-skew effect.
- `--ease-jello-duration`: A CSS custom property that sets the speed of the animation (default: `900ms`).

## Usage
Encapsulate your high-contrast button and `.ease-popover-panel` inside the `.ease-popover-container`. Ensure all interactive elements have strong semantic markup (`role="menu"`, `aria-label`, etc.) as demonstrated in the demo to maintain accessibility compliance.

### Quick Start
Open `demo.html` in your browser to view the highly accessible layout. Test the popover natively by tabbing to the "Download" button with your keyboard—you'll see the thick focus rings and the pure CSS popover panel seamlessly drop down.
