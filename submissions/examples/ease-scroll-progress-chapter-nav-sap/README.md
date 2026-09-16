# Scroll Progress Chapter Nav

A fixed side-rail of dots (one per chapter/section) that highlights the
current chapter as you scroll, and jumps to a chapter with a smooth scroll
when clicked.

**Level:** Intermediate

## Usage

Each dot is a `<button>` with `data-target` matching a chapter section's
`id`; clicking calls `scrollIntoView({ behavior: 'smooth' })`. An
`IntersectionObserver` with a centered `rootMargin` band updates the active dot.

## Accessibility

- Nav dots are real `<button>` elements in a labeled `<nav aria-label="Chapters">`,
  each with a full descriptive `aria-label` (e.g. "Chapter 2: Getting
  Started") since a bare dot has no visible text.
- Clicking a dot works independent of scroll-tracking — it's a direct,
  explicit navigation action, not reliant on the observer.
- `:focus-visible` outline shown on each dot.
- `prefers-reduced-motion` removes the dot's scale/color transition; the
  correct active dot still updates instantly and correctly. Note:
  `scrollIntoView({ behavior: 'smooth' })` on click is a native browser
  smooth-scroll call — browsers that honor `prefers-reduced-motion` at the
  OS/browser level will typically already reduce this to an instant jump;
  the demo doesn't duplicate that logic in JS to avoid conflicting with
  native behavior.

## Notes

- Uses the same centered `rootMargin: '-45% 0px -45% 0px'` technique as the
  other scroll-sync nav components in this set, so a chapter is marked
  "active" once roughly centered in the viewport.
- Chapter headings use a mix of `<h1>`/`<h2>` reflecting document structure
  (first chapter as the page's main heading); adjust heading levels to fit
  your actual document outline.