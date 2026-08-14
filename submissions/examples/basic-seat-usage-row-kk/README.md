# Basic Seat Usage Row

## What it does

This submission adds a simple CSS-only seat usage row for team billing pages,
workspace settings, admin dashboards, invite flows, and subscription panels.

It displays assigned seat count, workspace label, helper copy, usage progress,
and availability state in one compact row.

## How to use it

Add the base row class with a seat marker, copy, progress track, and state:

```html
<article class="basic-seat-usage-row">
  <span class="seat-mark" aria-hidden="true">12</span>
  <div class="seat-copy">
    <strong>Starter workspace</strong>
    <p>12 of 25 seats are currently assigned.</p>
    <span class="seat-track" aria-hidden="true">
      <span class="seat-fill" style="--value: 48%"></span>
    </span>
  </div>
  <span class="seat-state is-available">Available</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common team-management and billing interfaces. The row can be reused inside
workspace settings, subscription cards, invite panels, and admin dashboards
while staying lightweight and CSS-only.

## Included features

- Available, warning, and full seat usage states
- Assigned seat marker, helper copy, progress track, and state pill layout
- CSS variable-powered usage progress width
- Text truncation for long usage descriptions
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the seat usage row
- `README.md` - usage and contribution context
