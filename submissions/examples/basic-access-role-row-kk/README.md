# Basic Access Role Row

## What it does

This submission adds a simple CSS-only access role row for team settings,
permission panels, workspace member screens, and collaboration dashboards.

It presents a role icon, role name, helper text, permission scope, and role
state in one compact reusable row.

## How to use it

Add the base row class with a role icon, copy area, scope label, and role pill:

```html
<article class="basic-access-role-row">
  <span class="role-icon is-owner" aria-hidden="true">OW</span>
  <div class="role-copy">
    <strong>Owner access</strong>
    <p>Can manage billing, team members, and workspace settings.</p>
  </div>
  <span class="role-scope">Full</span>
  <span class="role-state is-owner">Owner</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
team administration interfaces. The row can be reused inside settings cards,
member lists, permission panels, and workspace dashboards while staying
lightweight and CSS-only.

## Included features

- Owner, admin, and viewer role examples
- Permission scope metadata
- Role state pills
- Long text truncation for permission descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the access role row
- `README.md` - usage and contribution context
