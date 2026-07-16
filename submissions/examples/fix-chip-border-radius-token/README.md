# Fix: Use --ease-radius-full Token for Chip Border Radius

## Problem

`components/chip.css` hardcoded `border-radius: 9999px` instead of using `--ease-radius-full`:

```css
.ease-chip {
  border-radius: 9999px; /* hardcoded literal */
}
```

`variables.css` defines `--ease-radius-full: 9999px` exactly for pill-shaped elements. Using the hardcoded literal means chip border-radius cannot be adjusted via the token system — inconsistent with badges and other pill-shaped elements that should use this token.

## Solution

Use `--ease-radius-full` with the original value as fallback:

```css
.ease-chip {
  border-radius: var(--ease-radius-full, 9999px);
}
```

## Usage

```css
/* Switch all chips to rounded-square style */
:root {
  --ease-radius-full: var(--ease-radius-md);
}

/* Per-instance override */
.my-chip {
  --ease-radius-full: 4px;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses `--ease-radius-full: 9999px` as the standard token for pill/circular shapes. All components using pill-shaped border-radius should reference this token for consistency.

Fixes #10419
