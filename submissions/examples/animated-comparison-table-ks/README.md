# Animated Comparison Table

A responsive, animated pricing feature comparison table built with EaseMotion CSS.

## What does this do?

Displays a comparison table with animated row reveals, a pulsing "Most Popular" badge, and smooth hover states — all using core EaseMotion CSS utility classes.

## How is it used?

```html
<!-- Rows stagger-reveal on scroll -->
<div class="cmp-table-row ease-reveal ease-reveal-up ease-reveal-delay-1">
  <div class="cmp-cell-feature">
    <span class="feature-icon">👥</span>
    <span class="feature-label">Team Members</span>
  </div>
  <div class="cmp-cell-plan">5</div>
  <div class="cmp-cell-plan cmp-cell-plan-popular">20</div>
  <div class="cmp-cell-plan">Unlimited</div>
</div>
```

## Why is it useful?

Comparison tables are one of the most common patterns on SaaS landing pages, but they're often built with heavy JS frameworks or boring static tables. This demo shows how EaseMotion CSS's reveal system and utility classes can turn a standard table into a polished, animated experience with zero JavaScript frameworks — just vanilla CSS and EaseMotion.
