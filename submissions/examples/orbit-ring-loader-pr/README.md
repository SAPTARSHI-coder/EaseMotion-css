# Orbit Ring Loader

## What does this do?
A pure CSS loading indicator featuring three concentric orbiting rings and
a glowing center core. Each ring rotates at a different speed and direction,
creating a dynamic orbital motion.

## How is it used?

```html
<div class="orbit-loader">
  <div class="core"></div>
  <div class="ring ring-inner"></div>
  <div class="ring ring-mid"></div>
  <div class="ring ring-outer"></div>
</div>
```

**Fast variant:**
```html
<div class="orbit-loader orbit-loader-fast">
  ...same inner markup...
</div>
```

**Neon variant:**
```html
<div class="orbit-loader orbit-loader-neon">
  ...same inner markup...
</div>
```

## Why is it useful?
A visually engaging, animation-focused UI element well suited for
dashboards, SaaS products, authentication screens, and loading states.
Pure HTML and CSS, self-contained, no JavaScript required, with
prefers-reduced-motion support.