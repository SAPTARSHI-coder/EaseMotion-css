# Basic Workspace Switcher Row

## What it does

This submission adds a CSS-only workspace switcher row for dashboards, team
settings, organization menus, and multi-workspace SaaS products.

It shows a workspace shortcut, workspace name, helper text, environment badge,
member count, and current or switch state in one compact reusable row.

## How to use it

Add the base row class with optional `is-selected` state:

```html
<article class="basic-workspace-switcher-row is-selected">
  <span class="workspace-icon" aria-hidden="true">AP</span>
  <div class="workspace-copy">
    <strong>Acme Product</strong>
    <p>Primary team workspace</p>
  </div>
  <span class="workspace-env">Production</span>
  <span class="workspace-members">18 members</span>
  <span class="workspace-state">Current</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
team and settings interfaces. Developers can reuse the same row in organization
menus, project switchers, account sidebars, and admin dashboards while keeping
the implementation lightweight and CSS-only.

## Included features

- Workspace shortcut icon block
- Workspace name and helper text
- Environment badge
- Member count badge
- Current and switch state styling
- Subtle hover slide interaction
- Selected side accent
- Long text truncation for compact layouts
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the workspace switcher row
- `README.md` - usage and contribution context
