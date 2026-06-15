## What

This example demonstrates the CSS `text-box-trim` and `text-box-edge` properties, which control the leading (line gap) space above and below text. Side-by-side comparison cards show headings and buttons with `text-box-trim: trim-both` and `text-box-edge: cap alphabetic` versus default rendering. Visual guide lines highlight how the trimmed version aligns the cap height and alphabetic baseline to the content box edges, eliminating the invisible space that fonts carry by default.

## How

The `text-box-trim: trim-both` property removes the leading space from both the top (above the cap height) and bottom (below the alphabetic baseline) of the text. The `text-box-edge` property defines which typographic edges to align to — `cap` is the uppercase letter top, `alphabetic` is the baseline where letter bottoms sit. These are applied directly to heading and button elements. The comparison uses identical font sizes, weights, and container padding to isolate the effect of trimming.

## Why

Fonts include internal leading as part of their design to ensure readable line spacing in paragraphs. However, this space causes visual misalignment in UI components like buttons, cards, and headers where text should align precisely to container edges. Previously, developers used negative margins, relative positioning, or line-height hacks to compensate. `text-box-trim` solves this natively, enabling consistent vertical rhythm and optical alignment without per-font manual adjustments or JavaScript measurement.
