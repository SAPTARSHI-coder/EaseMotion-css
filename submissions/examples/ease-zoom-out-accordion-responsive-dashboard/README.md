# CSS Responsive Dashboard Zoom-Out Accordion

A professional, vertical accordion layout with a dynamic zoom-out entry transition tailored for responsive control panels, admin interfaces, and dashboards. Designed for the **EaseMotion CSS** library, this component expands and collapses widgets using CSS Grid (`grid-template-rows 0fr -> 1fr`) and transitions content scale from a slightly zoomed offset, running completely without JavaScript.

## Features

- **Pure HTML + CSS** — Complete user interactivity via the checkbox-hack, zero dependencies, zero runtime scripts.
- **Smooth Zoom-Out Entry** — Integrates dynamic height expansion with an inner content scale transition (`scale(var(--ease-accordion-zoom-scale)) -> scale(1)`) and fading for a high-end feel.
- **Responsive Dashboard Layout** — Desktop layout features an editorial navigation sidebar and a main widgets panel. Automatically collapses and simplifies sidebar columns on tablets and mobile screens.
- **Keyboard Accessible** — Keeps toggle checkboxes in the tab ring; fully focusable and triggers via spacebar. Supports styling triggers via `:focus-visible` outline.
- **Improved Focus Accessibility** — Utilizes CSS transitions on `visibility` to remove focusable elements inside collapsed accordion cards from the keyboard tab ring automatically.
- **Respects Motion Preferences** — Automatically scales transitions down to `0.001s` (instantly snapping open/close) when user has `prefers-reduced-motion: reduce` configured in their OS.

## Customization

You can fully customize the accordion's dimensions, easing, speeds, shadows, and color theme using standard CSS Custom Properties defined under `:root`:

| Custom Property | Default Value | Description |
|---|---|---|
| `--ease-accordion-duration` | `0.38s` | Duration of the expand/collapse transitions. |
| `--ease-accordion-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing function for organic bounce and snap behavior. |
| `--ease-accordion-zoom-scale` | `0.95` | Offset scale value from which the widget content zooms out upon entry. |
| `--ease-accordion-border-radius` | `16px` | Corner rounding of the accordion items. |
| `--ease-accordion-spacing` | `14px` | Gap space between individual accordion items. |
| `--ease-accordion-shadow-intensity` | `0.06` | Accent strength for dashboard item shadows. |

---

## File Structure

```
submissions/examples/ease-zoom-out-accordion-responsive-dashboard/
├── demo.html      — Standalone console layout demo page
├── style.css      — Layout transitions, custom properties, and typography
└── README.md      — This documentation file
```

---

## Usage

Include the structure below in your layout:

```html
<!-- Main Accordion Stack -->
<div class="ease-dash-accordion-wrapper">
  <div class="ease-dash-accordion-stack">

    <!-- Accordion Item (Primary performance theme) -->
    <article class="ease-dash-accordion-item dash-perf">
      <!-- Hidden Checkbox input for state tracking -->
      <input type="checkbox" id="widget-unique-id" class="ease-dash-accordion-toggle">
      
      <!-- Trigger (Tab Header) -->
      <label class="ease-dash-accordion-trigger" for="widget-unique-id">
        <div class="ease-accordion-header-info">
          <span class="ease-accordion-widget-dot" aria-hidden="true"></span>
          <h2 class="ease-accordion-title">Widget Name</h2>
        </div>
        <span class="ease-sr-only">Toggle widget panel</span>
        <span class="ease-accordion-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </label>

      <!-- Content Panel -->
      <div class="ease-dash-accordion-panel">
        <div class="ease-dash-accordion-content">
          <!-- Dashboard widget metrics, grids, charts inside here -->
        </div>
      </div>
    </article>

  </div>
</div>
```

Ensure you link `style.css` in the `<head>` of your page to render the component correctly.
