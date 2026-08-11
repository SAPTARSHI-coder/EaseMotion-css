# Elastic Bounce Tabs Component

A pure CSS animated Tabs component utilizing a smooth Elastic Bounce interaction transition, designed specifically for Marketing Landing Page layouts.

## Features

- **Pure CSS**: Zero JavaScript required for state management or animation.
- **Elastic Bounce Animation**: Uses custom easing curves for a playful, engaging bounce effect when switching tabs.
- **Marketing Aesthetics**: Designed with modern UI trends (glassmorphism support, smooth shadows, micro-interactions).
- **Responsive & Accessible**: Keyboard accessible via standard `Tab` and `Space/Enter` keys (using hidden radio inputs), and falls back gracefully on smaller screens.
- **EaseMotion Integration**: Fully integrates with EaseMotion CSS variables for theming, typography, and spacing.

## Usage

Check out the `demo.html` for the complete HTML structure. The core logic relies on sibling selectors (`~`) connecting hidden radio inputs to the tab headers and content panels.

### Custom CSS Properties

The component exposes several custom variables that you can override to tweak its look and feel:

```css
:root {
  /* Timing & Easing */
  --tab-bounce-timing: var(--ease-ease-bounce); /* Easing curve for the bounce */
  --tab-bounce-duration: 600ms; /* Speed of the indicator translation */
  --tab-panel-duration: 300ms; /* Speed of the panel fading */
  
  /* Scale Factors */
  --tab-scale-active: 1.05; /* Scale of the active tab text */
  --tab-scale-inactive: 0.95; /* Scale when tab is clicked */
  
  /* Colors & Radius */
  --tab-indicator-bg: var(--ease-color-primary);
  --tab-text-active: var(--ease-color-surface);
  --tab-text-inactive: var(--ease-color-text);
  --tab-bg: var(--ease-color-neutral-100);
  --tab-border-radius: var(--ease-radius-xl);
}
```

## Dark Mode Support

Dark mode is natively supported using `data-theme="dark"` or system preferences (`prefers-color-scheme: dark`), which leverages EaseMotion's glassmorphism variables.
