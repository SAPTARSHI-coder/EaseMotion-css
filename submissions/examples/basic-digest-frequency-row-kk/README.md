# Basic Digest Frequency Row

## What it does

This submission adds a simple CSS-only digest frequency row for email
preferences, notification settings, account panels, onboarding screens, and
workspace settings pages.

It displays a digest icon, title, helper copy, and frequency pill in one compact
row.

## How to use it

Add the base row class with an icon, copy, and frequency pill:

```html
<article class="basic-digest-frequency-row">
  <span class="digest-icon" aria-hidden="true">D</span>
  <div class="digest-copy">
    <strong>Daily product digest</strong>
    <p>Receive important updates once every morning.</p>
  </div>
  <span class="frequency-pill is-daily">Daily</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common settings interfaces. The component keeps notification preferences easy
to scan while using subtle CSS-only hover motion and lightweight markup.

## Included features

- Daily, weekly, and paused frequency states
- Digest icon, helper copy, and frequency pill layout
- Text truncation for long helper copy
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the digest frequency row
- `README.md` - usage and contribution context
