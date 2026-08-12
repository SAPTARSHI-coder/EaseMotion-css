# Keyboard-Operable Dropdown (CSS-only)

Demonstrates a pure CSS dropdown using `:focus-within` that opens on focus (Tab) and closes when focus leaves. Items use `role="menuitem"` and `tabindex="0"` for keyboard accessibility.

## What this covers
- CSS `:focus-within` for open/close on focus/blur
- Proper `tabindex` and ARIA roles for keyboard operability
- Table documenting which keyboard behaviors are achievable with pure CSS vs. requiring JavaScript

## Limitations (CSS-only)
- **Arrow key navigation** (↑/↓) requires JavaScript
- **Escape to close** requires JavaScript
- **Enter/Space** rely on native browser behavior for `<a>` or `<button>` elements
- This demo shows what CAN be achieved with CSS, and notes what needs JS for full compliance
