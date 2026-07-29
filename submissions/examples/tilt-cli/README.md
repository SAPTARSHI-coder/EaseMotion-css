# ease-tilt utility

## What does this do?
Adds a 3D perspective tilt effect where elements rotate slightly toward the cursor direction on hover using CSS `perspective` and `rotate3d` transforms.

## How is it used?
Apply `.ease-tilt` to any card or element. Combine with variants for intensity and direction.

```html
<!-- Default Tilt -->
<div class="ease-card ease-tilt">
  Hover to tilt
</div>

<!-- Strong Tilt with Shadow -->
<div class="ease-card ease-tilt ease-tilt-strong ease-tilt-shadow">
  Strong tilt with shadow
</div>
```

### Available Classes
| Class | Effect |
|-------|--------|
| `.ease-tilt` | Default 3D tilt (corner-style) |
| `.ease-tilt-strong` | Pronounced 15deg tilt |
| `.ease-tilt-subtle` | Gentle 3deg tilt |
| `.ease-tilt-left` | Tilts toward left |
| `.ease-tilt-right` | Tilts toward right |
| `.ease-tilt-up` | Tilts upward |
| `.ease-tilt-down` | Tilts downward |
| `.ease-tilt-shadow` | Adds dynamic shadow depth on hover |

## Why is it useful?
It provides a premium, "physical" interaction seen on modern landing pages (like Stripe or Notion) without any JavaScript. It enhances user engagement by making elements feel reactive and alive in a 3D space.
