# Scroll Reveal Mask Text

Heading lines that are clipped inside an overflow-hidden wrapper and slide
up from below into view as they scroll into the viewport, a common
editorial-site "masked text reveal" effect.

**Level:** Intermediate

## Usage

Wrap each line of text in `.mask-line > span` (the outer `.mask-line` is
`overflow: hidden` and acts as the mask; the inner `span` is what
translates). An `IntersectionObserver` adds `.is-revealed` to each inner
span once its line crosses 40% visibility.

## Accessibility

- The text content itself is present in the DOM from the start (not
  injected after reveal), so it's readable immediately by screen readers
  and non-JS/no-animation contexts — only the visual reveal is deferred.
- Each line's animation triggers once (`unobserve` after triggering), so
  scrolling back up and down doesn't repeatedly hide/reveal the text oddly.
- `prefers-reduced-motion` sets the inner spans to their final
  `translateY(0)` position immediately with no transition, so text is fully
  visible without waiting on any scroll-triggered reveal.

## Notes

- The "mask" is just `overflow: hidden` on the line wrapper combined with
  the inner span starting below its own line height (`translateY(110%)`),
  so no clip-path or actual CSS mask is needed.
- Because the observer only adds a class (not `visibility`/`display`), the
  underlying text is always selectable/readable in the DOM even before the
  visual animation completes.