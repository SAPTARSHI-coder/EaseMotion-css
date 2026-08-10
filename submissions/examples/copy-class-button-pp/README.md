# Copy Class Button for Animation Utility Classes

This feature adds a premium, interactive copy button component next to animation utility classes, as specified in Issue #11754.

## What does this do?

It provides an interactive widget where developers can view animation utility classes and copy them directly to the clipboard with one click, showing clear visual feedback upon success.

## How is it used?

The structure of the components is as follows:

```html
<div class="animation-item">
  <span class="class-name">.ease-fade-in</span>
  <button class="copy-btn">📋 Copy</button>
</div>
```

## Why is it useful for EaseMotion CSS?

EaseMotion CSS focuses on simplifying web animation and streamlining developer workflow. Manual typing or highlight-and-copying increases the chance of spelling errors (e.g. forgetting `ease-` or typing `fadein` instead of `fade-in`). A dedicated copy button speeds up development and improves accessibility.
