# Announcement Bar Focus Visible

**Issue:** Closes #59871

## Description

This submission adds a visible keyboard focus state for the Announcement Bar close button using the `:focus-visible` pseudo-class.

The enhancement improves accessibility by making keyboard focus clearly visible while preserving the existing hover behavior and overall component appearance.

## Why?

Keyboard users should always be able to identify which interactive element currently has focus. This change introduces a high-contrast outline that appears only during keyboard navigation.

## Usage

```css
.ease-announce-bar-close:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    opacity: 1;
}
```

## Files

- `style.css` — proposed CSS
- `demo.html` — standalone demonstration
- `README.md` — documentation

## Notes

This submission is intended for integration into the Announcement Bar component by the project maintainers.