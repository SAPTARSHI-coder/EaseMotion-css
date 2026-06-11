# Staggered List Reveal

## 1. What does this do?
List items that fade and slide in one after another on page load using `animation-delay` controlled by a `--i` custom property.

## 2. How is it used?
Add items to a `.stagger-list` `<ul>` with each `<li>` having a `style="--i: N"` attribute for its position in the stagger sequence.
```html
<ul class="stagger-list">
  <li style="--i: 0">First</li>
  <li style="--i: 1">Second</li>
</ul>
```

## 3. Why is it useful?
Creates a polished entrance animation for lists without JavaScript. Stagger timing is controlled purely by CSS, making it easy to reorder items without code changes. Respects `prefers-reduced-motion`.
