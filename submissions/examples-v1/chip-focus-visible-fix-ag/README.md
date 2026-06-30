# [BUG FIX] .ease-chip focus-visible ring conflicts inside buttons

## What does this do?

Fixes nested or adjacent button-chip focus-visible ring bugs by specifying a distinct, custom-themed focus-visible outline structure for chip elements.

## How is it used?

```html
<button class="btn">
  <span class="chip" tabindex="0">Interactive Tag</span>
</button>
```

## Why is it useful?

Resolves focus-state conflicts in complex interactive controls.

## Fixes

Fixes #9848
