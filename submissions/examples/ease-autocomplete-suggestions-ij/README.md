# Autocomplete Suggestions

## What does this do?

It creates an input with a dropdown suggestion list that animates into view using opacity fade and max-height slide. As the user types, matching suggestions are filtered and appear with smooth transitions. Keyboard navigation (Arrow Up/Down, Enter, Escape) is fully supported.

## How is it used?

Wrap your input and suggestion list inside a container and apply the `acs-` classes:

```html
<div class="acs-input-wrapper">
  <input type="text" class="acs-input" autocomplete="off" />
  <ul class="acs-suggestions" id="acs-list">
    <li class="acs-item">JavaScript</li>
    <li class="acs-item">Python</li>
  </ul>
</div>
```

Toggle `.acs-visible` on the `.acs-suggestions` element to trigger the animation. Mark matched text with a `<mark>` tag to highlight it in the accent color.

## Why is this useful?

Autocomplete is a common UI pattern that benefits from subtle animation to communicate state changes. The fade + max-height approach keeps the animation lightweight by only triggering compositor-friendly properties (`opacity`) and layout-friendly bounding (`max-height`). It degrades gracefully under `prefers-reduced-motion` and works across all modern browsers without JavaScript animation libraries.
