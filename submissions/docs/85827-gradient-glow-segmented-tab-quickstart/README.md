# Gradient Glow Segmented Tab Bar — Quickstart Guide

## Overview
This quickstart shows how to add a Gradient Glow Segmented Tab Bar.

The example uses semantic buttons and a tablist container.

The active state is represented visually and programmatically.

## Step 1 — Add the Markup

```html
<div class="tab-bar" role="tablist" aria-label="Sections">
  <button class="tab-bar__tab tab-bar__tab--active" type="button" role="tab" aria-selected="true">Overview</button>
  <button class="tab-bar__tab" type="button" role="tab" aria-selected="false">Details</button>
</div>
```

## Step 2 — Load CSS

Include `style.css` after the page metadata.

The stylesheet contains all presentation rules used by the demo.

## Class Structure

`tab-bar` is the component wrapper.

`tab-bar__tab` is the tab element.

`tab-bar__tab--active` marks the selected visual state.

## Custom Properties

```css
.tab-bar {
  --tab-glow: #6c63ff;
  --tab-surface: #101426;
  --tab-text: #b8c1d9;
}
```

Override these values to match the host design system.

## Accessibility

Give the tablist a useful accessible label.

Expose selected state with `aria-selected`.

Keep focus visible.

Do not communicate selection only through glow.

## Keyboard Guidance

Use native buttons for reliable keyboard access.

Implement arrow-key navigation only when following the complete tab pattern.

Keep focus order predictable.

## Responsive Behavior

Allow the tab group to wrap at narrow widths.

Avoid clipped labels and horizontal overflow.

## Reduced Motion

Treat glow transitions as decorative.

Respect `prefers-reduced-motion`.

## Customization

Change glow, surface, text, radius, and spacing through CSS variables.

Use modifiers for deliberate size variants.

## Testing

Check mouse, touch, keyboard, zoom, narrow layouts, focus, and reduced motion.

## Files

`README.md` is the quickstart guide.

`demo.html` is the browser-ready example.

`style.css` contains the component styles.

## Summary

Copy the markup, load the stylesheet, set the active state, and customize the variables for the project.