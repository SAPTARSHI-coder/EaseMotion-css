# Basic Date Format Row

## What it does

This submission adds a CSS-only date format row for profile settings, account
dashboards, localization panels, and preference screens.

It shows a date format marker, format label, helper text, region hint, example
output, and selected or disabled state in one compact reusable row.

## How to use it

Add the base row class with a format marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-date-format-row">
  <span class="format-mark is-selected" aria-hidden="true">IN</span>
  <div class="format-copy">
    <strong>DD MMM YYYY</strong>
    <p>Displays dates as 14 Aug 2026 for readable regional settings.</p>
  </div>
  <span class="format-region">India</span>
  <span class="format-example">14 Aug</span>
  <span class="format-state is-selected">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
profile and localization settings. Developers can reuse the same row pattern in
account preferences, regional settings, admin panels, and onboarding flows while
keeping the implementation lightweight and CSS-only.

## Included features

- Selected, available, and disabled date format examples
- Date format marker badges
- Region metadata
- Example output metadata
- Format preference state styling
- Long text truncation for compact settings panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the date format row
- `README.md` - usage and contribution context
