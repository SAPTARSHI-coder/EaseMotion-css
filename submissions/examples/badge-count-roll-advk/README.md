# Rolling Count Badge

## What does this do?

A numeric badge where each digit is a rolling column, so only the digits that
actually changed animate.

## How is it used?

```html
<span class="bcr" role="img" aria-label="1482 stars">
  <span class="bcr-c" style="--d:1"></span>
  <span class="bcr-c" style="--d:4"></span>
  <span class="bcr-c" style="--d:8"></span>
  <span class="bcr-c" style="--d:2"></span>
</span>
```

Set each column's `--d` to its digit; updating one value rolls only that column.

## Why is it useful?

The usual animated counter tweens the whole number, so incrementing 1481 to 1482
visibly re-renders all four digits. A real odometer only moves the wheels that
change, and that is both more legible and much cheaper.

Making each column a 0-9 strip positioned by `translateY(calc(var(--d) * -10%))`
gets that behaviour with no JavaScript at all: the browser transitions only the
columns whose custom property changed, because the others have no property change
to animate.

The strip lives in `content` on a pseudo-element, so a four-digit badge is four
elements rather than forty, and the digits are decorative — the accessible value
comes from `aria-label` on the container. That separation matters, because a
screen reader encountering ten stacked digits per column would otherwise read
nonsense.

`font-variant-numeric` is unnecessary here since the strip is explicitly
monospaced by the column width, which keeps the badge from reflowing as digits
change.
