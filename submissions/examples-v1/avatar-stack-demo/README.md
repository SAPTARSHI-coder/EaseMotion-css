# Avatar Stack — Demo

Stacked overlapping avatar group with ring borders, expandable on hover. Pure CSS, no JavaScript.

## Features

- Overlapping avatars with ring borders (dark theme outline)
- `+count` overflow indicator
- Hover to expand (increases gap, lifts hovered avatar)
- Three sizes: sm (32px), md (40px), lg (52px)

## Usage

Wrap avatars in `.avatar-stack` and optionally size it:

```html
<div class="avatar-stack avatar-stack-md">
  <div class="avatar" style="background:#3b82f6;">JD</div>
  <div class="avatar avatar-count">+3</div>
</div>
```
