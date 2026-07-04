# Fix: Replace Hardcoded z-index Values with Design Token Variables in cards.css

## Problem

`components/cards.css` used hardcoded `z-index` values:

```css
.ease-card-hover    { z-index: 1; }
.ease-card-hover:hover { z-index: 2; }
.ease-card-neumorphic:focus-visible { z-index: 2; }
```

`variables.css` defines `--ease-z-base: 0` and `--ease-z-raised: 10` for this purpose. Hardcoded values diverge from the token system and can cause stacking conflicts if the z-index scale is adjusted.

## Solution

Replace hardcoded values with design token variables:

```css
.ease-card-hover { z-index: var(--ease-z-base, 1); }
.ease-card-hover:hover { z-index: var(--ease-z-raised, 2); }
.ease-card-neumorphic:focus-visible { z-index: var(--ease-z-raised, 2); }
```

## Usage

No class changes needed. Override globally:

```css
:root {
  --ease-z-base:   0;
  --ease-z-raised: 10;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS defines a z-index token scale (`--ease-z-base`, `--ease-z-raised`, `--ease-z-overlay`, `--ease-z-modal`, `--ease-z-toast`). All components should use these tokens so stacking order can be managed globally without targeting individual component selectors.

Fixes #10414
