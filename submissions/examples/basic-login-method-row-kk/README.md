# Basic Login Method Row

## What it does

This submission adds a simple CSS-only login method row for account security
settings, profile settings, admin user panels, onboarding screens, and team
authentication pages.

It displays a login method marker, method label, helper copy, and setup state in
one compact row.

## How to use it

Add the base row class with a method marker, copy, and state pill:

```html
<article class="basic-login-method-row">
  <span class="login-mark" aria-hidden="true">PW</span>
  <div class="login-copy">
    <strong>Password</strong>
    <p>Primary sign-in method for this account.</p>
  </div>
  <span class="login-state is-enabled">Enabled</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common account security interfaces. The row can be used inside settings cards,
admin dashboards, onboarding panels, and authentication preference screens while
staying lightweight and CSS-only.

## Included features

- Password, passkey, and SSO login method examples
- Enabled, recommended, and setup states
- Method marker, helper copy, and state pill layout
- Text truncation for long helper copy
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the login method row
- `README.md` - usage and contribution context
