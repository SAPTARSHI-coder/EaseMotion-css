# CSS Crystallize Button

A purely CSS-animated interactive button that fractures into flying crystalline shards upon being clicked. Built entirely without JavaScript particle systems or HTML Canvas.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Checkbox Hack**: The core state of the button (Solid vs Shattered) is managed by a hidden `<input type="checkbox">`. The actual clickable button is a `<label>` tied to this checkbox, allowing a click to natively toggle the state without JavaScript event listeners.
  - **Jigsaw Polygons**: Inside the button container sit 6 absolutely positioned `<div>` overlays (`.shard`). By default, each shard is sliced into a specific geometric shape using `clip-path: polygon(...)`. When positioned at `0,0`, these 6 unique polygons perfectly interlock to form the solid rectangular background of the button, mimicking a faceted crystal.
  - **The Explosion Physics**: When the checkbox is checked, the CSS general sibling combinator (`~`) triggers a state change on all 6 shards simultaneously. A custom `cubic-bezier` transition rapidly animates the `transform: translate3d(...) rotate(...) scale(...)` properties of each shard, throwing them outwards in different directions while simultaneously fading their `opacity` to 0. 
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate background to ensure the vibrant purple shards pop visually.
- Fully accessible semantic structure. The `<label>` acts as the primary interactive element and is given `role="button"` and `tabindex="0"` for keyboard navigation. The shards are purely decorative visual effects and are explicitly hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the fracture transition for motion-sensitive users, causing the button to simply disappear on click rather than exploding.

## Usage
Open `demo.html` in your browser. Click the "SHATTER ME" button to trigger the explosion. Click anywhere in the empty space where the button used to be (the invisible label hitbox remains active) to trigger the reverse animation and reform the crystal.

## Files
- `demo.html`: The HTML structure defining the hidden checkbox, the label hitbox, and the 6 interlocking shards.
- `style.css`: The styling, the `clip-path: polygon` mathematics, and the critical explosion state transitions.
