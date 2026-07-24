# Cyberpunk Glitch HUD Badges

A set of responsive cyberpunk badge components with periodic light clipping animations.

## What does this do?
It builds dashboard status badges that trigger color-shifted clipping overlays on hover or focus events, simulating classic cyberpunk HUD glitches.

## How is it used?
Configure standard elements with the glitch badge selectors:

```html
<div class="glitch-badge badge-online" tabindex="0">
  <span class="scan-overlay"></span>
  <span class="badge-text" data-text="SYS_ONLINE">SYS_ONLINE</span>
</div>
```

## Why is it useful?
It provides themed, lightweight highlight components, leveraging pure CSS animations and pseudo-elements.
