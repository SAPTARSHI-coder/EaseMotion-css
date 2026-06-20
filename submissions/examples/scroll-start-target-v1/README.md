# scroll-start-target Demo

## What does this do?

Demonstrates the `scroll-start-target` CSS attribute — a new feature that lets you specify which child element a scroll container should scroll to when it first appears or is reset.

## How is it used?

```html
<div class="scroll-container">
  <div scroll-start-target>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

```css
.scroll-container {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
}
```

## Why is it useful?

`scroll-start-target` solves the problem of scroll containers starting at an arbitrary position. In tab interfaces, carousels, or galleries, you often want a specific item to be visible when the page loads. Previously this required JavaScript scroll calls; now it's declarative in HTML/CSS.
