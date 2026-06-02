# Curtain Reveal

A CSS animation that reveals an element by sliding away a colored overlay —
like a stage curtain opening. Supports 4 directions with hover trigger.
Zero JavaScript required.

---

## What does this do?

When you hover over an element, a solid overlay slides away to reveal the
content underneath — mimicking the dramatic effect of a theater curtain
opening. Works in all 4 directions: left, right, top, and bottom.

---

## How is it used?

Add the curtain base class plus a direction class to any wrapper element:

```html
<!-- Curtain pulls from the left -->
<div class="curtain curtain-left">
  <img src="photo.jpg" alt="my image" />
</div>

<!-- Curtain pulls from the right -->
<div class="curtain curtain-right">
  <h2>Hello World</h2>
</div>

<!-- Curtain pulls from the top -->
<div class="curtain curtain-top">
  <div class="card">Any content here</div>
</div>

<!-- Curtain pulls from the bottom -->
<div class="curtain curtain-bottom">
  <p>Revealed from bottom!</p>
</div>
