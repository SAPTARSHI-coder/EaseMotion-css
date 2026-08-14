# CSS Underline Navigation

A pure CSS navigation menu where each link grows an underline out from its center on hover. No JavaScript, no dependencies.

## How it works

Each `.ease-nav-link` has a `::after` pseudo-element positioned at its bottom edge, starting at `width: 0` and centered horizontally with `left: 50%` plus `transform: translateX(-50%)`. On hover or keyboard focus, the width transitions to 100%, so the underline expands outward from the middle rather than sliding in from one side.

`:focus-visible` triggers the same underline as `:hover`, so keyboard users get the same visual feedback tabbing through the nav.

## Files

- `demo.html` – a 4-link nav menu (Home, Projects, About, Contact)
- `style.css` – all styling, custom properties, and the underline transition
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-nav-duration` – 0.3s
- `--ease-nav-easing` – cubic-bezier(0.4, 0, 0.2, 1)
- `--ease-nav-text` – default link color
- `--ease-nav-hover-text` – hover/focus link color
- `--ease-nav-accent` – underline color
- `--ease-nav-gap` – spacing between nav links
- `--ease-nav-underline-height` – thickness of the underline

Example override:

```css
:root {
  --ease-nav-accent: #22c55e;
  --ease-nav-underline-height: 3px;
}
```

## Notes

- Underline expands from center outward, not from one edge, for a slightly more polished feel than a plain left-to-right slide
- Fully responsive; gap and font size shrink slightly on mobile
- Respects `prefers-reduced-motion` — the underline appears/disappears instantly with no width transition