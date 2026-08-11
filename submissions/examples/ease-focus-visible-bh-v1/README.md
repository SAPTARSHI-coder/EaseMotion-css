# Focus Visible Styles

## What does this do?
Provides WCAG 2.1 AA compliant visible focus indicators for keyboard navigation.

## How is it used?
```css
:focus-visible {
  outline: 2px solid #6c63ff;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}
```

## Why is it useful?
- Accessibility for keyboard-only users
- WCAG 2.1 Level AA compliance
- Clean design without focus rings for mouse users

## WCAG References
- WCAG 2.1 2.4.7 (Level AA) - Focus Visible
- WCAG 2.1 2.4.11 (Level AA) - Focus Not Obscured
