# Fix: Replace :focus with :focus-visible on Form Inputs

## Problem

`components/forms.css` used `:focus` for input, textarea, and select focus ring styles:

```css
.ease-input:focus,
.ease-textarea:focus,
.ease-select:focus {
  border-color: var(--ease-color-primary);
  box-shadow: 0 0 0 3px var(--ease-color-primary-alpha);
}
```

`:focus` shows the focus ring on **all** focus events including mouse clicks — not the recommended modern accessibility pattern. The rest of the framework (`buttons.css`, `chip.css`, `tabs.css`) correctly uses `:focus-visible`.

## Solution

Replace `:focus` with `:focus-visible` on all form input focus selectors so the focus ring only appears during keyboard navigation, consistent with the rest of the framework.

## Changes

- Base input/textarea/select: `:focus` → `:focus-visible`
- Success validation state: `:focus` → `:focus-visible`
- Danger validation state: `:focus` → `:focus-visible`
- Warning validation state: `:focus` → `:focus-visible`
- `:focus-within` on `.ease-field-label` is intentional and unchanged

## Browser Support

`:focus-visible` is supported in all modern browsers (Chrome 86+, Firefox 85+, Safari 15.4+).

Fixes #10235
