# Basic Language Selector Row

## What it does

This submission adds a CSS-only language selector row for profile settings,
localization panels, onboarding flows, and account preference screens.

It shows a language shortcut, language name, region, locale code, writing
script, and selected or available state in one compact reusable row.

## How to use it

Add the base row class with optional `is-selected` state:

```html
<article class="basic-language-selector-row is-selected">
  <span class="language-icon" aria-hidden="true">EN</span>
  <div class="language-copy">
    <strong>English</strong>
    <p>United States</p>
  </div>
  <span class="language-code">en-US</span>
  <span class="language-script">Latin</span>
  <span class="language-state">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
settings interfaces. Developers can reuse the same row in profile forms,
localization menus, onboarding steps, and account settings while keeping the
implementation lightweight and CSS-only.

## Included features

- Language shortcut icon block
- Language name and region text
- Locale code pill
- Writing script pill
- Selected and available state styling
- Subtle hover slide interaction
- Selected side accent
- Long text truncation for compact layouts
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the language selector row
- `README.md` - usage and contribution context
