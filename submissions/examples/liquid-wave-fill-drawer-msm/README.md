# Liquid Wave Fill Drawer

## What does this do?

This submission adds a pure HTML and CSS sidebar drawer with animated liquid wave fill layers and responsive open/close states.

## How is it used?

Add the drawer toggle, trigger, drawer panel, and scrim inside your page, then link the local stylesheet.

```html
<input class="drawer-toggle" type="checkbox" id="liquid-drawer-toggle" />
<label class="open-drawer" for="liquid-drawer-toggle">Open drawer</label>
<aside class="liquid-drawer" aria-label="Liquid wave drawer">
  <label class="close-drawer" for="liquid-drawer-toggle">&times;</label>
  <div class="drawer-content">Drawer content goes here.</div>
</aside>
<label class="drawer-scrim" for="liquid-drawer-toggle"></label>
```

## Why is it useful?

It gives EaseMotion CSS a polished drawer pattern that combines fluid motion, dark-mode compatibility, keyboard-visible focus states, and reduced-motion support without requiring JavaScript.
