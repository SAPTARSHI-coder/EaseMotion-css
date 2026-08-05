# CSS Blur-Entrance Tabs - Modern SaaS Aesthetic

A polished, pure CSS tab component utilizing a sophisticated "Blur-Entrance" interaction transition, designed for modern SaaS dashboards and data-heavy interfaces.

## Features

- **Blur-Entrance Transition**: Whenever a tab is activated, the new content panel enters using a custom `@keyframes blurEntrance` animation. This elegantly transitions `filter: blur()`, `opacity`, and a subtle `transform: translateY() scale()` to mimic native, high-end application routing transitions.
- **Pill-Style Sliding Navigation**: The tabs utilize a modern pill-shaped container with a sliding background indicator. Using precise `translateX` math and Flexbox, the active indicator seamlessly glides behind the active text label.
- **Modern SaaS Aesthetics**: Adopts a pristine, data-centric visual language. It leverages a clean slate/indigo color palette, crisp borders (`1px solid #e2e8f0`), soft shadows, and robust card-based layouts.
- **Pure CSS State Management**: Powered entirely by visually hidden radio buttons and sibling selectors (`:checked ~`). Absolutely no JavaScript is required.
- **Keyboard Accessible**: The radio buttons are hidden via the `clip` method, natively preserving browser focus management. When navigating via the `Tab` key, active elements are outlined with an indigo focus ring.

## Custom Properties

Fine-tune the entrance animation or update the branding colors by modifying the `:root` variables inside `style.css`:

```css
:root {
  /* Blur-Entrance Interaction Parameters */
  --blur-duration: 0.5s;
  --blur-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --blur-amount: 16px; /* Intensity of the starting blur */
  --blur-scale: 0.98;
  --blur-offset: 15px; /* Y-axis drop-in distance */
  
  /* Modern SaaS Brand */
  --saas-primary: #4f46e5; /* Indigo 600 */
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Click the tabs (Overview, Customers, Settings) to trigger the slick, blurred entrance transition and explore the mocked-up SaaS dashboard interfaces!
