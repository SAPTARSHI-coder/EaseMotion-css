# CSS Split Screen Layout

A highly responsive, two-panel split screen layout that utilizes CSS Flexbox to smoothly expand and contract panels upon user interaction.

## Features
- **Pure CSS / HTML**: Built entirely without JavaScript. Utilizes CSS Flexbox `flex` properties (`flex-grow`, `flex-shrink`, `flex-basis` implicitly) to manage panel widths dynamically based on hover state.
- **Fluid Expansion**: When a user hovers or focuses on one panel, it smoothly expands taking up more of the viewport, while simultaneously shrinking the sibling panel, creating a highly engaging landing page interaction.
- **Animated Details**: Secondary content (like descriptions) smoothly fades and slides into view via `max-height` and `opacity` transitions when a panel is expanded, keeping the default state clean and minimal.
- **Accessible & Responsive**: Fully supports keyboard navigation via the `focus-visible` pseudo-class (panels act as anchor tags). On mobile devices (`max-width: 768px`), the layout intelligently stacks vertically rather than horizontally, disabling the horizontal flex expansion to ensure content remains readable. Respects user preferences via `@media (prefers-reduced-motion: reduce)`.

## Usage

Drop the HTML structure into your layout. Ensure the `.split-layout` container is given an appropriate height (default is `100vh` to fill the screen).

```html
<main class="split-layout">
  <a href="#" class="split-panel left">
    <div class="panel-content">
      <h2>Left Panel</h2>
      <p class="panel-desc">Details...</p>
    </div>
  </a>
  
  <a href="#" class="split-panel right">
    <div class="panel-content">
      <h2>Right Panel</h2>
      <p class="panel-desc">Details...</p>
    </div>
  </a>
</main>
```

## CSS Custom Properties
Easily customize the layout using the root variables in `style.css`:
- `--bg-left`: Background color for the left panel (default: `#3b82f6`)
- `--bg-right`: Background color for the right panel (default: `#10b981`)
- `--text-color`: Text color for both panels (default: `#ffffff`)
- `--transition-speed`: Speed of the expansion animation (default: `0.5s`)
- `--ease-function`: The timing function for the expansion (default: `cubic-bezier(0.25, 1, 0.5, 1)`)

## Browser Support
Works in all modern browsers (Chrome, Firefox, Safari, Edge).
