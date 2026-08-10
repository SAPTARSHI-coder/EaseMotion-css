# object-view-box Animation

## What does this do?

Animates `object-view-box` — a CSS property that crops replaced elements (like `<img>`, `<video>`) without using `clip-path` or `overflow: hidden`. The demos show a pan and a zoom (Ken Burns) effect on gradient backgrounds.

## How is it used?

```css
.element {
  object-view-box: inset(0 0 0 0);
  animation: pan-right 4s ease-in-out infinite alternate;
}

@keyframes pan-right {
  0%   { object-view-box: inset(0 0 0 0); }
  100% { object-view-box: inset(0 50% 0 0); }
}
```

## Why is it useful?

`object-view-box` provides a native CSS way to crop and reframe replaced content without JavaScript or wrapper `<div>` techniques. Animating it creates cinematic pans and zooms — ideal for hero images, galleries, and storytelling layouts, staying within EaseMotion CSS's philosophy of performant, declarative animations.
