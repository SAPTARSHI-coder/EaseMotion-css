# Basic Availability Status Row

## What it does

This submission adds a simple CSS-only availability status row for team directories, support hours, booking panels, profile cards, and service status sections.

It aligns a status marker, person or service name, helper copy, and an availability label in one compact layout.

## How to use it

Add the utility class to a row containing a status marker, copy, and label:

```html
<div class="basic-availability-status-row">
  <span class="availability-dot is-available" aria-hidden="true"></span>
  <div class="availability-copy">
    <strong>Support desk</strong>
    <p>Replies usually arrive within 10 minutes.</p>
  </div>
  <span class="availability-label is-available">Available</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across team pages, booking cards, support dashboards, profile sections, and service panels. It keeps availability information easy to scan with pure HTML and CSS.

## Included features

- Status marker, title, helper copy, and label layout
- Available, busy, and offline examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the availability status row
- `README.md` - usage and contribution context
