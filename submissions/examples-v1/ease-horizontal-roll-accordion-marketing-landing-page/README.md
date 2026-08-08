# CSS Marketing Landing Page Horizontal Roll Accordion

A clean, modern horizontal roll accordion layout styled with a vibrant, light-mode Marketing Landing Page aesthetic. Designed for the **EaseMotion CSS** library, this component expands and collapses panels horizontally (side-to-side) without using any JavaScript, featuring soft drop shadows, clean borders, custom metric tags, and action buttons.

## Features

- **Pure HTML + CSS** — Powered entirely by the checkbox-hack, zero dependencies, zero runtime scripts.
- **Modern Landing Page Aesthetic** — Soft shadows, vibrant gradients, clean metadata, and action-oriented Call to Action (CTA) buttons.
- **Horizontal Roll Animation** — Premium horizontal expansion via CSS width transitions and clipping.
- **Responsive Stack Fallback** — Automatically converts into a vertical expanding accordion on tablets and mobile screens (`≤ 960px`) via responsive CSS Grid (`grid-template-rows 0fr -> 1fr`).
- **Independent States** — Uses independent checkboxes, allowing multiple service cards to be open or closed simultaneously.
- **Keyboard Accessible** — Keeps toggle checkboxes in the tab ring; fully focusable and triggers via spacebar. Supports styling triggers via `:focus-visible` outline.
- **Respects Motion Preferences** — Automatically scales transitions down to `0.001s` (instantly snapping open/close) when user has `prefers-reduced-motion: reduce` configured in their OS.

## Customization

You can fully customize the accordion's dimensions, easing, speeds, shadows, and color theme using standard CSS Custom Properties defined under `:root`:

| Custom Property | Default Value | Description |
|---|---|---|
| `--ease-accordion-duration` | `0.5s` | Duration of the roll expand/collapse transitions. |
| `--ease-accordion-easing` | `cubic-bezier(0.25, 0.8, 0.25, 1)` | Timing function for organic slide/roll motion. |
| `--ease-accordion-width` | `1060px` | Maximum overall width of the accordion container. |
| `--ease-accordion-trigger-width` | `76px` | The width of the collapsed vertical tab/trigger handle. |
| `--ease-accordion-panel-width` | `320px` | Width of the service card content when expanded. |
| `--ease-accordion-border-radius` | `24px` | Corner rounding of the accordion items. |
| `--ease-accordion-spacing` | `16px` | Gap space between individual accordion items. |
| `--ease-accordion-shadow-intensity` | `0.08` | Accent strength for item shadows. |

---

## File Structure

```
submissions/examples/ease-horizontal-roll-accordion-marketing-landing-page/
├── demo.html      — Standalone marketing landing page
├── style.css      — Modern layout styles, custom properties, and fonts
└── README.md      — This documentation file
```

---

## Usage

Include the structure below in your layout:

```html
<!-- Main Accordion Container -->
<div class="ease-mkt-accordion-wrapper">
  <div class="ease-mkt-accordion">

    <!-- Accordion Item (Branding theme) -->
    <article class="ease-mkt-accordion-item mkt-branding">
      <!-- Hidden Checkbox input for state tracking -->
      <input type="checkbox" id="service-unique-id" class="ease-mkt-accordion-toggle">
      
      <!-- Trigger (Tab Handle) -->
      <label class="ease-mkt-accordion-trigger" for="service-unique-id">
        <span class="ease-accordion-number">01</span>
        <span class="ease-accordion-title">Service Name</span>
        <span class="ease-sr-only">Toggle service details</span>
        <span class="ease-accordion-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      </label>

      <!-- Content Panel -->
      <div class="ease-mkt-accordion-panel">
        <div class="ease-mkt-accordion-content">
          <!-- Service details inner layout goes here -->
        </div>
      </div>
    </article>

  </div>
</div>
```

Ensure you link `style.css` in the `<head>` of your page to render the component correctly.
