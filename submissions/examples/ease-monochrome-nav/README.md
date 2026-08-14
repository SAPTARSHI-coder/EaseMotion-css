# Ease Monochrome Nav

## 1. What does this do?
This component provides a highly tactile navigation menu that desaturates and dims unselected links when hovering or focusing on a specific link. The hovered link scales up with a colored glow and underline accent while neighboring links transition smoothly into a low-opacity monochrome state.

## 2. How is it used?
It leverages the modern CSS `:has()` relational pseudo-class combined with `:not(:hover)` and `:not(:focus-visible)` selectors to cleanly isolate and filter neighboring DOM siblings within the navigation container:

```css
.ease-mono-nav:has(.ease-nav-item:hover) .ease-nav-item:not(:hover),
.ease-mono-nav:has(.ease-nav-item:focus-visible) .ease-nav-item:not(:focus-visible) {
  filter: grayscale(100%) opacity(0.3);
  transform: scale(0.95);
}
```

## 3. Why is it useful?
Before `:has()`, developers had to rely on JavaScript `mouseenter`/`mouseleave` event listeners or complex parent-hover workarounds to affect sibling elements when hovering over a specific child. This modern CSS approach keeps all interaction logic natively within the CSS cascade, delivering 60 FPS performance with zero JavaScript main-thread cost and complete keyboard accessibility support out-of-the-box.
