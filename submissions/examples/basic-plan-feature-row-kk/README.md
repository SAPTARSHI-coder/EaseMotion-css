# Basic Plan Feature Row

## What it does

This submission adds a simple CSS-only plan feature row for pricing tables,
feature comparison sections, subscription pages, and product upgrade screens.

It presents a feature state icon, feature name, helper copy, plan name, and
availability badge in a compact reusable row.

## How to use it

Add the base row class with a state marker, copy area, plan label, and feature
badge:

```html
<article class="basic-plan-feature-row">
  <span class="feature-state is-included" aria-hidden="true">✓</span>
  <div class="feature-copy">
    <strong>Unlimited projects</strong>
    <p>Create and organize as many active projects as needed.</p>
  </div>
  <span class="plan-name">Pro</span>
  <span class="feature-badge is-included">Included</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, reusable, and useful across
common SaaS and product interfaces. The row can be combined with cards, pricing
sections, billing dashboards, or comparison tables while staying CSS-only and
self-contained.

## Included features

- Included, limited, and unavailable feature states
- Circular status marker
- Plan label and availability badge
- Filename-style text truncation for long feature copy
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the plan feature row
- `README.md` - usage and contribution context
