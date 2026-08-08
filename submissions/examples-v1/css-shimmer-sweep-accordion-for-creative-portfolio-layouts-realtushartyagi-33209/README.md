# CSS Shimmer Sweep Accordion for Creative Portfolio Layouts

A pure CSS accordion component featuring a glossy, high-end "shimmer sweep" interaction, designed specifically for dark-mode, minimalist **Creative Portfolio** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, portfolio aesthetics (dark mode, minimalist borders, vibrant neon accents), and the `@keyframes ease-shimmer-sweep-port` logic applied to the panel headers.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a typical large-typography portfolio layout context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without relying on JavaScript.

```html
<div class="ease-shimmer-port-accordion">
  
  <div class="ease-shimmer-port-item">
    <!-- State controller -->
    <input type="radio" name="shimmer-port-acc" id="proj1" class="ease-shimmer-port-input" checked />
    
    <!-- Clickable Header triggering the Shimmer Sweep -->
    <label for="proj1" class="ease-shimmer-port-label">
      <div class="ease-shimmer-port-title-wrapper">
        <span class="ease-shimmer-port-index">01</span>
        Neon Horizon Rebrand
      </div>
      <span class="ease-shimmer-port-icon">
        <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
      </span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-shimmer-port-wrapper">
      <div class="ease-shimmer-port-content">
        <!-- Inner content -->
        <div class="ease-shimmer-port-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional portfolio case studies... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and portfolio aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-shimmer-timing` | `2s` | The duration of one full sweep of the shimmer gradient across the header. |
| `--ease-expand-timing` | `0.4s` | The duration of the CSS Grid height expansion. |
| `--ease-port-accent` | `#ff2a5f` | The vibrant neon pink accent color used for active states. |

## Why it fits EaseMotion CSS
This component exemplifies the EaseMotion philosophy by leveraging advanced CSS techniques to replace JavaScript-driven visual feedback, tailored for high-end creative contexts. The core interaction is the **Shimmer Sweep**: utilizing a wide, glossy `linear-gradient` applied to a pseudo-element (`::before`), it animates `background-position` on `:hover`. When `:checked`, it triggers a bolder, tinted sweep to confirm the interaction. This provides dynamic, fluid feedback in a dark-mode portfolio context. Paired with pure CSS Grid (`grid-template-rows: 0fr` to `1fr`) for perfectly smooth height animations, it offers a robust, high-performance UI element natively in the browser.

---

> **Note:** PR modifies only files inside `submissions/examples/css-shimmer-sweep-accordion-for-creative-portfolio-layouts-realtushartyagi-33209/`.
