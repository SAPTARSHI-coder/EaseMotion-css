# Basic Workspace Role Row

## What it does

This submission adds a simple CSS-only workspace role row for team settings,
access-control panels, admin dashboards, project member lists, and organization
settings screens.

It displays avatar initials, member details, and a role label in one compact
row.

## How to use it

Add the base row class with avatar, member copy, and role pill:

```html
<article class="basic-workspace-role-row">
  <span class="member-avatar" aria-hidden="true">KR</span>
  <div class="member-copy">
    <strong>Kriti Rao</strong>
    <p>kriti@example.com</p>
  </div>
  <span class="role-pill role-owner">Owner</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
team-management interfaces. The row is easy to combine with settings cards,
admin tables, and profile panels while using subtle CSS-only hover motion.

## Included features

- Owner, editor, and viewer role variants
- Avatar initials and member copy layout
- Text truncation for long email addresses
- Compact role pill styling
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the workspace role row
- `README.md` - usage and contribution context
