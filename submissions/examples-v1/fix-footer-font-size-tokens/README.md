# Fix: Replace Hardcoded Font Sizes with Design Token Variables in footer.css

## Problem

`components/footer.css` used font size values outside the `--ease-text-*` token scale:

```css
.ease-footer-col-title {
  font-size: 0.9rem; /* not a token value */
}

.ease-footer-bottom {
  font-size: 0.8rem; /* not a token value */
}
```

The framework defines `--ease-text-sm: 0.875rem` and `--ease-text-xs: 0.75rem`. Using `0.9rem` and `0.8rem` creates values outside the design scale, making footer typography impossible to adjust via the token system.

## Solution

Replace with the nearest design token values:

```css
.ease-footer-col-title {
  font-size: var(--ease-text-sm, 0.875rem); /* was 0.9rem */
}

.ease-footer-bottom {
  font-size: var(--ease-text-xs, 0.75rem); /* was 0.8rem */
}
```

## Usage

Override globally via tokens:

```css
:root {
  --ease-text-sm: 1rem;   /* affects footer column titles and other sm text */
  --ease-text-xs: 0.8rem; /* affects footer bottom bar and other xs text */
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses a defined typography scale via `--ease-text-*` tokens. All component font sizes should reference these tokens so typography can be adjusted globally without targeting individual component selectors.

Fixes #10416
