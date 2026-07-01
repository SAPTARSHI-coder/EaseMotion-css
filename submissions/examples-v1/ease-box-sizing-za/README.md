## What does this do?

Provides `ease-box-sizing` utility classes to switch between `border-box` and `content-box` box-sizing behavior on individual elements.

## How is it used?

```html
<div class="ease-box-border-za">Border-box: padding inside width</div>
<div class="ease-box-content-za">Content-box: padding adds to width</div>
```

## Why is it useful?

EaseMotion core sets `box-sizing: border-box` globally on all elements. However, when integrating with third-party widgets or legacy code that expects `content-box`, a utility override is needed without writing custom CSS.
