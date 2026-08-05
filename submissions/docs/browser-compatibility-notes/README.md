# Browser Compatibility Notes

This submission fixes Issue #40438 by adding documentation for modern CSS features used in EaseMotion CSS.

## Features Covered
- `backdrop-filter` (frosted glass effect)
- `:has()` (parent selector)
- `container queries` (not demoed here but mentioned)

## Browser Support Table

| Feature           | Chrome | Firefox | Safari | Edge |
|-------------------|--------|---------|--------|------|
| backdrop-filter   | ✅ 76+ | ⚠️ behind flag | ✅ 9+ | ✅ 79+ |
| :has()            | ✅ 105+| ❌ (not yet) | ✅ 15.4+ | ✅ 105+ |
| container queries | ✅ 105+| ⚠️ partial | ✅ 16+ | ✅ 105+ |

✅ = supported, ⚠️ = partial/flag, ❌ = not supported

## Fallbacks
- For `backdrop-filter`, use a solid/semi-transparent background if unsupported.
- For `:has()`, restructure HTML or use JavaScript to add classes.
- For container queries, use media queries as fallback.

## Demo
The included `demo.html` + `style.css` show how these features behave. On unsupported browsers, the frosted box will appear as plain white, and the `:has()` selector won’t apply.
