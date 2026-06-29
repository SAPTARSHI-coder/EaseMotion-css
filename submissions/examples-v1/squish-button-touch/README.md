# Squish Button Touch
Fix #3898: `.ease-squish-button` missing touch device `:active` feedback.

## Issue
The framework's `.ease-squish-button` only activates on `:hover`, which doesn't fire on touch devices (mobile/tablet). Users tapping the button get no squish feedback.

## Workaround (for users / maintainer reference)
Add a `@media (hover: none)` block to provide `:active` feedback on touch devices:

```css
@media (hover: none) {
  .ease-squish-button:active {
    animation: ease-kf-squish-button var(--ease-speed-medium) var(--ease-ease) both;
  }
}
```

## Permanent Core Fix (for maintainer)
The `.ease-squish-button` rule in `core/animations.css` should be updated to include the touch device workaround directly.

## Files
- `demo.html` — interactive demo with touch workaround
- `style.css` — the touch device fix stylesheet
- `README.md` — this file
