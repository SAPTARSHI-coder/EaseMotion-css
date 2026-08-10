# CSS Shimmer Sweep Accordion for Responsive Dashboard Layouts

A pure CSS accordion component featuring a subtle, skeleton-loading-style "shimmer sweep" interaction, designed specifically to fit into clean, modern **Responsive Dashboard** interfaces.

## Files
- `style.css` – Contains all the EaseMotion CSS variables, hidden radio button mechanics for state management, dashboard aesthetics (clean borders, soft shadows, blue accents), and the `@keyframes ease-shimmer-sweep` logic applied to the panel headers.
- `demo.html` – A standalone HTML file demonstrating the accordion functionality in a typical data-dense dashboard layout context.

## Installation
1. Copy the folder into your project's `examples` directory.
2. Link the stylesheet in your HTML file:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
This accordion relies on hidden `<input type="radio">` tags paired with `<label>` tags to trigger CSS state changes without relying on JavaScript.

```html
<div class="ease-shimmer-dash-accordion">
  
  <div class="ease-shimmer-dash-item">
    <!-- State controller -->
    <input type="radio" name="shimmer-dash-acc" id="shim1" class="ease-shimmer-dash-input" checked />
    
    <!-- Clickable Header triggering the Shimmer Sweep -->
    <label for="shim1" class="ease-shimmer-dash-label">
      Live Server Status
      <span class="ease-shimmer-dash-icon">
        <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
      </span>
    </label>
    
    <!-- Expanding Wrapper -->
    <div class="ease-shimmer-dash-wrapper">
      <div class="ease-shimmer-dash-content">
        <!-- Inner content -->
        <div class="ease-shimmer-dash-inner">
          <p>Accordion content goes here...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Additional dashboard modules... -->

</div>
```

## CSS Custom Properties
Adjust the animation timing, easing, and dashboard aesthetics via CSS variables:

| Property | Default Value | Description |
|----------|---------------|-------------|
| `--ease-shimmer-timing` | `1.5s` | The duration of one full sweep of the shimmer gradient across the header. |
| `--ease-expand-timing` | `0.35s` | The duration of the CSS Grid height expansion. |
| `--ease-dash-accent` | `#3b82f6` | The primary modern blue accent color used for active states. |

## Why it fits EaseMotion CSS
This component perfectly exemplifies the EaseMotion philosophy by leveraging advanced CSS techniques to replace JavaScript-driven visual feedback. The core interaction is the **Shimmer Sweep**: utilizing a wide `linear-gradient` applied to a pseudo-element (`::before`), it animates `background-position` on `:hover` and during the `:checked` state. This mimics the highly popular "skeleton loading" shimmer effect, providing dynamic, fluid feedback in a professional dashboard context. Paired with pure CSS Grid (`grid-template-rows: 0fr` to `1fr`) for perfectly smooth height animations, it offers a robust, high-performance UI element natively in the browser.

---

> **Note:** PR modifies only files inside `submissions/examples/css-shimmer-sweep-accordion-for-responsive-dashboard-layouts-realtushartyagi-33207/`.
