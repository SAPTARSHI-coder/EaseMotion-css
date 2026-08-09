# CSS Slide-Right Tabs - E-Commerce Checkout Aesthetic

A pure CSS, multi-step checkout component utilizing a "Slide-Right" interaction transition. This component uses tabs to simulate a multi-step e-commerce checkout flow (Shipping -> Payment -> Review).

## Features

- **Pure CSS State Management**: Uses visually hidden radio buttons and the `:checked` state to handle step navigation. Zero JavaScript required.
- **Slide-Right Progress Indicator**: The progress bar fills by sliding to the right based on the active step, providing clear, visual completion feedback.
- **Slide-Right Content Panels**: When navigating between steps, the content panels physically slide into view from left to right (`translateX`), combined with a smooth fade effect.
- **E-Commerce Aesthetic**: Designed with a clean, trustworthy look using solid colors, subtle borders, well-structured form grids, and crisp typography (`Inter`).
- **Interactive Buttons**: The "Next" and "Back" buttons within the forms are actually `<label>` elements linked to the respective radio buttons, functioning seamlessly without JavaScript.
- **Accessible**: The inputs are visually hidden using accessible `clip` clipping, so they are fully navigable via `Tab` and the Arrow Keys. A clear focus ring is applied to the active step label when focused via keyboard.
- **Customizable**: Exposes CSS Custom Properties in the `:root` for adjusting animation timing, distances, and colors.

## Custom Properties

Modify the `:root` variables in `style.css` to easily tweak the appearance and animations:

```css
:root {
  /* Animation */
  --slide-duration: 0.65s;
  --slide-easing: cubic-bezier(0.25, 1, 0.5, 1);
  --panel-slide-distance: -40px; /* How far the panel slides from */
  
  /* Colors */
  --accent-color: #0f172a;
  --accent-active: #2563eb;
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. You can click on the step headers (1, 2, 3) or use the "Continue" / "Back" buttons inside the panels to experience the Slide-Right animations and state transitions.
