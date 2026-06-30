# ease-scanline

A holographic scanner line sweeps from top to bottom across the element on hover.

## Usage

```html
<div class="ease-scanline">Content</div>
```

## How it works

A `::after` pseudo-element with a thin gradient band animates its `top` position from `-10%` to `110%` on hover, simulating a scanner sweep.

## Why it fits EaseMotion CSS

Zero markup changes, zero JS. `overflow: hidden` on the element keeps the sweep clipped cleanly.