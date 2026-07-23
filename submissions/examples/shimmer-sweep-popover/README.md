# Shimmer Sweep Popover (`.popover-wrapper`)

A lightweight, pure CSS interactive Popover component utilizing a smooth Shimmer Sweep transition. Styled to complement modern, premium SaaS interfaces, the component is fully responsive, keyboard-accessible, and highly customizable via CSS custom properties.

---

## Features

- **Pure CSS Architecture**: Zero JavaScript is required to toggle, position, or animate the popover, ensuring ultra-light bundle footprint and instant loading.
- **Shimmer Sweep Transition**: On open, a sharp diagonal gloss light sheen sweeps across the popover background, adding high-grade visual polish.
- **Keyboard Accessible**: Opens when the trigger element is focused and supports tabbing into inner popover elements seamlessly via `:focus-within` selectors.
- **Reduced Motion Support**: Automatically disables transition timings and keyframe animations when users specify `prefers-reduced-motion: reduce`.
- **Modern SaaS Aesthetics**: Includes subtle back-blurs (`backdrop-filter`), glowing gradient borders, and sleek layout cards by default.

---

## Usage

### HTML Structure
Provide a relative wrapper containing a trigger element and a content block with a `.popover-shimmer` div:

```html
<div class="popover-wrapper">
  <!-- Trigger Button -->
  <button class="popover-trigger" aria-haspopup="true" aria-expanded="false">
    Launch Panel
  </button>
  
  <!-- Popover Content Card -->
  <div class="popover-content" role="dialog" aria-label="Notification Overview">
    <!-- Shimmer reflection element -->
    <div class="popover-shimmer"></div>
    
    <!-- Popover Card Content -->
    <div class="popover-body">
      <h3 class="popover-title">Update Ready</h3>
      <p class="popover-desc">A new database patch has been prepared for deploy.</p>
      <a href="#" class="popover-link">View Logs</a>
    </div>
  </div>
</div>
```

---

## CSS Variables API

Adjust custom parameters dynamically by updating CSS custom properties at the `.popover-wrapper` level:

| CSS Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--popover-bg` | `rgba(15, 23, 42, 0.95)` | Background color of the popover card. |
| `--popover-border` | `rgba(255, 255, 255, 0.08)` | Border color of the popover card. |
| `--popover-duration` | `0.35s` | Duration of the popover reveal fade. |
| `--popover-easing` | `cubic-bezier(...)` | Easing curve for the popover scale/fade transition. |
| `--popover-initial-scale` | `0.94` | Starting scale factor of the popover card. |
| `--popover-translate-y` | `12px` | Translation offset height before activation. |
| `--shimmer-color` | `rgba(99, 102, 241, 0.25)` | Backing color of the sliding diagonal shimmer gradient. |
| `--shimmer-duration` | `0.85s` | Speed of the diagonal shimmer light sweep. |
| `--shimmer-easing` | `cubic-bezier(...)` | Easing curve of the shimmer sweep. |
| `--shimmer-delay` | `0.08s` | Delay before the shimmer starts sweep after popover opens. |

---

## Accessibility Notes

- **Aria Structure**: Trigger is marked with `aria-haspopup="true"` to indicate a submenu, and popover content is configured with `role="dialog"` or `role="tooltip"` for screen reader compatibility.
- **Focus Outlines**: Focused buttons feature high-contrast focus rings (`outline: 2px solid #6366F1`) with offsets to ensure proper visibility.
- **Keyboard Tab Flow**:
  - The wrapper employs `:focus-within` which ensures that if a user tabs past the trigger button and into the inner action links of the popover, the popover remains visible.
  - When the focus leaves the wrapper entirely, the popover hides automatically.
