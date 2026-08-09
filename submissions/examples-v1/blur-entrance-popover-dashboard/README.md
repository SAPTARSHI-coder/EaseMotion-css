# Blur-Entrance Popover (Dashboard Layout)

A lightweight, pure CSS interactive Popover component utilizing a smooth, modern Blur-Entrance transition. Styled to complement modern, high-grade SaaS and dashboard interfaces, the component is fully responsive, keyboard-accessible, and highly customizable via standard CSS custom properties.


---

## Features

- **Pure CSS Architecture**: Zero JavaScript is required to toggle, position, or animate the popover, ensuring a lightweight footprint and instant loading.
- **Blur-Entrance Transition**: On open, the popover smoothly scales, translates, and transitions from an initial blurred state to a sharp, high-fidelity card.
- **Keyboard Accessible**: Opens when the trigger element is focused and supports tabbing into inner popover elements seamlessly via `:focus-within` selectors.
- **Reduced Motion Support**: Automatically disables transition timings, scaling offsets, and blur filters when users specify `prefers-reduced-motion: reduce`.
- **Modern SaaS Aesthetics**: Styled with frosted glass back-blurs (`backdrop-filter`), glowing borders, and clean status grids suited for analytics interfaces.

---

## Usage

### HTML Structure
Provide a relative wrapper containing a trigger element and a content block with a `.popover-body` content structure:

```html
<div class="popover-wrapper">
  <!-- Trigger Button -->
  <button class="popover-trigger" aria-haspopup="true" aria-expanded="false">
    Cluster Analytics
  </button>
  
  <!-- Popover Content Card -->
  <div class="popover-content" role="dialog" aria-label="Cluster Analytics Snapshot">
    <div class="popover-body">
      <header class="popover-header">
        <span class="popover-badge">Active Node</span>
        <span class="popover-time">Updated 1m ago</span>
      </header>
      
      <h3 class="popover-title">US-East-1 Cluster</h3>
      <p class="popover-desc">All instances are currently executing workload scripts under standard thresholds.</p>
      
      <div class="popover-stats-grid">
        <div class="popover-stat-item">
          <span class="stat-item-label">CPU Usage</span>
          <span class="stat-item-value">42.5%</span>
        </div>
        <div class="popover-stat-item">
          <span class="stat-item-label">Memory</span>
          <span class="stat-item-value">6.8 GB</span>
        </div>
      </div>
      
      <footer class="popover-actions">
        <a href="#" class="popover-link">Inspect Nodes &rarr;</a>
      </footer>
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
| `--popover-duration` | `0.4s` | Duration of the popover entrance fade, scale, and unblur. |
| `--popover-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Easing curve for the popover transition. |
| `--popover-initial-scale` | `0.92` | Starting scale factor of the popover card. |
| `--popover-translate-y` | `10px` | Translation offset height on the Y-axis before activation. |
| `--popover-blur-initial` | `12px` | Starting filter blur amount before activating. |

---

## Accessibility Notes

- **Aria Structure**: Trigger is marked with `aria-haspopup="true"` to indicate a submenu, and popover content is configured with `role="dialog"` or `role="tooltip"` for screen reader compatibility.
- **Focus Outlines**: Focused buttons feature high-contrast focus rings (`outline: 2px solid var(--accent-color)`) with offsets to ensure proper visibility.
- **Keyboard Tab Flow**:
  - The wrapper employs `:focus-within` which ensures that if a user tabs past the trigger button and into the inner action links of the popover, the popover remains visible.
  - When the focus leaves the wrapper entirely, the popover hides automatically.
