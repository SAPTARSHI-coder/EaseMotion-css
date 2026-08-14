# Fix: Expose --ease-modal-max-width and --ease-modal-width Tokens

## Problem

`.ease-modal` hardcoded `max-width` and `width` with no CSS custom properties:

```css
.ease-modal {
  max-width: 500px;
  width: 90%;
}
```

Users who needed different modal sizes had to override `.ease-modal` directly with higher specificity.

## Solution

Expose `--ease-modal-max-width` and `--ease-modal-width` tokens:

```css
.ease-modal {
  max-width: var(--ease-modal-max-width, 500px);
  width: var(--ease-modal-width, 90%);
}
```

## Usage

```html
<!-- Custom width per modal -->
<div class="ease-modal" style="--ease-modal-max-width: 800px;">...</div>
```

```css
/* Global override */
:root {
  --ease-modal-max-width: 600px;
}

/* Size modifiers */
.ease-modal-sm { --ease-modal-max-width: 400px; }
.ease-modal-lg { --ease-modal-max-width: 700px; }
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses CSS custom properties so users can customise components without specificity battles. Modal width is a key dimension that should follow the same token-driven pattern as sidebar width and loader size.

Fixes #10411
