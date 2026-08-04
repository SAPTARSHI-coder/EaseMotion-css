# Code Block Print Media Query Optimization Blueprint

Resolves core code block presentation bug tracker ticket #48251. Implements a highly optimized, high-contrast, ink-saving media override pipeline that overrides screen styles when printing or exporting documents.

## 🛠️ Optimizations Applied

* **Ink Preservation**: Strips out custom dark surface background colors (`#111827`), ambient neon glows, window decoration cards, and shadow arrays, changing the printed container to a clean, lightweight transparent layer.
* **High-Contrast Readability**: Forces text strings to display in high-contrast dark grey (`#1e293b`) on an absolute white page background to guarantee clean physical parsing.
* **Greyscale Syntax Highlighting**: Remaps technical keywords and comments to high-contrast monochrome styles. Code keywords are marked with bold underlining to stay easily readable even on non-color printers.
* **Page-Break Prevention**: Embeds `page-break-inside: avoid` rules directly onto preformatted containers to ensure block logic does not split mid-method across page sheets.
