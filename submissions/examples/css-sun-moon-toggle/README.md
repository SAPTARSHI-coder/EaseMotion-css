# Pure CSS Sun/Moon Theme Toggle Animation

## Description
This submission resolves Issue #68965 by introducing a beautifully animated theme toggle switch using only CSS. It morphs a Sun icon into a Moon icon when clicked.

## Features
- Pure CSS implementation using the Checkbox Hack. No JavaScript required for the button state or animation.
- Hides a native `<input type="checkbox">` and styles a `<label>` to act as the interactive trigger.
- Uses `box-shadow` on a central circle to simulate the "bite" taken out of the moon when checked.
- Uses pseudo-elements and multiple `box-shadow`s to create the sun's rays, which elegantly rotate and scale down when switching to the moon state.
- Smooth transitions utilizing custom `cubic-bezier` timing functions for a fluid feel.

## Usage
Add the `.ease-theme-toggle` class to a checkbox input. Then, create a label bound to that input's `id`, give it the `.ease-theme-toggle-label` class, and inside the label place a `div` with the `.ease-theme-toggle-icon` class.

```html
<input type="checkbox" id="theme-switch" class="ease-theme-toggle">
<label for="theme-switch" class="ease-theme-toggle-label">
  <div class="ease-theme-toggle-icon"></div>
</label>
```

You can then hook into the `:checked` state of the input elsewhere in your CSS to change global theme colors (e.g., using `:has(.ease-theme-toggle:checked)` on the body, or adjacent sibling combinators `~`).
