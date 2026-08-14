# CSS Fade-Out Accordion for Creative Portfolio Layouts

A pure CSS accordion component featuring an elegant "fade-out" transition, tailored specifically for minimalist, typography-driven **Creative Portfolio** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, portfolio-specific aesthetics (serif/sans-serif pairing, minimalist spacing), and the dual-timing fade-out logic.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in an editorial "Selected Works" layout context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without JavaScript.

```html
<div class="ease-fade-port-accordion">
  
  <div class="ease-fade-port-item">
    <!-- State controller -->
    <input type="radio" name="port-acc" id="port1" class="ease-fade-port-input" checked />
    
    <!-- Clickable Header -->
    <label for="port1" class="ease-fade-port-label">
      <span class="number">01</span>
      <span class="title">Brand Identity</span>
      <span class="icon">+</span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-fade-port-content-wrapper">
      <div class="ease-fade-port-content">
        <!-- Inner content that fades out gracefully -->
        <div class="ease-fade-port-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional items... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and portfolio aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-fade-timing` | `0.5s` | The speed of the accordion expansion and fade-in. |
| `--ease-fade-out-timing` | `0.3s` | The speed of the fade-out effect when collapsing (usually faster than fade-in). |
| `--ease-port-accent` | `#d84b2e` | The accent color applied to the icon and active states. |

## Why it fits EaseMotion CSS
This component entirely replaces JavaScript-based sliding menus by utilizing the CSS radio button hack. It emphasizes fluid motion through two key interaction concepts: 
1. **The Fade-Out Collapse**: By applying a distinct, shorter transition timing to the opacity properties in the default (collapsed) state vs. the active state, the content elegantly fades away before the container finishes snapping shut.
2. **Hover Focus**: The accordion uses advanced CSS sibling and parent combinators to slightly fade out inactive items when the user is hovering over the menu, pulling visual focus to the target item natively.

---

> **Note:** PR modifies only files inside `submissions/examples/css-fade-out-accordion-for-creative-portfolio-layouts-realtushartyagi-33075/`.
