# Eclipse Moon Overlay

A sun with a glowing corona that is slowly swallowed by a dark moon, dimming the whole scene.

## How is it used?

The moon sits off-screen and glides over the sun via a transition:

```css
.moon {
  transform: translateX(220px);
  transition: transform 1.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.moon.covering { transform: translateX(0); }
```

Toggling `.covering` slides the moon into place. A parent `.dark` state can additionally swap the scene's background gradient, so the whole sky darkens in sync with the same click. The `z-index` keeps the moon over the sun while the button and caption stay clickable.

## Why is it useful?

This is an overlay/interruption pattern: an element translated in from off-canvas, layered over content, then removed. The same translate-with-z-index choreography drives modals, tour spotlights, and "peek" panels, and pairing it with a timed color shift shows how to coordinate multiple elements on a single state toggle.
