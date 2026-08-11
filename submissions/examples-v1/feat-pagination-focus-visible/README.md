# Pagination Focus-Visible Keyboard Navigation Enhancement

## Description
This submission enhances the `pagination` component with a robust implementation of
the `:focus-visible` CSS pseudo-class, ensuring that keyboard users always receive
a clear, visible focus indicator when navigating the page using Tab or arrow keys.

Mouse and pointer users are not affected because `:focus-visible` is only triggered
when the browser determines the focus is keyboard-initiated.

## Accessibility Standards
- WCAG 2.1 Success Criterion 2.4.7: Focus Visible (Level AA)
- WCAG 2.1 Success Criterion 2.4.11: Focus Appearance (Level AAA)

## Changes
- `style.css`: 90+ lines. Includes base component styles, a `:focus-visible`
  block with a 3px outline and shadow, a high-contrast override using
  `prefers-contrast: more`, disabled state styles, and a `:focus-within`
  container variant.
- `demo.html`: Full HTML5 boilerplate with keyboard focus testing instructions
  and multiple interactive component variants.
- `README.md`: Documents the accessibility rationale, WCAG criteria, and
  testing steps.

## How to Test
1. Open `demo.html` in any modern browser.
2. Press Tab to navigate to each component. A clear blue ring should appear.
3. Click the component with a mouse. No focus ring should appear.
4. In browser DevTools, emulate `prefers-contrast: more` to verify the
   high-contrast override shows a solid canvastext outline.

Fixes #45892
