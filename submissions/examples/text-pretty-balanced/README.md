# text-wrap: pretty vs balance vs wrap vs nowrap

## Feature Overview
The `text-wrap` CSS property controls how inline text content wraps within its container. This demo compares all four values:
- **pretty** — optimizes line breaks for readability, reduces orphans/widows (best for body text)
- **balance** — equalizes line lengths across the block (best for headlines)
- **wrap** — default wrapping behavior, breaks at natural overflow points
- **nowrap** — suppresses all line wrapping, content overflows the container

Each value is demonstrated on headings, paragraphs, and side-by-side comparison rows so the visual difference in line breaks is immediately apparent.

## Usage
Open `demo.html` in any modern browser. The four text-wrap values are applied via CSS classes on matching content blocks. Resize the viewport to see how each value responds — `balance` and `pretty` re-evaluate break points dynamically. Toggle `prefers-reduced-motion` in DevTools to confirm the motion-reduction fallback works.

## Browser Support
- `text-wrap: wrap` — supported in all browsers
- `text-wrap: nowrap` — supported in all browsers
- `text-wrap: balance` — Chrome 114+, Firefox 121+, Safari 17.5+
- `text-wrap: pretty` — Chrome 117+, Firefox 124+, Safari 17.5+
- Older browsers fall back to `wrap` which is acceptable as graceful degradation
