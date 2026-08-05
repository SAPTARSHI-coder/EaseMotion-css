# Focus Visible Styles

## What does this do?
Provides WCAG 2.1 AA compliant visible focus indicators for keyboard navigation, ensuring interactive elements are accessible to users who navigate via keyboard.

## How is it used?
Add the focus-visible styles to your project:

```css
/* Visible focus for keyboard users */
:focus-visible {
  outline: 2px solid #6c63ff;
  outline-offset: 2px;
}

/* Don't show focus for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

Apply to all interactive elements:
```html
<button>Click me</button>
<a href="#">Link</a>
<input type="text">
```

## Why is it useful?
- **Accessibility**: Essential for keyboard-only users to see where they are
- **WCAG Compliance**: Meets Level AA requirements for focus visibility
- **Better UX**: Clean design that still shows focus for keyboard users
- **Mouse-friendly**: No ugly focus rings for mouse/trackpad users
- **Touch-friendly**: No focus shown for touch interactions

## Implementation
```css
/* Base focus visible */
:focus-visible {
  outline: 2px solid #6c63ff;
  outline-offset: 2px;
}

/* Remove for pointer devices */
:focus:not(:focus-visible) {
  outline: none;
}

/* Enhanced focus on interactive elements */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible {
  box-shadow: 0 0 0 4px rgba(108, 99, 255, 0.2);
}
```

## WCAG References
- [WCAG 2.1 2.4.7 (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html) - Focus Visible
- [WCAG 2.1 2.4.11 (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/focus-not-obscured-minimum.html) - Focus Not Obscured
