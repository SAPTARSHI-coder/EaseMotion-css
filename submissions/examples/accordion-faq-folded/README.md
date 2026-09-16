# Folded FAQ Accordion

A CSS-only accordion component for FAQ sections where items expand and collapse with a smooth height transition. Uses the checkbox hack for toggle — no JavaScript required. Each item has a header with a plus icon that rotates on open.

## EaseMotion CSS classes used

- `ease-flex` — centers the accordion on the page
- `ease-center` — aligns content to the center

## How to run

Open `demo.html` in any modern browser. Click any question to expand the answer panel. Click again to collapse.

## Accessibility notes

The accordion uses native `<label>` elements connected to hidden `<input type="checkbox">` controls, making it keyboard-operable. Tab to focus a question and press Space to toggle. The `prefers-reduced-motion` media query disables all transitions for users who request reduced motion.
