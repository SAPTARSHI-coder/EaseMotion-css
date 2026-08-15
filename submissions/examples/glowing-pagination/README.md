# Glowing Pagination

A futuristic, neon-styled pagination component with glowing hover states and a clearly highlighted active page. Built with pure HTML and CSS — no JavaScript, no external icon libraries, no dependencies.

Resolves issue **#79768**: *"feat: create Glowing Pagination with Neon styling."*

## Description

`Previous ← 1 2 3 4 5 → Next`, rebuilt for a dark, futuristic SaaS/dashboard UI. The component sits on a dark surface and uses layered box-shadows and a cyan-to-violet gradient to create a neon glow effect that activates on hover/focus and stays "lit" on the active page — while keeping the overall look clean and professional rather than an over-the-top gaming aesthetic.

## Features

- **Dark futuristic container** with a soft inner border and ambient drop shadow.
- **Neon glow on hover/focus** via a layered `::after` pseudo-element and `box-shadow`, not a static glow — so the effect feels responsive rather than noisy.
- **Gradient-highlighted active page** (`.pagination-link.active`) with a persistent glow so the current page is unmistakable at a glance.
- **Previous / Next controls** with inline SVG chevrons (no icon fonts), each with a descriptive `aria-label`.
- **Visually disabled states** for Previous/Next at the start/end of a range — dimmed, non-interactive, and marked `aria-disabled="true"`.
- **Ellipsis support** (`.pagination-ellipsis`) for representing skipped page ranges.
- **Smooth, restrained transitions** — a small lift and glow fade-in, nothing distracting.
- **Fully accessible**: semantic `<nav aria-label="Pagination">`, `<ol>` list structure, `aria-current="page"`, and visible `:focus-visible` rings for keyboard users.
- **Fully responsive**: scales button size, padding, and font size down for tablet and mobile, wraps instead of overflowing, and collapses Previous/Next labels to arrow-only on very small screens.
- **`prefers-reduced-motion` support** — hover lift and transitions are disabled for users who request reduced motion.
- Themeable via CSS custom properties (`--np-*`) for all neon colors, glow intensity, sizing, and spacing.

## Technologies used

- HTML5 (semantic markup)
- CSS3 (custom properties, gradients, box-shadow, pseudo-elements, transitions, media queries)
- No JavaScript, no frameworks, no external dependencies

## How to use

1. Include `style.css` in your page.
2. Wrap your page links in the pagination markup below. Mark the current page with both the `active` class and `aria-current="page"`. Use `aria-disabled="true"` (on a non-link element, e.g. `<span>`) for a disabled Previous/Next state.

```html
<nav class="neon-pagination" aria-label="Pagination">
  <ol class="pagination-list">

    <li class="pagination-item">
      <a class="pagination-link pagination-prev" href="?page=1" aria-label="Go to previous page">
        <svg class="pagination-arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="pagination-label">Previous</span>
      </a>
    </li>

    <li class="pagination-item">
      <a class="pagination-link active" href="?page=2" aria-current="page" aria-label="Page 2, current page">2</a>
    </li>

    <li class="pagination-item">
      <a class="pagination-link" href="?page=3" aria-label="Go to page 3">3</a>
    </li>

    <li class="pagination-item">
      <a class="pagination-link pagination-next" href="?page=3" aria-label="Go to next page">
        <span class="pagination-label">Next</span>
        <svg class="pagination-arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6l6 6-6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </li>

  </ol>
</nav>
```

Customize the theme by overriding the CSS custom properties, e.g.:

```css
.neon-pagination {
  --np-primary: #ff2ecb;
  --np-active-from: #ff2ecb;
  --np-active-to: #7c4dff;
}
```

See `demo.html` for three ready-to-open examples: a default mid-range page, a first-page state with Previous disabled, and a last-page state with Next disabled (plus ellipsis usage for longer ranges).

## File structure

```
submissions/examples/glowing-pagination/
├── demo.html    # Self-contained demo, opens directly in a browser
├── style.css    # Component styles
└── README.md    # This file
```

## Accessibility considerations

- The component is a landmark `<nav aria-label="Pagination">` wrapping an ordered list (`<ol>`), matching the standard pagination pattern.
- The active page uses `aria-current="page"` alongside a descriptive `aria-label` (e.g. "Page 2, current page").
- Previous/Next controls always carry an explicit `aria-label` so their purpose is clear even when only an arrow icon is visible (on small screens).
- Disabled Previous/Next controls are rendered as non-interactive `<span>` elements with `aria-disabled="true"` and `pointer-events: none`, so they're skipped by keyboard navigation and clearly announced as unavailable.
- Text and icon colors were chosen to keep sufficient contrast against the dark surface, even with the neon glow effects layered on top.
- All interactive links have a visible `:focus-visible` ring (offset box-shadow) for keyboard users.

## Responsive behavior

- **Desktop**: full-size buttons with generous spacing and the full glow effect.
- **Tablet (≤768px)**: button size, padding, and font size scale down slightly.
- **Mobile (≤480px)**: the container becomes full-width and centers its contents, the list wraps onto multiple rows if needed (no horizontal overflow), and the "Previous"/"Next" text labels are hidden in favor of arrow-only icons to save space while keeping full accessibility via `aria-label`.