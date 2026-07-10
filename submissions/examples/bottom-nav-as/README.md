# Bottom Navigation Bar

### What does this do?

It shows a mobile style bottom navigation bar with icon and label items. Selecting an item tints it and lifts the active icon. It uses radio inputs, so the active tab is real and keyboard operable, with no JavaScript.

### How is it used?

```html
<nav class="bottom-nav" aria-label="Primary">
  <input type="radio" name="bn" id="bn1" checked />
  <input type="radio" name="bn" id="bn2" />
  <label for="bn1"><svg>...</svg><span>Home</span></label>
  <label for="bn2"><svg>...</svg><span>Search</span></label>
</nav>
```

Keep the radios first so the sibling selectors can reach each matching label. The checked radio tints its item and raises its icon.

### Why is it useful?

Mobile apps and responsive sites use a fixed bottom bar for primary navigation. This builds a bottom nav where the checked radio drives the active item color and lift, using only CSS and inline SVG. Items are keyboard operable with a focus ring and the lift is removed under reduced motion.
