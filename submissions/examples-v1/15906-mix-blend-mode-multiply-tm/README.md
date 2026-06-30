# Mix Blend Mode Multiply Utility & Demos

Issue: [#15906](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/15906)

## What does this do?

Provides the `.ease-blend-multiply` utility class and demonstrates how the `mix-blend-mode: multiply` CSS property blends overlapping elements to create rich color mixing, double exposures, and textured overlays.

## How is it used?

Apply the `ease-blend-multiply` class to any overlapping element to multiply its color values with the element behind it:

```html
<div class="parent-container">
  <img class="background-img" src="background.jpg" alt="Background" />
  <div class="overlay ease-blend-multiply"></div>
</div>
```

## Why is it useful?

It allows developers to create advanced graphic design effects—such as CMYK color mixing, realistic shadow overlays, paper/grunge texture mapping, and double-exposure photo effects—directly in the browser using pure CSS, aligning with EaseMotion CSS's philosophy of lightweight, modern, and high-performance visual utilities.
