# Basic Invite Status Row

## What it does

This submission adds a simple CSS-only invite status row for team settings,
workspace member panels, onboarding dashboards, and collaboration tools.

It presents an invite state icon, recipient email, helper text, assigned role,
and invitation state in one compact reusable row.

## How to use it

Add the base row class with an invite icon, copy area, role label, and state
pill:

```html
<article class="basic-invite-status-row">
  <span class="invite-icon is-accepted" aria-hidden="true">AC</span>
  <div class="invite-copy">
    <strong>maya@example.com</strong>
    <p>Accepted the invitation and joined the workspace.</p>
  </div>
  <span class="invite-role">Admin</span>
  <span class="invite-state is-accepted">Accepted</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
team management interfaces. The row can be reused inside member lists, invite
panels, workspace settings, and onboarding dashboards while staying lightweight
and CSS-only.

## Included features

- Accepted, pending, and expired invite examples
- Assigned role metadata
- Invitation state pills
- Long text truncation for recipient and helper copy
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the invite status row
- `README.md` - usage and contribution context
