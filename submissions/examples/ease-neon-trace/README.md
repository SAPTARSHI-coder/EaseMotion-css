# ease-neon-trace

An animated neon line traces the border perimeter of an element on hover using SVG stroke-dashoffset.

## Usage

Add `.ease-neon-trace` to the container and include an inline SVG with class `neon-border` as a child.

```html
<div class="ease-neon-trace">
  Content
  <svg class="neon-border" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect x="1" y="1" width="98" height="98" rx="10"/>
  </svg>
</div>
```

## Why it fits EaseMotion CSS

SVG stroke animation is CSS-driven. The SVG child is minimal boilerplate — the animation logic lives entirely in the stylesheet.
