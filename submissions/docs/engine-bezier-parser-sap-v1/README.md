# Engine Bezier Curve Interpolation Parser

## What does this do?
Parses arbitrary 4-point `cubic-bezier(x1, y1, x2, y2)` strings directly inside `em=""` engine attributes.

## How is it used?
```html
<div em="zoom-in cubic-bezier(0.68,-0.55,0.27,1.55) duration-slow">Bezier Element</div>
```

## Why is it useful?
Allows developers to specify custom easing curves beyond predefined aliases without manual CSS rule creation.
