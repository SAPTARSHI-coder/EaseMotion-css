# Fix ease-alert Close Button Focus Ring

## What does this do?
Adds a `:focus-visible` outline to `.ease-alert__close` so keyboard users
see a clear focus indicator when the dismiss button is focused via Tab.

## How is it used?
```html
<div class="ease-alert ease-alert--info" role="alert">
  <div class="ease-alert__body">Message text here.</div>
  <button class="ease-alert__close" aria-label="Dismiss alert">✕</button>
</div>
```

## Why is it useful?
Without a focus ring, keyboard users cannot tell which element is focused,
making the dismiss button effectively unusable for them. Fixes: #35808
