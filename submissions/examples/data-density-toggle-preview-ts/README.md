# Data Density Toggle Preview

## What does this do?

This is a CSS-only interactive demo comparing Comfortable, Compact, and Dense UI spacing modes, using segmented radio controls and smooth padding/gap transitions.

## How is it used?

Add the appropriate density class to your container element:

```html
<div class="density-preview">
  <!-- Comfortable (default) -->
  <div class="density-row">Orders <span>128</span></div>
  <div class="density-row">Open tickets <span>14</span></div>
</div>

<div class="density-preview density-compact">
  <!-- Compact -->
  <div class="density-row">Orders <span>128</span></div>
  <div class="density-row">Open tickets <span>14</span></div>
</div>

<div class="density-preview density-dense">
  <!-- Dense -->
  <div class="density-row">Orders <span>128</span></div>
  <div class="density-row">Open tickets <span>14</span></div>
</div>
```

You can customize the row padding using the CSS variable:

```css
.density-row {
  padding: var(--row-padding, 0.85rem);
}
```

## Why is it useful?

Operational dashboards, data-intensive tables, and enterprise applications often require density controls to let users choose between scanability (comfortable) and high data throughput (dense). This CSS-only solution shows how spacing, transitions, and layouts can adapt seamlessly to these modes while respecting accessibility (including `prefers-reduced-motion`).

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open demo.html directly in your browser to see the effect.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
