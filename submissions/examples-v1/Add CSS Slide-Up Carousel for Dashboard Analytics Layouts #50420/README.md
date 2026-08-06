# CSS Slide-Up Carousel - Dashboard Analytics Layout

A robust, pure CSS interactive carousel utilizing a directional Slide-Up interaction transition, tailored for Dashboard Analytics widget layouts.

## Features
- **Dashboard Aesthetics**: Professional light-mode styling with subtle shadows, crisp typography, and high-density metric grids suitable for SaaS interfaces and administrative dashboards.
- **Directional Slide-Up Transitions**: The pure CSS state mechanism intelligently handles direction. When moving to a "future" tab, the new slide translates up from below. When moving to a "past" tab, the slide translates down from above, maintaining intuitive physical spatial awareness.
- **Internal Staggered Entrance Animations**: When a slide becomes active, its internal elements (metrics, charts) do not just instantly appear; they stagger in with sequenced delays, translating upwards for a highly polished feel.
- **Pure CSS Chart Animations**: The bar charts and progress bars physically grow from 0 to their target values when their parent slide is brought into view utilizing targeted CSS `transition-delay`.
- **Pure CSS State Management**: Uses hidden radio buttons placed at the layout root to drive interactive state completely devoid of JavaScript.
- **Responsive Geometry**: Layout gracefully stacks into a single column for mobile devices, automatically adjusting widget viewports.

## Customization

You can seamlessly configure physics and timing by modifying the custom CSS properties provided in the `:root`.

```css
:root {
  /* Animation Physics */
  --transition-duration: 0.6s;
  --transition-easing: cubic-bezier(0.25, 1, 0.3, 1);
  --slide-offset-future: 60px; /* Entry distance from below */
  --slide-offset-past: -60px;  /* Exit distance to above */
  --scale-inactive: 0.96;      /* Parallax scale effect */
  --scale-active: 1;
  
  /* Stagger Delays for Internal Elements */
  --stagger-delay-1: 0.1s;
  --stagger-delay-2: 0.15s;
  --stagger-delay-3: 0.2s;
}
```

## Architecture
- **Root State Inputs**: `<input type="radio">` tags are placed at the highest level of the component (`.dashboard-layout`) to allow the `~` general sibling selector to simultaneously target both the navigation tabs (inside `.widget-header`) and the carousel slides (inside `.carousel-viewport`).
- **Directional CSS Logic**: 
  - The default `.slide` block styles slides "in the future" (translating downward).
  - The active `:checked ~ ... .slide-xxx` block resets `transform` to 0.
  - A specialized CSS rule targets slides that fall chronologically *before* the active input (e.g., Daily is before Weekly), forcing past slides to translate *upward* out of the viewport.
