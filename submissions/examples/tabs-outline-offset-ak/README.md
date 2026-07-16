# Tabs Outline Offset

A demo showing tabs with negative `outline-offset` clipping the keyboard focus indicator — an accessibility violation. Before/after with proper focus styles.

---

## What does this show?

Issue [#5743](https://github.com/anomalyco/easemotion/issues/5743) identified that the tabs component uses a negative `outline-offset` value that clips the keyboard focus ring, making it invisible or partially visible for keyboard users.

### The problem

```css
.ease-tab:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: -4px; /* clips inside the element */
}
```

A negative offset pushes the outline inside the element's border, where it can be hidden by overflow or background.

### The fix

```css
.ease-tab:focus-visible {
  outline: 2px solid var(--ease-color-primary, #6366f1);
  outline-offset: 2px; /* visible outside the element */
  border-radius: 4px;
}
```

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Before/after comparison of focus indicator styles |
| `style.css` | Tab styles with correct focus indicators |
| `README.md` | This file |
