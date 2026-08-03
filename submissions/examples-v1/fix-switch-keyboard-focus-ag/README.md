# Fix ease-switch Keyboard Focus Ring

## What does this do?
Adds a `:focus-visible` ring to `.ease-switch` so keyboard users see a
clear focus indicator when tabbing to the toggle, satisfying WCAG 2.1 SC 2.4.7.

## How is it used?
```html
<label class="ease-switch">
  <input class="ease-switch__input" type="checkbox">
  <span class="ease-switch__track"></span>
  <span class="ease-switch__label">Label</span>
</label>
```

## Why is it useful?
Without a focus ring, keyboard users have no visual cue that the toggle
is focused, making the UI inaccessible. `:focus-visible` ensures the ring
only shows for keyboard navigation, not mouse clicks. Fixes: #35789
