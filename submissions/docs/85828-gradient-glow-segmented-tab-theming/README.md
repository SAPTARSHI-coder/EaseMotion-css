# Gradient Glow Segmented Tab Bar — Theming Configuration

## Overview
This guide documents theme configuration for the Gradient Glow Segmented Tab Bar.

The component presents related views as a set of selectable tabs.

The theme uses custom properties for surfaces, accents, borders, glow, and spacing.

## Markup

```html
<div class="tab-bar" role="tablist" aria-label="Account sections">
  <button class="tab-bar__tab tab-bar__tab--active" type="button" role="tab" aria-selected="true">Overview</button>
  <button class="tab-bar__tab" type="button" role="tab" aria-selected="false">Activity</button>
  <button class="tab-bar__tab" type="button" role="tab" aria-selected="false">Settings</button>
</div>
```

Keep the tab labels concise.

## Class Structure

`tab-bar` is the component wrapper.

`tab-bar__tab` is the reusable tab element.

`tab-bar__tab--active` identifies the selected visual state.

Use modifiers for compact or high-contrast themes.

## Theme Variables

```css
.tab-bar {
  --tab-surface: #101426;
  --tab-text: #b8c1d9;
  --tab-active: #ffffff;
  --tab-glow: #6c63ff;
  --tab-border: rgb(255 255 255 / 14%);
}
```

Override variables on a theme wrapper instead of duplicating component selectors.

## Accessibility

Use a clear tablist label.

Keep selected state programmatically available.

Maintain strong contrast between active and inactive labels.

Provide visible focus indicators.

Do not use glow as the only selected-state signal.

## Keyboard Navigation

Tab should enter the tab interface predictably.

Arrow-key navigation can be added when implementing the full tab pattern.

Keep the active tab synchronized with the associated panel.

Do not trap focus.

## Responsive Behavior

Allow tabs to wrap or scroll intentionally at narrow widths.

Avoid clipping labels.

Preserve a clear selected state on touch devices.

## Reduced Motion

Glow transitions are decorative and can be reduced.

Respect `prefers-reduced-motion` while keeping state visible.

## Usage

Use tabs for closely related content at the same hierarchy.

Avoid using the component for unrelated navigation destinations.

## Testing

Test keyboard focus, selected state, narrow widths, zoom, and reduced motion.

## Files

`README.md` documents theming.

`demo.html` provides the standalone example.

`style.css` contains the theme variables and layout.

## Summary

Custom properties make the gradient-glow theme reusable while preserving semantic tab behavior.