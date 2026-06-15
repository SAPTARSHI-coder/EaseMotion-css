# Footer Keyboard Focus States Fix

**Fixes:** #2851
**File Modified:** `components/footer.css`

---

## Problem

The `.ease-footer-links` and `.ease-footer-social` anchor elements
had no `:focus-visible` styles, making keyboard navigation
inaccessible for users who navigate via the Tab key.

## Fix

Added `:focus-visible` states to both `.ease-footer-links a` and
`.ease-footer-social a` that mirror their hover styles and add a
visible outline for keyboard users.

## How to Test

1. Open `demo.html` in any modern browser
2. Press Tab to navigate through the footer links and social icons
3. Confirm a visible purple outline appears on focused elements

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome  | 86+            |
| Firefox | 85+            |
| Safari  | 15.4+          |
| Edge    | 86+            |