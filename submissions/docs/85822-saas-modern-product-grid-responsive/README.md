# SaaS Modern Product Feature Grid — Responsive Breakpoints Layout

## Overview
This guide documents responsive breakpoint behavior for a SaaS Modern Product Feature Grid.

The grid presents related product capabilities as independent cards.

The layout adapts from multiple columns to a single readable column.

## Markup

```html
<section class="feature-grid" aria-labelledby="features-title">
  <h2 id="features-title">Product features</h2>
  <div class="feature-grid__list">
    <article class="feature-grid__item"><h3>Automation</h3><p>Streamline recurring work.</p></article>
    <article class="feature-grid__item"><h3>Analytics</h3><p>Understand product activity.</p></article>
    <article class="feature-grid__item"><h3>Security</h3><p>Protect important workflows.</p></article>
  </div>
</section>
```

## Class Structure

`feature-grid` is the component wrapper.

`feature-grid__list` controls the grid layout.

`feature-grid__item` is an individual feature card.

Use modifiers for deliberate density or emphasis variants.

## Custom Properties

```css
.feature-grid {
  --grid-gap: 1.25rem;
  --grid-radius: 1.25rem;
  --grid-surface: #ffffff;
  --grid-accent: #315efb;
}
```

Override variables within the consuming theme.

## Breakpoints

Use three columns when the container has enough width.

Reduce to two columns at medium widths.

Use one column on narrow screens.

Keep cards equal in visual rhythm without forcing equal content heights.

## Accessibility

Use a heading for the feature group.

Keep card headings meaningful.

Do not rely on card color to communicate feature importance.

Interactive cards should use real links or buttons.

## Keyboard Guidance

Native links and buttons provide keyboard access.

Keep focus indicators visible.

Avoid making an entire non-interactive card focusable.

## Responsive Testing

Test desktop, tablet, mobile, and 200 percent zoom.

Confirm text wraps without overflow.

Confirm card gaps remain consistent.

## Reduced Motion

Optional card hover effects should respect `prefers-reduced-motion`.

The content must remain understandable without movement.

## Files

`README.md` documents responsive layout.

`demo.html` contains the standalone feature grid.

`style.css` contains cleanly spaced responsive CSS.

## Summary

The product grid uses CSS Grid breakpoints to preserve readable cards across screen sizes.