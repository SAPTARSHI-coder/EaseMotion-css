# Badge Pulse Dot

## What does this do?

Creates notification badge indicators with a pulsing dot animation. Badges are absolutely positioned over icon wrappers, displaying an unread count alongside an animated dot that scales and fades using the `bpd-pulse` keyframe animation.

## How is it used?

Apply the component classes to any icon container. The badge sits at the top-right corner of the icon wrapper.

```html
<div class="bpd-icon-wrap">
  <!-- icon SVG -->
  <span class="bpd-badge">
    <span class="bpd-count">3</span>
    <span class="bpd-dot"></span>
  </span>
</div>
```

Customize via CSS custom properties:

```css
:root {
  --bpd-pulse-color: #ef4444;
  --bpd-badge-bg: #ef4444;
  --bpd-text-color: #ffffff;
  --bpd-pulse-duration: 1.5s;
  --bpd-font-size: 0.7rem;
}
```

## Why is this useful?

Provides a lightweight, pure-CSS notification badge with a live attention-grabbing pulse indicator. No JavaScript required for the animation. The count number uses a smooth transition on change, and all animations respect `prefers-reduced-motion`.
