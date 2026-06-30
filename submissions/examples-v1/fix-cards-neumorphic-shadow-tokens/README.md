# Fix: Expose CSS Custom Properties for Neumorphic Shadow Colors in cards.css

## Problem

`.ease-card-neumorphic` hardcoded all rgba shadow values across base, hover, and dark mode states:

```css
.ease-card-neumorphic {
  box-shadow:
    8px 8px 20px rgba(15, 23, 42, 0.12),    /* hardcoded */
    -8px -8px 20px rgba(255, 255, 255, 0.78); /* hardcoded */
}
```

The same values were duplicated in the hover state and dark mode — three separate selectors with hardcoded rgba values. Users who wanted to customise the shadow colors had to override all three.

## Solution

Expose `--ease-card-neu-shadow-dark` and `--ease-card-neu-shadow-light` tokens on `.ease-card-neumorphic` and use them across all shadow declarations:

```css
.ease-card-neumorphic {
  --ease-card-neu-shadow-dark:  rgba(15, 23, 42, 0.12);
  --ease-card-neu-shadow-light: rgba(255, 255, 255, 0.78);

  box-shadow:
    8px 8px 20px var(--ease-card-neu-shadow-dark),
    -8px -8px 20px var(--ease-card-neu-shadow-light);
}
```

Dark mode overrides the tokens — the hover state adapts automatically with no extra selectors needed.

## Usage

```html
<!-- Custom shadow colors per card -->
<div class="ease-card ease-card-neumorphic"
     style="--ease-card-neu-shadow-dark: rgba(108,99,255,0.2);
            --ease-card-neu-shadow-light: rgba(255,255,255,0.9);">
  Purple neumorphic card
</div>
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses CSS custom properties so users can customise components without targeting multiple selectors. Exposing shadow color tokens also eliminates the value duplication between base, hover, and dark mode states.

Fixes #10427
