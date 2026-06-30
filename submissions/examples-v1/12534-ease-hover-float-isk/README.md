# ease-hover-float-isk

## What does this do?

Lifts and floats the element upward on hover, accompanied by a growing, softening shadow underneath to simulate physical elevation.

## How is it used?

Add the class to any hoverable HTML element like a button or card:

```html
<div class="ease-hover-float-isk">Hover Over Me</div>
```

You can customize the float height by overriding the `--ease-float-distance` CSS variable:

```css
.custom-element {
  --ease-float-distance: -10px;
}
```

## Why is it useful?

Floating hover animations provide immediate visual feedback of elevation and importance. By combining movement with an expanding, bluring shadow, it accurately mimics physical lighting changes, creating a luxurious and tactile feeling for cards, buttons, and badges.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)
