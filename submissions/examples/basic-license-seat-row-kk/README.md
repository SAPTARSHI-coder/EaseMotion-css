# Basic License Seat Row

## What it does

This submission adds a CSS-only license seat row for SaaS admin panels,
workspace settings, billing pages, and team management dashboards.

It shows a user avatar, seat owner, role, recent activity, and seat lifecycle
state in one compact reusable row.

## How to use it

Add the base row class with an avatar, copy area, metadata pills, and a state
pill:

```html
<article class="basic-license-seat-row">
  <span class="seat-avatar is-active" aria-hidden="true">AM</span>
  <div class="seat-copy">
    <strong>Aarav Mehta</strong>
    <p>Product workspace admin with full billing access.</p>
  </div>
  <span class="seat-role">Admin</span>
  <span class="seat-activity">Today</span>
  <span class="seat-state is-active">Assigned</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
SaaS admin interfaces. Developers can reuse the same row pattern in billing
settings, workspace member lists, team dashboards, and license management
screens while keeping the implementation lightweight and CSS-only.

## Included features

- Assigned, invited, and inactive seat examples
- Initial avatar markers
- Role and activity metadata pills
- Seat lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the license seat row
- `README.md` - usage and contribution context
