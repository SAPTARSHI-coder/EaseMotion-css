# CSS 3D Perspective Tilt Tabs - Dashboard Analytics Aesthetic

A pure CSS tab component that uses `perspective` and 3D transforms (`rotateX`, `rotateY`, `translateZ`) to give tab navigation a spatial, premium feel — styled for a dark, data-dense analytics dashboard.

Closes #50347.

## Features

- **3D Perspective Tilt Interaction**:
  - **On Hover**: Tabs tilt and lift toward the user in 3D space, with a directional drop shadow to reinforce depth.
  - **On Transition**: Panels animate in with a combined 3D tilt + scale entrance (`@keyframes panelTiltIn`).
  - **Internal Depth**: Stat cards, the revenue highlight card, and list rows use `translateZ` so they visually sit above the panel surface.
- **Dashboard Analytics Content**: Three realistic panels — Overview (stat cards + bar chart), Revenue (highlight card + plan breakdown), Traffic (source list with proportional bars) — so the component reads as a real dashboard, not just a placeholder.
- **Pure CSS State Management**: Active tab/panel state is handled entirely with visually hidden radio inputs and the `:checked` selector — no JavaScript.
- **Accessible**:
  - Radio inputs are hidden with the standard clip-based visually-hidden pattern (not `display: none`), so they stay keyboard- and screen-reader-reachable.
  - A visible `:focus-visible` outline is provided for keyboard navigation.
  - Decorative icons are marked `aria-hidden="true"`; the bar chart has a descriptive `aria-label`.
  - Respects `prefers-reduced-motion`: transitions and the panel entrance animation are disabled for users who have requested reduced motion at the OS level, per this repo's [accessibility-reduced-motion guide](../../../docs/accessibility-reduced-motion.md).
- **Responsive**: Tabs stack into full-width rows and stat/list layouts collapse to a single column below 600px.

## Custom Properties

Fine-tune the 3D physics and the analytics color palette via the CSS variables in `:root` in `style.css`:

```css
:root {
  /* 3D Tilt Parameters */
  --tilt-duration: 0.55s;
  --tilt-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Springy bounce effect */
  --tilt-perspective: 1200px; /* Adjust the 3D viewing distance */

  /* Dashboard Analytics Palette */
  --panel-bg: #101728;
  --accent-blue: #38bdf8;
  --accent-green: #34d399;
  /* ...see style.css for the full list */
}
```

## Usage

Open `demo.html` in a browser. Hover over "Overview", "Revenue", or "Traffic" to see the 3D tilt, and click (or use `Tab` + arrow/space) to switch panels and trigger the 3D entrance animation.