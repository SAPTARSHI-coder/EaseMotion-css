# Basic Invite Link Row

## What it does

This submission adds a CSS-only invite link row for workspace settings, team
management dashboards, admin panels, and access control screens.

It shows an invite marker, invite label, helper text, default role, usage count,
and lifecycle state in one compact reusable row.

## How to use it

Add the base row class with an invite marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-invite-link-row">
  <span class="invite-mark is-active" aria-hidden="true">IN</span>
  <div class="invite-copy">
    <strong>Design team invite</strong>
    <p>Reusable onboarding link for product designers.</p>
  </div>
  <span class="invite-role">Editor</span>
  <span class="invite-usage">12 used</span>
  <span class="invite-state is-active">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
workspace administration interfaces. Developers can reuse the same row pattern
in team settings, access control dashboards, invite management panels, and
onboarding flows while keeping the implementation lightweight and CSS-only.

## Included features

- Active, expiring, and disabled invite examples
- Invite marker badges
- Default role metadata
- Usage count metadata
- Lifecycle state styling
- Long text truncation for compact dashboards
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the invite link row
- `README.md` - usage and contribution context
