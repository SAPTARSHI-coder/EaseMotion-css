# Pure CSS Animated Hamburger to X Icon

## What does this do?
This implements a classic UI pattern: a mobile menu "hamburger" icon (three horizontal bars) that smoothly morphs into a cross ("X") when clicked/activated.

## How is it used?
Create a button wrapper and insert three empty `<span>` tags inside it. Add the `.hamburger-btn` class to the button. When you want the menu to appear open, toggle the `.is-active` class on the button via JavaScript.

Example:
```html
<button class="hamburger-btn is-active">
  <span></span>
  <span></span>
  <span></span>
</button>
```

## Why is it useful?
- Clear state-change feedback tells users immediately whether a menu is open or closed.
- Achieving this morphing effect with pure CSS (using `transition` and `transform: rotate()`) avoids heavy SVG animations, keeping the UI fast and lightweight.
- Highly customizable — you can easily change the color, height, and width of the bars by adjusting the CSS variables or values.
