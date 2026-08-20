# Scroll Word Highlight

A large paragraph where words progressively darken/highlight from muted
gray to full contrast as the reader scrolls through it, a common editorial
"scroll-synced reading" effect.

**Level:** Advanced

## Usage

Text is split into per-word `<span>`s via JS on load. A scroll listener
computes a 0–1 progress value from the paragraph's position relative to a
reference line (60% down the viewport) and highlights a proportional
number of words from the start.

## Accessibility

- The full paragraph text is present as real text content from the moment
  the page loads (word-splitting only wraps existing text in spans, it
  doesn't inject or remove any text), so it's completely readable by screen
  readers, search, and copy/paste regardless of scroll position or JS state.
- The gray→dark color change meets contrast on both ends against the light
  background in this demo; verify contrast again if reused with a
  different background/palette.
- `prefers-reduced-motion` is checked in JS: when active, `updateHighlight`
  never runs and CSS instead sets all words to their final highlighted
  color directly, so the full paragraph reads at full contrast immediately
  rather than being stuck partially gray.
- Scroll listener is `{ passive: true }`; `updateHighlight()` also runs
  once on load so state is correct before any scroll event fires.

## Notes

- Progress is computed from `(viewportReferenceLine - paragraphTop) /
  paragraphHeight`, clamped to `[0,1]`, then multiplied by word count and
  floored to get how many words (from the start) should be highlighted.
- Word-splitting via `split(/\s+/)` and rejoining with `<span>` wrappers
  assumes plain text content; a paragraph containing existing inline HTML
  (links, emphasis) would need a more careful DOM-walking split rather than
  this `textContent`-based approach.