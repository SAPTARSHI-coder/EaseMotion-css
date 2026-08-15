# Basic Locale Option Row

## What it does

This submission adds a simple CSS-only locale option row for language settings, region pickers, account preferences, onboarding screens, and profile setup panels.

It aligns a locale marker, language name, region/helper copy, and selected state in one compact layout.

## How to use it

Add the utility class to a row containing a locale marker, copy, and state:

```html
<div class="basic-locale-option-row">
  <span class="locale-marker" aria-hidden="true">EN</span>
  <div class="locale-copy">
    <strong>English</strong>
    <p>United States - default workspace language.</p>
  </div>
  <span class="locale-state is-selected">Selected</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across settings screens, onboarding cards, region selectors, and profile preference panels. It keeps locale choices easy to scan with pure HTML and CSS.

## Included features

- Locale marker, language title, helper copy, and state layout
- Selected, available, and review examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the locale option row
- `README.md` - usage and contribution context
