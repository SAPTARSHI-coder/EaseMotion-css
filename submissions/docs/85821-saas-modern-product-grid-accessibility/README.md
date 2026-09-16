# SaaS Modern Product Feature Grid — Accessibility Setup

## Overview
This guide documents accessibility setup for a SaaS Modern Product Feature Grid.

The component groups related features under a descriptive heading.

Cards remain readable without decorative effects.

## Markup

```html
<section class="feature-grid" aria-labelledby="features-title">
  <h2 id="features-title">Product features</h2>
  <div class="feature-grid__list">
    <article class="feature-grid__item">
      <h3>Automation</h3>
      <p>Streamline recurring work.</p>
    </article>
  </div>
</section>
```

Use headings to establish a clear hierarchy.

Use native links or buttons when cards are interactive.

## Accessibility

Do not make decorative containers focusable.

Keep text contrast strong against card surfaces.

Do not communicate importance only through color.

Use descriptive link names when a card has a destination.

## Keyboard Navigation

Native links and buttons are keyboard accessible.

Keep focus indicators visible.

Avoid positive tabindex values.

Keep focus order aligned with reading order.

## Class Structure

`feature-grid` is the wrapper.

`feature-grid__list` contains the cards.

`feature-grid__item` is an individual feature.

Modifiers should only change intentional presentation variants.

## Custom Properties

```css
.feature-grid {
  --grid-surface: #ffffff;
  --grid-text: #172033;
  --grid-focus: #2457ff;
  --grid-border: #dfe4ee;
}
```

## Responsive Behavior

Use CSS Grid breakpoints to keep text readable.

Allow cards to become a single column on small screens.

Test at 200 percent zoom.

## Reduced Motion

Disable optional hover movement under `prefers-reduced-motion`.

Content must remain complete without animation.

## Testing

Test keyboard focus, contrast, zoom, narrow layouts, and assistive technology.

## Files

`README.md` contains the accessibility guide.

`demo.html` contains the example.

`style.css` contains the presentation rules.

## Summary

Semantic headings, native interactive elements, visible focus, and responsive layout provide a strong accessibility baseline.