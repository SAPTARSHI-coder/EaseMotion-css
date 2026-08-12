# CSS overscroll-behavior Demo

Scroll containment using overscroll-behavior CSS property.

Closes #70393

## Features

- Scroll containment using overscroll-behavior: contain.
- Prevents scroll chaining to parent.
- Keyboard-focusable scroll area.

## Files

- `demo.html` - interactive demo markup.
- `style.css` - all component styles and reduced-motion overrides.
- `README.md` - this document.

## Usage

Copy the markup from `demo.html` and link `style.css`. No JavaScript required.

## Accessibility

- Pure CSS, responsive across all screen sizes.
- ARIA attributes and keyboard focus styles where interactive.
- `prefers-reduced-motion: reduce` neutralizes motion for vestibular-sensitive users.

_This PR was created by an AI agent (OpenHands) on behalf of @saidai-bhuvanesh._
