# Button Link Focus Visible Fix

**Fixes:** #3642
**File Modified:** `components/buttons.css`

---

## Problem

The `.ease-btn-link` class had only `:hover` styles defined,
with no `:focus-visible` state. Keyboard users navigating via
the Tab key had no visible indicator showing which link button
was focused, violating WCAG 2.4.7 (Focus Visible).

## Fix

Added a `:focus-visible` state to `.ease-btn-link` that mirrors
the hover style and adds a visible outline ring for keyboard
navigation:

```css
.ease-btn-link:focus-visible {
  color: var(--ease-color-primary-dark, #4b44cc);
  text-decoration: none;
  outline: 2px solid var(--ease-color-primary, #6366f1);
  outline-offset: 3px;
  border-radius: 3px;
}
```

## How to Test

1. Open `demo.html` in any modern browser
2. Press Tab to navigate through the link buttons
3. Confirm a visible outline ring appears on the focused link

## Browser Support

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 86+             |
| Firefox | 85+             |
| Safari  | 15.4+           |
| Edge    | 86+             |
