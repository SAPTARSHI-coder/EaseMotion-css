# Basic User Mention Row

## What it does

This submission adds a simple CSS-only user mention row for member lists, reviewer panels, comment summaries, assignment rows, and team sections.

It aligns a small avatar marker, person name, supporting text, and right-side status in one compact layout.

## How to use it

Add the utility class to a row containing an avatar marker, user copy, and optional status:

```html
<div class="basic-user-mention-row">
  <span class="user-avatar" aria-hidden="true">KR</span>
  <div class="user-copy">
    <strong>Kriti Sharma</strong>
    <p>Frontend contributor</p>
  </div>
  <span class="user-status">Owner</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across team cards, dashboard panels, profile sections, reviewer lists, and activity summaries. It stays fully CSS-only and does not require external images.

## Included features

- Avatar marker, name, description, and status layout
- Circular initials avatar styling
- Divider support between rows
- Text truncation for long descriptions
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the user mention row
- `README.md` - usage and contribution context
