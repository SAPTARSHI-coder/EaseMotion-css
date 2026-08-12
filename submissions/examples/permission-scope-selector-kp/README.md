# Permission Scope Selector KP

## What does this do?

Permission Scope Selector KP adds an accessible integration-permission card with animated toggles, selected-state feedback, and a responsive access summary.

## How is it used?

Wrap each checkbox and its visible content in a `scope-item`, then add the `scope-switch` element for the animated control.

```html
<label class="scope-item">
  <input type="checkbox" checked />
  <span class="scope-item__icon" aria-hidden="true">P</span>
  <span class="scope-item__copy">
    <strong>View projects</strong>
    <small>Read project names, status, and milestones</small>
  </span>
  <span class="scope-switch" aria-hidden="true"></span>
</label>
```

## Why is it useful?

It gives EaseMotion CSS a practical authorization pattern that communicates permission changes through focused motion while preserving keyboard access, responsive behavior, and reduced-motion support.
