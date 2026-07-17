# Fix: Replace Hardcoded font-size: 0.9rem with Design Token in chip.css

## Problem

`components/chip.css` `.ease-chip-lg` used a font size outside the `--ease-text-*` token scale:

```css
.ease-chip-lg {
  font-size: 0.9rem; /* not a token value */
}
```

The framework defines `--ease-text-sm: 0.875rem`. Using `0.9rem` creates an off-scale value making chip typography impossible to adjust via the token system and inconsistent with the design scale.

## Solution

Replace with the nearest design token:

```css
.ease-chip-lg {
  font-size: var(--ease-text-sm, 0.875rem);
}
```

## Usage

```css
/* Adjust all sm text including large chip font size */
:root {
  --ease-text-sm: 1rem;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses a defined typography scale via `--ease-text-*` tokens. All component font sizes should reference these tokens so typography can be adjusted globally without targeting individual component selectors.

Fixes #10420
