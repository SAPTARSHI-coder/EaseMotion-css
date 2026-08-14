# Basic Notification Channel Row

## What it does

This submission adds a simple CSS-only notification channel row for account
settings, onboarding preferences, notification centers, privacy panels, and
workspace settings screens.

It displays a channel marker, channel label, helper copy, and delivery state in
one compact row.

## How to use it

Add the base row class with a channel marker, copy, and state pill:

```html
<article class="basic-notification-channel-row">
  <span class="channel-mark" aria-hidden="true">@</span>
  <div class="channel-copy">
    <strong>Email notifications</strong>
    <p>Send product updates and security alerts to the primary email.</p>
  </div>
  <span class="channel-state is-active">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common notification and account settings interfaces. The row can be used in
settings cards, onboarding screens, privacy panels, and preference dashboards
while staying lightweight and CSS-only.

## Included features

- Active, quiet, and disabled channel states
- Email, SMS, and in-app channel examples
- Channel marker, helper copy, and state pill layout
- Text truncation for long helper copy
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the notification channel row
- `README.md` - usage and contribution context
