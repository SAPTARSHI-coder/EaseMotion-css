# Hanging Punctuation

## Feature Overview
The `hanging-punctuation` CSS property controls whether opening and closing punctuation marks (quotes, bullets, brackets) hang outside the text edge of a line box. This demo compares all three values:
- **force-end** — punctuation always hangs outside the text edge for both opening and closing marks
- **allow-end** — punctuation may hang if the browser determines it improves visual alignment
- **none** — punctuation stays within the text flow (default)

Demonstrated on blockquotes, lists, inline comparisons, and first-letter edge cases using a serif font face that emphasizes the typographic effect.

## Usage
Open `demo.html` in a browser that supports `hanging-punctuation` (currently Chromium-based browsers). The three values are applied to identical quote content so the visual difference is clear. Resize the viewport to see how hanging behavior changes at different line lengths. The serif font (`Georgia`) is chosen to make the quote marks more visible at the text edge.

## Browser Support
- **Supported**: Chromium-based browsers (Chrome, Edge 130+), Opera
- **Not supported**: Firefox, Safari (as of 2026 — see relevant bug trackers)
- Graceful degradation: browsers that don't support `hanging-punctuation` simply render punctuation inline without hanging, which is functionally identical to `none`. The demo is still fully readable and the comparison remains educational.
