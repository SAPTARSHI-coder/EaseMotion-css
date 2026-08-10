# ease-icon focus clip fix

## What does this do?
Fixes the `ease-icon` focus ring being clipped when the icon sits inside a parent with `overflow: hidden` or `overflow: auto`, by replacing the outside `outline` with an inset `box-shadow` that stays within the element's own bounding box.

## How is it used?
```html
<button class="icon-btn fixed-icon" aria-label="Star">★</button>
```
```css
.fixed-icon:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px #4f46e5,
              inset 0 0 0 4px #ffffff;
}
```

## Why is it useful?
Keyboard users rely on a visible focus ring to know where they are on the page. An outline placed outside the element gets cut off by ancestor `overflow` rules, silently breaking accessibility. Since `box-shadow` (unlike `outline`) participates in the box's own layout, an inset shadow is never clipped by a parent's overflow — fixing the bug referenced in issue #59763 without needing to touch any ancestor CSS.