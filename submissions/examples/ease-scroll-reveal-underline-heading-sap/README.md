# Scroll Reveal Underline Heading

Section headings that get an accent underline drawing in from the left as
each heading scrolls into view, drawing attention to section starts
without moving the text itself.

**Level:** Beginner

## Usage

Apply `.underline-heading` to any heading. An `IntersectionObserver` adds
`.is-revealed` once a heading crosses 60% visibility, triggering the
`::after` underline's `scaleX(0)` → `scaleX(1)` transition.

## Accessibility

- The heading text itself is fully present and readable in the DOM from
  page load — only the decorative underline's draw-in is deferred, never
  the text content.
- Each heading's reveal triggers once (`unobserve` after triggering), so
  scrolling back up and down doesn't repeatedly re-animate it.
- `prefers-reduced-motion` sets the underline to its fully-drawn
  `scaleX(1)` state immediately with no transition, so it's never left
  looking cut off or incomplete for motion-reduced users.

## Notes

- Underline uses `transform: scaleX()` from `transform-origin: left`
  (not `width`), keeping the animation on the compositor thread and off the
  layout/reflow path.
- This is a lightweight complement to `ease-scroll-reveal-mask-text-sap`
  (which reveals the text itself) — this component instead keeps text fully
  visible from the start and only animates a decorative accent underneath it.