# CSS Elastic Bounce Tabs - Creative Portfolio Aesthetic

A striking, purely CSS-powered tab component featuring an "Elastic Bounce" interaction transition. This layout is meticulously styled for high-end Creative Portfolios, focusing on bold typography, large imagery, and incredibly satisfying kinetic feedback.

## Features

- **Elastic Bounce Active Indicator**: The central tab navigation utilizes a solid pill background (`.active-indicator`) that slides beneath the active tab using `transform: translateX()`. By applying an aggressive `cubic-bezier(0.68, -0.6, 0.32, 1.6)`, the pill overshoots its target and snaps back into place, creating a gorgeous elastic spring effect.
- **Spring Panel Entrance**: When switching tabs, the incoming content panel triggers a `@keyframes elasticPopIn` animation. Combined with a spring-like bezier (`cubic-bezier(0.34, 1.56, 0.64, 1)`), the panel scales and translates in with a matching bouncy cadence.
- **Creative Portfolio Aesthetics**: Uses a warm, sophisticated "Museum Cream" background (`#f6f5f1`) paired with stark rich blacks (`#141312`) and a vibrant Coral Orange (`#ff4a22`) accent.
- **Pure CSS State Management**: Powered entirely by the visually hidden radio button pattern. The tabs shift focus, apply active styles, and toggle panel visibility without a single line of JavaScript.
- **Accessible Design**: The radio buttons are hidden via the `clip` method, natively preserving browser focus management. Keyboard navigation (`Tab`) draws a crisp coral focus ring around the active tab.

## Custom Properties

Modify the physics of the bounce or adjust the portfolio's color palette by editing the `:root` variables in `style.css`:

```css
:root {
  /* Elastic Bounce Interaction Parameters */
  --bounce-duration: 0.75s;
  /* An extreme cubic-bezier that overshoots deeply and snaps back */
  --bounce-easing: cubic-bezier(0.68, -0.6, 0.32, 1.6);
  
  /* Panel Entrance Parameters */
  --panel-duration: 0.8s;
  --panel-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  
  /* Portfolio Palette */
  --bg-color: #f6f5f1; /* Warm Museum Cream */
  --text-main: #141312; /* Rich Black */
  --accent-color: #ff4a22; /* Vibrant Coral */
  
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Click the tabs (Selected Works, About Me, Contact) to witness the highly kinetic, satisfying elastic bounce transitions!
