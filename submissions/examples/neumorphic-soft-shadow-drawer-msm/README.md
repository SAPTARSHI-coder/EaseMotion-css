# Neumorphic Soft Shadow Drawer

## What does this do?

This submission adds a pure HTML and CSS sidebar drawer with a neumorphic soft shadow visual treatment.

## How is it used?

Add the checkbox toggle, open trigger, backdrop, and drawer panel to your page, then include the local stylesheet.

```html
<input class="drawer-toggle" type="checkbox" id="soft-drawer-toggle" />
<label class="open-drawer" for="soft-drawer-toggle">Open soft drawer</label>
<label class="drawer-backdrop" for="soft-drawer-toggle"></label>
<aside class="soft-drawer" aria-label="Neumorphic soft shadow drawer">
  <div class="drawer-content">Drawer content goes here.</div>
</aside>
```

## Why is it useful?

It gives EaseMotion CSS a tactile drawer pattern with layered inset and outset shadows, accessible focus states, responsive behavior, dark-mode support, and reduced-motion safety without JavaScript.
