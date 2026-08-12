# CSS Wobble-Focus Tabs - Creative Portfolio Aesthetic

A striking, pure CSS tab component featuring a kinetic "Wobble-Focus" interaction, explicitly designed for bold, modern Creative Portfolios.

## Features

- **Wobble-Focus Interaction**: When a tab is activated via a mouse click (`:checked`) or keyboard navigation (`:focus-visible`), the text label triggers a lively, springy wobble animation (`@keyframes wobbleFocus`), giving a highly tactile and energetic feel.
- **Pure CSS Navigation**: Uses visually hidden radio inputs to store state without any JavaScript, ensuring maximum performance and simplicity.
- **Creative Portfolio Aesthetics**: Adopts a high-contrast dark mode using deep blacks (`#0a0a0a`), striking neon accents (electric lime `#ccff00`), and bold typography (`Space Grotesk`).
- **Smooth Layout Transitions**: Navigating between tabs triggers a sleek `scaleX` underline animation and a soft upward fade for the content panels.
- **Fully Accessible**: Implements the accessible `clip` method for visually hiding the radio buttons. Keyboard users (Tab and Arrow Keys) can easily navigate the tabs, and an electric lime dashed focus ring provides extremely clear visual feedback.
- **Mock Context**: Includes fully responsive grid layouts commonly found in design portfolios (e.g., masonry work galleries, big-text about sections, and minimal contact pages).

## Custom Properties

Modify the physical feel of the wobble or adapt the aesthetic to your own brand by tweaking the CSS variables found in the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Wobble Animation Parameters */
  --wobble-duration: 0.8s;
  --wobble-easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --wobble-distance: 8px; /* X-axis translation distance */
  --wobble-angle: 3deg;   /* Rotation angle */
  
  /* Creative Portfolio Aesthetic Colors */
  --port-bg: #0a0a0a; 
  --port-accent: #ccff00; /* Try hot pink #f472b6 or cyan #06b6d4! */
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Click the main navigation tabs or use the `Tab` and Arrow Keys to experience the wobble interaction!
