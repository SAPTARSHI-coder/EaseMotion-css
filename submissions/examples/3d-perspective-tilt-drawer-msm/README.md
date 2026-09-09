# 3D Perspective Tilt Drawer

## What does this do?

This submission adds a pure HTML and CSS sidebar drawer that opens with a 3D perspective tilt effect.

## How is it used?

Add the checkbox toggle, open trigger, backdrop, and drawer panel to your page, then include the local stylesheet.

```html
<input class="drawer-toggle" type="checkbox" id="tilt-drawer-toggle" />
<label class="drawer-button" for="tilt-drawer-toggle">Open 3D drawer</label>
<label class="drawer-backdrop" for="tilt-drawer-toggle"></label>
<aside class="tilt-drawer" aria-label="3D perspective drawer">
  <div class="drawer-panel">Drawer content goes here.</div>
</aside>
```

## Why is it useful?

It gives EaseMotion CSS a dimensional drawer pattern with strong visual polish, keyboard-visible focus states, responsive behavior, dark-mode support, and reduced-motion safety without JavaScript.
