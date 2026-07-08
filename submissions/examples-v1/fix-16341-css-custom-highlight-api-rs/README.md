# Custom Highlight API Utilities

This submission adds utility classes and examples for utilizing the **CSS Custom Highlight API** in EaseMotion.

## Bug / Feature Description
The CSS Custom Highlight API allows developers to style arbitrary text ranges using CSS, driven by JavaScript, without needing to pollute the DOM with wrapping `<span>` tags. This is highly performant and cleaner for features like "search in page", "syntax highlighting", and real-time collaboration markers.

## Fix / Implementation Details
- Added base `::highlight()` rules for standard utility highlights:
  - `::highlight(ease-search-results)` for find-in-page features.
  - `::highlight(ease-highlight-error)` and `::highlight(ease-highlight-warning)` for grammar/spelling warnings using wavy underlines.
  - Provided a working JavaScript demonstration showing how to generate `Range` and `Highlight` objects dynamically and register them to `CSS.highlights`.

## How to Test
1. Open `demo.html` in a modern browser supporting the Custom Highlight API (Chrome 105+, Safari 17.2+, Firefox 117+).
2. Type in the search input to see text get highlighted dynamically without DOM mutations.
3. Click "Highlight Grammar" to see specific ranges highlighted as errors or warnings.
