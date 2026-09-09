# ease-gravity

Hovering any item in a group makes its neighbors lean toward it — like a subtle gravitational pull — while the hovered item itself grows and glows as the "source" of attraction.

## Usage

Wrap sibling elements in `.ease-gravity-group` and add `.ease-gravity` to each child.

```html
<div class="ease-gravity-group">
  <button class="ease-gravity">Files</button>
  <button class="ease-gravity">Edit</button>
  <button class="ease-gravity">View</button>
  <button class="ease-gravity">Help</button>
</div>
```

## Modifiers

- `.ease-gravity-group--strong` — increases pull distance to `24px` (default `14px`)
- `.ease-gravity-group--subtle` — reduces pull distance to `8px`, suited for tight toolbars
- `.ease-gravity-group--dark` — dark theme colors for the items and hover glow

## How it works

Uses `:has()` to detect which sibling is hovered. Items before it shift right, items after it shift left, both shrinking slightly (`scale(0.96)`) and fading to `opacity: 0.7` so the motion reads clearly. The hovered item itself scales up to `1.12`, gains an indigo border and glow ring, and shifts its text to a matching indigo — making it visually obvious *why* the other items are reacting.

## Why it fits EaseMotion CSS

Declarative group + item classes, zero JavaScript. The hovered item's glow gives the effect a clear cause, and the increased pull distance plus opacity/scale changes on siblings make the motion legible at a glance rather than subtle to the point of invisibility.