# Basic Credential Status Row

## What it does

This submission adds a simple CSS-only credential status row for profile verification, account settings, onboarding screens, admin review panels, and identity summaries.

It aligns a credential marker, verification title, helper copy, and small state label in one compact layout.

## How to use it

Add the utility class to a row containing a credential marker, copy, and state:

```html
<div class="basic-credential-status-row">
  <span class="credential-marker" aria-hidden="true">ID</span>
  <div class="credential-copy">
    <strong>Identity verification</strong>
    <p>Government ID has been reviewed and approved.</p>
  </div>
  <span class="credential-state is-verified">Verified</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across profile pages, account settings, onboarding cards, verification panels, and admin review workflows. It keeps credential state information easy to scan with pure HTML and CSS.

## Included features

- Credential marker, title, helper copy, and state layout
- Verified, review, and pending examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the credential status row
- `README.md` - usage and contribution context
