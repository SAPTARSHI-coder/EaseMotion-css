# Vertical Timeline

A vertical timeline with an animated fill line and entries that fade in as they scroll into view. Each entry has a dot marker that lights up when active.

## Files

- `demo.html` — standalone demo, open directly in a browser
- `style.css` — the component styles

## How it works

- **Line fill**: a `.timeline__fill` element sits on top of the static track line. Its height is driven by the CSS custom property `--scroll-progress` (0 → 1), which is updated by a `scroll` listener based on how far the timeline has scrolled through the viewport. All timing is handled by CSS `transition`, JS only sets the number.
- **Fade-in entries**: each `.timeline__entry` starts at `opacity: 0` with a small `translateY` offset. An `IntersectionObserver` adds an `is-visible` class when an entry crosses 30% into the viewport, and CSS handles the transition.
- **Dot markers**: styled via `::before` on each entry, using the same custom properties as the rest of the component so re-theming only requires overriding a handful of variables on `.timeline`.
- **Reduced motion**: respects `prefers-reduced-motion` by disabling transitions and showing all entries immediately.

## Customization

All visual knobs are exposed as custom properties on `.timeline`:

```css
.timeline {
  --timeline-line-color: #2a2f3a;
  --timeline-fill-color: linear-gradient(180deg, #6c63ff, #a78bfa);
  --timeline-dot-active: #6c63ff;
  --timeline-speed: 600ms;
  --timeline-ease: cubic-bezier(0.22, 1, 0.36, 1);
  /* ... */
}
```

## Naming

No `ease-` prefix used, per the contribution guide — happy to have the maintainer rename classes (e.g. `timeline` → `ease-timeline`) during standardization.