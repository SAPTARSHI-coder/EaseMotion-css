# Toggle Switch Component

This submission implements a visually styled, accessible, pure-CSS toggle switch component.

---

## Design and Features

### Accessible Markup
Standard checkboxes are visually hidden with `opacity: 0` but retain keyboard focus and accessibility attributes. Clicking the outer `<label>` toggles the underlying `<input>`.

### Colors & Sizing
Variants are driven through modifier classes:
- Sizes: `.ease-switch-sm` (small), `.ease-switch-lg` (large), or default (medium)
- Themes: `.ease-switch-primary` (purple) and `.ease-switch-success` (green)

### Focus & Hover
Keyboard focus styles are fully managed through the `:focus-visible` pseudo-class to ensure outline glow occurs only when navigating using a keyboard.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click any switch — verify the thumb slides with a clean spring-like elastic effect.
3. Tab through the switches with the keyboard — verify a visible outline displays.
4. Verify disabled switches cannot be interacted with.
5. Enable `prefers-reduced-motion` — verify transitions are skipped.
