# Feature Comparison Matrix Component

## Overview

A CSS-only Feature Comparison Matrix component for SaaS websites and product pages. Presents multiple plans side-by-side with feature rows, checkmarks, unavailable indicators, and a highlighted recommended plan.

Key goals:
- Clear readability and hierarchy
- Smooth hover interactions
- Responsive table-to-card behavior on small screens
- Pure HTML + CSS, no JavaScript

---

## Files

- `demo.html` — Self-contained example with three plans: Starter, Pro (recommended), Enterprise
- `style.css` — Styling, responsive rules, hover animations, reduced-motion support
- `README.md` — Documentation (this file)

---

## Purpose

This matrix helps users quickly compare plan differences and choose the best fit. It fits marketing pages, pricing sections, and product dashboards.

---

## Use Cases

- Pricing page comparisons
- Feature pages in product docs
- Internal product strategy dashboards
- Marketing landing pages

---

## HTML Structure

Overall container is a stacked set of grid rows that emulate a table:

```html
<section class="fcm">
  <div class="fcm-header"> <!-- plans header --> </div>
  <div class="fcm-row"> <!-- feature row --> </div>
  <!-- more rows -->
  <div class="fcm-cta-row"> <!-- CTAs per plan --> </div>
</section>
```

Cells use `.fcm-cell`. Plan columns use `.fcm-plan`. Feature text uses `.fcm-feature`.

To mark recommended plan add `.fcm-recommended` to the plan cell wrapper.

---

## Customization

- Change colors via CSS variables at the top of `style.css`:
```css
:root{
  --fcm-accent: #60a5fa;
  --fcm-success: #10b981;
}
```
- Swap checkmark/indicator symbols in the HTML (`✔` and `—`) for icons or SVGs.
- Change grid columns in `.fcm-header` and `.fcm-row` for more or fewer plans.
- Use `.fcm-card-compact` pattern (or media queries) to tweak stacking behavior.
- Modify `.ribbon` styles to change the recommended badge.

---

## Accessibility

- High-contrast text and tokens for readability
- Supports `prefers-reduced-motion` to disable hover transforms
- Semantic grouping using `<section>` and descriptive class names

---

## Why it fits EaseMotion CSS

- Pure CSS solution consistent with EaseMotion's zero-JS components
- Uses smooth, natural easing for hover and entrance effects
- Responsive-first design with careful use of CSS Grid and flexbox
- Easily composable with other EaseMotion components

---

## Notes

- The demo intentionally uses simple Unicode symbols for check/na states; replace with accessible SVG icons if desired.
- The matrix is designed to be copy-paste friendly and easy to adapt.

Build clear, readable comparisons with polished animations — all in CSS. 🚀
