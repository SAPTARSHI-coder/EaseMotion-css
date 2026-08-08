# Text Gradient Shift

A continuously panning gradient clipped to text, giving headings a subtle, colorful "flowing" look.

## What it does
Applies a large `background: linear-gradient()` sized wider than the element, clips it to the text glyphs via `background-clip: text`, and animates `background-position` in a seamless loop.

## How to use it
Add the `text-gradient-flow` class to any heading or inline text element. Customize colors by overriding the `background` gradient stops.

```html
<h1 class="text-gradient-flow">Build with EaseMotion</h1>