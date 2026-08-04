# Ease Focus Spotlight

Pure CSS sibling focus and depth-of-field blur interaction utility powered by the modern CSS `:has()` pseudo-class.

## 1. What does this do?

This utility leverages the modern CSS `:has()` pseudo-class to create a zero-JavaScript sibling spotlight blur interaction. When a user hovers over any card or element within the `.ease-focus-spotlight` container, all non-hovered sibling elements automatically receive a subtle background blur (`filter: blur(4px)`), reduced opacity, and slight scale down, drawing intense visual focus to the active hovered item.

## 2. How is it used?

Apply `.ease-focus-spotlight` to your grid or parent container, and add `.ease-spotlight-item` to each child element or card:

```html
<div class="ease-focus-spotlight">
  <div class="ease-spotlight-item">
    <h3>Feature Card 1</h3>
    <p>Card content goes here.</p>
  </div>
  <div class="ease-spotlight-item">
    <h3>Feature Card 2</h3>
    <p>Card content goes here.</p>
  </div>
  <div class="ease-spotlight-item">
    <h3>Feature Card 3</h3>
    <p>Card content goes here.</p>
  </div>
</div>
```

```css
/* When any item inside the container is hovered, blur and dim non-hovered siblings */
.ease-focus-spotlight:has(.ease-spotlight-item:hover) .ease-spotlight-item:not(:hover) {
  filter: blur(4px);
  opacity: 0.5;
  transform: scale(0.98);
}

.ease-spotlight-item:hover {
  filter: blur(0);
  opacity: 1;
  transform: scale(1.02);
}
```

## 3. Why is it useful?

It creates premium dashboard grid focus effects and portfolio gallery depth-of-field interactions without requiring custom JavaScript event listeners, state tracking, or class toggles. By performing all calculations directly within the browser CSS rendering engine, it delivers 60fps hardware-accelerated transitions, maintains clean semantic HTML, and aligns with EaseMotion CSS's zero-JS framework philosophy.
