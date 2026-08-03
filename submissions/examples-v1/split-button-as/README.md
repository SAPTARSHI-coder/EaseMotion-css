# Split Button

### What does this do?

It shows a split button that pairs a primary action with a caret that opens a menu of related actions. It uses the native `details` and `summary` elements for the menu, so it opens on click and stays keyboard operable with no JavaScript.

### How is it used?

```html
<div class="split">
  <button class="split-main" type="button">Save</button>
  <details class="split-menu">
    <summary aria-label="More save options"></summary>
    <div class="split-list">
      <a href="#">Save as draft</a>
      <a href="#">Save and close</a>
    </div>
  </details>
</div>
```

The main button carries the default action and the caret opens the extra actions. The caret flips when the menu is open. Remove `open` from the demo to see it start closed.

### Why is it useful?

Split buttons offer a main action plus a few alternates without cluttering a toolbar. This joins a primary button and a disclosure caret into one control with a popup menu, using only CSS. The menu animates in, every item has a focus style, and the animation is removed under reduced motion.
