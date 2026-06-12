# Chip Alignment and Flexbox Gap Spacing (Issue #4756)

## What does this do?
Corrects text alignment inside unchecked checkbox chips by replacing the static flexbox gap on the chip container with a conditional right margin on the checkmark icon when active.

## How is it used?
Checkbox chips will render with perfectly centered text when unchecked, and automatically add the checkmark with spacing when checked.

## Why is it useful?
It ensures correct design alignment and text symmetry inside unchecked chips, removing asymmetric empty space.

## Affected File (maintainer will copy to `components/chip.css`)
Modify `components/chip.css`:
1. Remove `gap: 0.375rem;` from `.ease-chip`.
2. Add `margin-right: 0.375rem;` to `.ease-chip-group input[type="checkbox"]:checked + .ease-chip::before`:
```css
.ease-chip-group input[type="checkbox"]:checked + .ease-chip::before {
  content: '✓';
  width: 14px;
  margin-right: 0.375rem;
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 14px;
}
```
