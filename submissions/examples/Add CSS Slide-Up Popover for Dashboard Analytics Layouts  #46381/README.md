# CSS Slide-Up Popover (Dashboard Analytics Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Popover featuring a smooth Slide-Up interaction transition.

## Features
- **Pure CSS**: Fully functional popover interactivity (open, close, light-dismiss) without a single line of JavaScript, utilizing the native HTML `<div popover>` API.
- **Slide-Up Transition**: The popover smoothly glides into view along the Y-axis from below, a classic and highly effective interaction pattern for context menus.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` to gracefully animate the popover's entry and exit.
- **Anchor Positioning**: Implements the CSS Anchor Positioning API (`anchor-name` & `position-anchor`) to dynamically tether the popover to its trigger button. Includes a `@supports` fallback for older browsers.
- **Dashboard Analytics Aesthetics**: Styled for data-heavy applications (think Mixpanel, Datadog), featuring crisp borders, neutral backgrounds with stark accent colors, fine typography, and abstract sparkline charts.
- **Fully Customizable**: Timing, easing curves, and translation offsets are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can tweak the slide distance and animation speeds via these exposed CSS custom properties:
```css
:root {
  --popover-duration: 0.3s;
  --popover-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --popover-start-translateY: 16px;
}
```

## Browser Support
This demo uses modern CSS features. For the full experience, it relies on:
- **Popover API** (Supported in Chrome 114+, Safari 17+, Firefox 125+)
- **CSS Anchor Positioning** (Supported in Chrome 125+, Edge 125+)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Safari 17.4+, Firefox 129+)
