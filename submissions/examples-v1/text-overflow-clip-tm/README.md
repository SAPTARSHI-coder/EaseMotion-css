# text-overflow-clip-tm

## What does this do?
Adds `.text-overflow-clip` utility class for hard truncation of overflowing text without showing an ellipsis, plus `.text-overflow-ellipsis` for comparison.

## How is it used?
```html
<div class="text-overflow-clip">Long text clipped at edge</div>
<div class="text-overflow-ellipsis">Long text with trailing...</div>
```

## Why is it useful?
Essential for programmatic truncation where visible ellipsis is undesired — useful for code previews, data tables, and tight UI layouts. Fills a gap in EaseMotion's text utility suite.
