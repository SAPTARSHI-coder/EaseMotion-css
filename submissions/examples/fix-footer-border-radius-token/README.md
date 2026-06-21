# Fix: Use --ease-radius-lg Token for Footer Social Icon Link Border Radius

## Problem

`.ease-footer-social a` hardcoded `border-radius: 12px` with no CSS custom property:

```css
.ease-footer-social a {
  border-radius: 12px;
}
```

Users who want to adjust the social icon shape (e.g. switch to pill or circular) must override `.ease-footer-social a` directly with higher specificity. The nearest design token is `--ease-radius-lg: 12px`.

## Solution

Replace the hardcoded value with the design token:

```css
.ease-footer-social a {
  border-radius: var(--ease-radius-lg, 12px);
}
```

## Usage

```css
/* Switch to circular social icons globally */
:root {
  --ease-radius-lg: 9999px;
}

/* Override per footer instance */
.my-footer .ease-footer-social a {
  --ease-radius-lg: 50%;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses design tokens so users can customise components without specificity battles. Social icon border radius is a key visual property that should follow the same token-driven approach as other border radius values in the framework.

Fixes #10417
