# [BUG FIX] .ease-tooltip layout centering under prefers-reduced-motion

## What does this do?
Resolves tooltip misalignment on reduced-motion queries by preserving standard flex/transform translation alignments.

## How is it used?
```html
<span class="ease-tooltip" data-tooltip="Hello" data-position="top">Hover</span>
```

## Why is it useful?
Ensures that tooltip layouts remain correctly aligned when transitions are disabled.

## Fixes
Fixes #10964
