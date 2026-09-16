# Basic Webhook Secret Row

## What it does

This submission adds a simple CSS-only webhook secret row for developer
settings, integration panels, webhook configuration pages, and security tools.

It presents a secret state icon, secret label, masked token value, rotation
metadata, and signing-secret state in one compact reusable row.

## How to use it

Add the base row class with a secret icon, copy area, metadata label, and state
pill:

```html
<article class="basic-webhook-secret-row">
  <span class="secret-icon is-active" aria-hidden="true">SK</span>
  <div class="secret-copy">
    <strong>Primary signing secret</strong>
    <p>whsec_live_********9A3F</p>
  </div>
  <span class="secret-meta">90d left</span>
  <span class="secret-state is-active">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
developer and security interfaces. The row can be reused inside webhook panels,
integration settings, signing-secret managers, and security dashboards while
staying lightweight and CSS-only.

## Included features

- Active, rotating, and expired secret examples
- Masked token display
- Rotation timing metadata
- Secret state pills
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the webhook secret row
- `README.md` - usage and contribution context
