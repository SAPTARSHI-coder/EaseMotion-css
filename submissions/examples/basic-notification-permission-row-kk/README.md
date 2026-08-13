# Basic Notification Permission Row

## What it does

This submission adds a simple CSS-only notification permission row for settings
pages, onboarding flows, privacy panels, account preferences, and admin tools.

It displays a permission icon, label, helper copy, state pill, and toggle-style
visual in one compact row.

## How to use it

Add the base row class with state and toggle elements:

```html
<article class="basic-notification-permission-row">
  <span class="permission-icon" aria-hidden="true">N</span>
  <div class="permission-copy">
    <strong>Product updates</strong>
    <p>Receive release notes and important announcements.</p>
  </div>
  <span class="permission-state is-granted">Allowed</span>
  <span class="permission-toggle is-on" aria-hidden="true"></span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common account and settings interfaces. The row uses subtle hover motion and a
CSS-only toggle visual while keeping the markup lightweight.

## Included features

- Granted, prompt, and blocked permission states
- Permission icon, copy, state, and toggle-style layout
- CSS-only toggle visual
- Text truncation for long helper copy
- Subtle hover lift interaction
- Responsive two-column wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the notification permission row
- `README.md` - usage and contribution context
