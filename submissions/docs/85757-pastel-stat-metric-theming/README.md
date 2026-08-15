# Pastel Stat Metric Card — Theming Configuration

This guide documents theme configuration for a pastel statistic card.

The card uses semantic headings, readable metric content, and CSS custom properties.

## Markup

```html
<article class="stat-card"><p class="stat-card__label">Active users</p><strong class="stat-card__value">24.8K</strong><p>Across all workspaces</p></article>
```

## Theme Variables

```css
.stat-card {
  --stat-surface: #fff7ed;
  --stat-accent: #f97316;
  --stat-text: #292524;
  --stat-radius: 1.25rem;
}
```

Override variables in a theme scope for alternate palettes.

## Accessibility

Use meaningful text for the metric and label.

Do not encode metric status through color alone.

Maintain sufficient contrast and readable type at browser zoom.

## Responsive Behavior

Allow the card to shrink within its parent and wrap supporting text.

Avoid fixed dimensions that clip large metrics.

## Reduced Motion

Decorative transitions must respect `prefers-reduced-motion`.

The metric must remain readable without animation.

## Testing

Check contrast, zoom, keyboard navigation when links exist, mobile widths, and reduced motion.

## Files

`README.md` documents the theme.

`demo.html` provides the visual example.

`style.css` contains the formatted component styles.
