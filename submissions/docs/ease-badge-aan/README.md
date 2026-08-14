# Glowing Badge

## What does this do?
A small pill-shaped badge with a soft pulsing glow, available in four color variants (pink, blue, green, amber) plus a compact dot variant for notification counts.

## How is it used?
Add the base class plus a color variant:

```html
<span class="badge-glow-aan badge-glow-pink-aan">New</span>
<span class="badge-glow-aan badge-glow-blue-aan">Beta</span>
<span class="badge-glow-aan badge-glow-green-aan">Online</span>
<span class="badge-glow-aan badge-glow-amber-aan">Hot</span>
```

For a small circular counter badge (e.g. next to a notification icon), add `badge-glow-dot-aan`:

```html
<span class="badge-glow-aan badge-glow-pink-aan badge-glow-dot-aan">3</span>
```

Each variant sets a `--glow-color-aan` custom property, so the pulse animation automatically glows the right color — no per-variant keyframes needed.

## Why is it useful?
Badges are a common UI need (status indicators, notification counts, "new" labels) and EaseMotion CSS's animation-first philosophy makes them feel alive rather than static. The glow pulse draws the eye without being distracting, and the color-variant system keeps the component easy to theme with a single shared keyframe, in line with the framework's preference for reusable, composable classes.
