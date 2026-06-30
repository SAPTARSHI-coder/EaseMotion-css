# ease-hover-tilt-left-isk

## What does this do?

Tilts the card slightly to the left on hover using a 3D perspective rotation around the Y-axis for a tactile, interactive spatial effect.

## How is it used?

Wrap the hoverable element in a container that has the perspective defined, and apply the class to the card:

```html
<div class="ease-perspective-container-isk">
  <div class="ease-hover-tilt-left-isk">Card Content</div>
</div>
```

You can customize the tilt angle by overriding the `--ease-tilt-angle` CSS variable:

```css
.custom-card {
  --ease-tilt-angle: 12deg;
}
```

## Why is it useful?

3D tilt hover animations add high-end visual polish and spatial depth to cards, profiles, and interactive promo blocks. By utilizing parent perspective and smooth transform transitions, the UI feels physical, modern, and engaging.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)
