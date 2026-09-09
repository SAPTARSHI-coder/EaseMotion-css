# Basic Language Preference Row

## What it does

This submission adds a simple CSS-only language preference row for profile
settings, onboarding forms, account preferences, localization panels, and
documentation settings screens.

It displays a language marker, language name, helper copy, and state label in
one compact row.

## How to use it

Add the base row class with a language marker, copy, and state:

```html
<article class="basic-language-preference-row is-selected">
  <span class="language-mark" aria-hidden="true">EN</span>
  <div class="language-copy">
    <strong>English</strong>
    <p>Used for product UI, email updates, and help articles.</p>
  </div>
  <span class="language-state">Default</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common account and localization interfaces. The row can be added to settings
cards, profile screens, onboarding steps, and documentation tools while staying
lightweight and CSS-only.

## Included features

- Default, available, and beta language states
- Language initials marker
- Helper copy and state label layout
- Selected row styling
- Text truncation for long descriptions
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the language preference row
- `README.md` - usage and contribution context
