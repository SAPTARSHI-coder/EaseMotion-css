# CSS Horizontal Roll Accordion (Product Catalog)

A modern, high-fidelity horizontal roll accordion layout tailored for product showcases, catalogues, and feature lists. Designed for the **EaseMotion CSS** library, this component expands and collapses panels horizontally (side-to-side) without using any JavaScript.

## Features

- **Pure HTML + CSS** — Complete client interactivity via the checkbox-hack, zero dependencies, zero runtime scripts.
- **Horizontal Roll Animation** — Premium horizontal expansion via CSS width transitions and clipping.
- **Responsive Stack Fallback** — Automatically converts into a vertical expanding accordion on tablets and mobile screens (`≤ 960px`) via responsive CSS Grid (`grid-template-rows 0fr -> 1fr`).
- **Independent States** — Uses independent checkboxes, allowing multiple product cards to be open or closed at the same time.
- **Keyboard Accessible** — Keeps toggle checkboxes in the tab ring; fully focusable and triggers via spacebar. Supports styling triggers via `:focus-visible`.
- **Respects Motion Preferences** — Automatically scales transitions down to `0.001s` (instantly snapping open/close) when user has `prefers-reduced-motion: reduce` configured in their OS.

## Customization

You can fully customize the accordion's dimensions, easing, speeds, shadows, and color theme using standard CSS Custom Properties defined under `:root`:

| Custom Property | Default Value | Description |
|---|---|---|
| `--ease-accordion-duration` | `0.5s` | Duration of the roll expand/collapse transitions. |
| `--ease-accordion-easing` | `cubic-bezier(0.25, 1, 0.4, 1)` | Timing function for organic slide/roll motion. |
| `--ease-accordion-width` | `1080px` | Maximum overall width of the accordion container. |
| `--ease-accordion-trigger-width` | `72px` | The width of the collapsed vertical tab/trigger handle. |
| `--ease-accordion-panel-width` | `320px` | Width of the product catalog card content when expanded. |
| `--ease-accordion-border-radius` | `20px` | Corner rounding of the accordion items. |
| `--ease-accordion-spacing` | `16px` | Gap space between individual accordion items. |
| `--ease-accordion-shadow-strength` | `0.15` | Accent strength for item shadows. |
| `--ease-accordion-color-bg` | `#090a0f` | Background color for demo page. |
| `--ease-accordion-color-card-bg` | `#131520` | Default card background color. |
| `--ease-accordion-color-accent` | `#8b5cf6` | Highlight color for icons, headings, and active borders. |

---

## File Structure

```
submissions/examples/ease-horizontal-roll-accordion-product-catalog/
├── demo.html      — Standalone product catalog page
├── style.css      — Layout transitions, custom properties, and typography
└── README.md      — This documentation file
```

---

## Usage

Include the structure below in your layout:

```html
<!-- Main Accordion Container -->
<div class="ease-horizontal-accordion-wrapper">
  <div class="ease-horizontal-accordion">

    <!-- Accordion Item -->
    <article class="ease-horizontal-accordion-item">
      <!-- Hidden Checkbox input for state tracking -->
      <input type="checkbox" id="item-unique-id" class="ease-horizontal-accordion-toggle">
      
      <!-- Trigger (Tab Handle) -->
      <label class="ease-horizontal-accordion-trigger" for="item-unique-id">
        <span class="ease-accordion-number">01</span>
        <span class="ease-accordion-title">Product Title</span>
        <span class="ease-sr-only">Toggle product details</span>
        <span class="ease-accordion-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      </label>

      <!-- Content Panel -->
      <div class="ease-horizontal-accordion-panel">
        <div class="ease-horizontal-accordion-content">
          <!-- Product card inner layout goes here -->
        </div>
      </div>
    </article>

  </div>
</div>
```

Ensure you link `style.css` in the `<head>` of your page to render the component correctly.
