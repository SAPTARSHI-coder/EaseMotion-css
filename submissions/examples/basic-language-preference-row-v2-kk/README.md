# Basic Language Preference Row

## What it does

This submission adds a simple CSS-only language preference row for profile
pages, account settings, onboarding screens, and localization panels.

It presents a language code, language name, helper text, region label, and
availability state in one compact reusable row.

## How to use it

Add the base row class with a language code, copy area, region label, and state
pill:

```html
<article class="basic-language-preference-row is-selected">
  <span class="language-code" aria-hidden="true">EN</span>
  <div class="language-copy">
    <strong>English</strong>
    <p>Primary interface language for this workspace.</p>
  </div>
  <span class="language-region">US</span>
  <span class="language-state is-selected">Default</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
profile and settings interfaces. The row can be reused inside account panels,
localization settings, onboarding preferences, and workspace configuration pages
while staying lightweight and CSS-only.

## Included features

- English, Hindi, and French language examples
- Default, suggested, and locked state pills
- Region metadata label
- Long text truncation for helper descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the language preference row
- `README.md` - usage and contribution context
