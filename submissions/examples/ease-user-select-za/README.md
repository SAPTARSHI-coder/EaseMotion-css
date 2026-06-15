## What does this do?

Provides `ease-user-select` utility classes to control text selection behavior. Covers all standard `user-select` values: `none`, `text`, `all`, `auto`, and `contain`.

## How is it used?

```html
<button class="ease-user-select-none-za">Non-selectable button</button>
<p class="ease-user-select-all-za">Click anywhere to select all text</p>
```

## Why is it useful?

EaseMotion core does not include any `user-select` utilities. Preventing text selection on interactive elements (buttons, draggable items, sliders) is a common UX requirement. The `all` variant is also useful for copy-friendly text blocks.
