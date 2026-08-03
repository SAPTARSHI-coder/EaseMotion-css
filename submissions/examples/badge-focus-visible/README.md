# Badge Focus Visible

**Issue:** Closes #59915

## Description

This submission adds a visible keyboard focus state for interactive badge components using the `:focus-visible` pseudo-class.

The enhancement improves accessibility by making keyboard focus clearly visible while preserving the existing appearance, variants, and animations of the badge component.

## Why?

Interactive elements should provide a clear focus indicator for keyboard users. This change ensures badges used as buttons or links are easier to navigate and meet accessibility best practices.

## Usage

```css
.ease-badge:focus-visible,
.em-badge:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

## Files

- `style.css` — proposed CSS enhancement
- `demo.html` — standalone demonstration
- `README.md` — feature documentation

## Notes

This submission is intended for integration into the Badge component by the EaseMotion CSS maintainers.