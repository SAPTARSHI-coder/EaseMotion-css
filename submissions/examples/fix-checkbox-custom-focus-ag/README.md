# Fix ease-checkbox Focus-Visible Ring

## What does this do?
Uses the CSS sibling selector (`.ease-checkbox__input:focus-visible + .ease-checkbox__box`)
to forward the native input's focus state to the visible custom checkbox box.

## How is it used?
```html
<label class="ease-checkbox">
  <input class="ease-checkbox__input" type="checkbox">
  <span class="ease-checkbox__box"></span>
  <span class="ease-checkbox__label">Label text</span>
</label>
```

## Why is it useful?
Custom-styled checkboxes that hide the native input lose the browser's
default focus indicator. The CSS `+` combinator makes `:focus-visible`
from the hidden input propagate to the visible box. Fixes: #59815
