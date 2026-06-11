# ease-glitch-hover

RGB split and digital distortion effect on hover. Red and cyan ghost copies of the element flicker with clip-path slices.

## Usage

Add `data-text` matching the element's text content so pseudo-elements can mirror it.

```html
<h1 class="ease-glitch" data-text="Hello">Hello</h1>
```

## How it works

Two `::before`/`::after` pseudo-elements use `attr(data-text)` as content, coloured red and cyan. On hover, `clip-path: inset()` and `steps()` timing create a frame-by-frame digital slice effect.

## Why it fits EaseMotion CSS

One class + one data attribute. No JavaScript, no canvas. Works on any text element.
