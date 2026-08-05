# EaseMotion Table Pulse Animation

This submission implements a reusable `ease-pulse` animation specifically designed for Table components, as requested in Issue #48652.

## Feature Overview
The `ease-pulse` class provides subtle, non-distracting visual feedback for tables. It includes multiple variations to handle different business-case scenarios:
- **`.table-hover-pulse`**: Pulses the entire row when hovered.
- **`.table-row-selected`**: Provides a gentle background highlight pulse for selected or recently updated records.
- **`.status-live`**: Adds a continuous, GPU-accelerated pulse to status badges indicating real-time activity.
- **`.ease-pulse-skeleton`**: Applies a loading shimmer/pulse effect to table cell placeholders.

## Installation
Since this is a standalone example:
1. Copy the CSS from `style.css` into your project's stylesheet.
2. Apply the relevant classes to your HTML table markup as shown in `demo.html`.

## Usage Examples

**Hoverable Table Rows:**
```html
<table class="table-hover-pulse">
  <!-- Rows will gently pulse and highlight on hover -->
</table>
```

**Selected Row:**
```html
<tr class="table-row-selected">
  <!-- Highlights row to show selection or recent update -->
</tr>
```

**Live Status Badge:**
```html
<span class="status-badge status-live">Live</span>
```

**Loading Skeletons:**
```html
<td><span class="ease-pulse-skeleton skeleton-text"></span></td>
```

## Performance & Accessibility Considerations
- **GPU Acceleration:** `transform: translateZ(0)` and `will-change` are used to ensure the animations run smoothly on the GPU, avoiding expensive layout repaints.
- **Accessibility:** Fully supports `prefers-reduced-motion: reduce`. If a user has disabled system animations, all pulse effects, transitions, and transforms are safely disabled.

## Cross-Browser Compatibility
Successfully tested and verified responsive on:
- Chrome
- Firefox
- Safari (macOS/iOS)
- Edge
