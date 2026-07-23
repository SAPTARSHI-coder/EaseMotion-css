# Fix ease-input-group :focus-within Border Highlight

## What does this do?
Adds a `:focus-within` rule to `.ease-input-group` that highlights the
wrapper border and applies a focus ring when any child input receives focus.

## How is it used?
```html
<div class="ease-input-group">
  <span class="ease-input-group__addon">https://</span>
  <input class="ease-input-group__input" type="text" placeholder="example.com">
</div>
```

## Why is it useful?
Without `:focus-within`, only the `<input>` itself gets a focus ring.
The outer wrapper stays visually disconnected, making it unclear where
the focus boundary is. Fixes: #35837
