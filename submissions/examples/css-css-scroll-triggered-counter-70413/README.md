# CSS Scroll-triggered Counter

Animated counter that starts when element enters viewport.

Closes #70413

## Features

- Counter that animates when section enters viewport (scroll-driven).
- Uses animation-timeline: view().
- Progressive enhancement fallback.

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
