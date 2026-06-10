# ease-wave-border

A glowing streak travels around an element's border on hover using an animated gradient mask on a pseudo-element.

## Usage

```html
<div class="ease-wave-border">Card content</div>
```

## How it works

A `::before` pseudo-element with a `background-size: 200%` gradient animates its `background-position` to simulate a travelling light streak along the border edge.

## Why it fits EaseMotion CSS

Pure CSS, single class, works on any block or inline-block element without modifying its structure.
