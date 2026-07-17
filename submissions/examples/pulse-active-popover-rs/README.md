# Pulse-Active Popover

An interactive pure CSS popover featuring a smooth **Pulse-Active** interaction transition, styled to complement **Accessible Web** interface aesthetics.

Ensures the component is fully responsive, keyboard accessible, and exposes custom parameters (timing, easing, scale factors) via standard CSS custom properties.

## 1. What does this do?

This component provides a frosted-glass popover that opens with a subtle pulse animation when triggered, built entirely in pure CSS. Uses HTML5 checkbox click-outside triggers for zero-JS state management.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern inside a `<form>` to enable zero-JS state resets:

```html
<div class="pulse-popover-rs" style="--popover-pulse-duration: 2s;">
  <!-- Checkbox Toggle -->
  <input type="checkbox" id="pop-1" class="pulse-popover-toggle-rs" />

  <!-- Button Trigger -->
  <label
    for="pop-1"
    class="pulse-popover-trigger-rs"
    tabindex="0"
    role="button"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4"></path>
      <path d="M12 8h.01"></path>
    </svg>
    Open Popover
  </label>

  <!-- Popover Card -->
  <div
    class="pulse-popover-content-rs"
    role="dialog"
    aria-label="Basic popover"
  >
    <div class="pulse-popover-header-rs">
      <h4 class="pulse-popover-title-rs">Information</h4>
      <button type="button" class="pulse-popover-close-rs" aria-label="Close">
        ×
      </button>
    </div>
    <div class="pulse-popover-body-rs">
      <p>
        This is a basic popover with pulse animation. The subtle pulse effect
        draws attention without being distracting.
      </p>
    </div>
    <div class="pulse-popover-footer-rs">
      <button type="button" class="pulse-popover-btn-secondary-rs">
        Cancel
      </button>
      <button type="button" class="pulse-popover-btn-primary-rs">
        Confirm
      </button>
    </div>
  </div>
</div>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the wrapper element level:

| Variable                   | Description                     | Default                                  |
| -------------------------- | ------------------------------- | ---------------------------------------- |
| `--popover-duration`       | Open/close animation duration   | `0.25s`                                  |
| `--popover-ease`           | Open/close easing curve         | `cubic-bezier(0.4, 0, 0.2, 1)`           |
| `--popover-pulse-duration` | Pulse animation duration        | `2s`                                     |
| `--popover-pulse-ease`     | Pulse easing curve              | `ease-in-out`                            |
| `--popover-scale`          | Base scale factor when open     | `1`                                      |
| `--popover-pulse-scale`    | Pulse scale factor              | `1.02`                                   |
| `--popover-gap`            | Gap between trigger and popover | `8px`                                    |
| `--popover-max-width`      | Maximum popover width           | `280px`                                  |
| `--popover-bg`             | Background color                | `var(--ease-color-bg, #ffffff)`          |
| `--popover-border`         | Border color                    | `var(--ease-color-neutral-200, #e5e7eb)` |
| `--popover-shadow`         | Box shadow                      | `var(--ease-shadow-lg, ...)`             |
| `--popover-text`           | Text color                      | `var(--ease-color-text, #1f2937)`        |
| `--popover-text-muted`     | Muted text color                | `var(--ease-color-text-muted, #6b7280)`  |
| `--popover-radius`         | Border radius                   | `var(--ease-radius-lg, 0.75rem)`         |
| `--popover-padding`        | Internal padding                | `var(--ease-space-4, 1rem)`              |
| `--popover-z-index`        | Z-index                         | `var(--ease-z-dropdown, 100)`            |

### Position Variants

Add `data-position` attribute to the wrapper:

```html
<!-- Bottom (default) -->
<div class="pulse-popover-rs">
  <!-- Top -->
  <div class="pulse-popover-rs" data-position="top">
    <!-- Right -->
    <div class="pulse-popover-rs" data-position="right">
      <!-- Left -->
      <div class="pulse-popover-rs" data-position="left"></div>
    </div>
  </div>
</div>
```

## 3. Why is it useful?

Contextual help alerts, settings cards, and user onboarding tooltips are key requirements for complex dashboards and portal layouts. By styling them in premium Glassmorphism and leveraging HTML5 checkbox click-outside triggers, this popover performs smooth layout toggles and pulse animations entirely in pure CSS, aligning with EaseMotion's lightweight rendering performance and zero-dependency architecture.

### Key Features

- **Pure CSS** — No JavaScript required
- **Pulse-Active Animation** — Subtle continuous pulse when open draws attention
- **Keyboard Accessible** — Opens on focus, closes on Escape, traps focus
- **Click-Outside Dismiss** — Label overlay handles outside clicks
- **4 Position Variants** — Top, Right, Bottom, Left
- **CSS Custom Properties** — Full theming control via design tokens
- **Responsive** — Adapts to mobile viewports
- **Reduced Motion** — Respects `prefers-reduced-motion`
- **High Contrast** — Supports `forced-colors: active`
- **Dark Mode** — Automatic via CSS variables

### Accessibility

- `role="dialog"` with `aria-label` on popover content
- Trigger has `tabindex="0"` and `role="button"`
- Focus management opens on `:focus-within`
- Close button has `aria-label="Close"`
- Respects `prefers-reduced-motion: reduce`
- Works with Windows High Contrast Mode

---

**Suffix:** `-rs` (Rishab S.)
