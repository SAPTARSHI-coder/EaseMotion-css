# CSS Grammar Check Underline

Green/red wavy underline for grammar correction display.

Closes #70630

## Features

- Wavy underline via layered gradients for spelling errors vs style suggestions.
- Hover/focus pulses the underline.
- Keyboard accessible with tabindex and aria-labels.

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
