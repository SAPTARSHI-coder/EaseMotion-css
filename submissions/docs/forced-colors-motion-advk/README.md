# Forced-colors Aware Motion

## What does this do?

Four common animated primitives — a toggle, status chips, a progress bar and a
focus ring — rebuilt so their state survives Windows High Contrast mode.

## How is it used?

```html
<button class="fc-toggle" role="switch" aria-checked="true">
  <span class="fc-toggle__track"><span class="fc-toggle__thumb"></span></span>
  <span class="fc-toggle__label">Notifications</span>
</button>
```

Inspect with DevTools &rarr; Rendering &rarr; **Emulate CSS forced-colors:
active**, or a Windows contrast theme.

## Why is it useful?

A grep for `forced-colors` across `core/`, `components/` and `easemotion/`
returns nothing — the framework has no High Contrast handling anywhere. In
forced-colors mode the browser overrides `color`, `background-color`,
`border-color` and drops `box-shadow`, substituting a small system palette.

Every EaseMotion pattern that encodes state as colour alone breaks under that
substitution. An on/off toggle becomes two identical pills. The three status
chips in `components/badges.css` collapse into one appearance. A gradient
progress fill flattens to the same colour as its own track, so completion is
unreadable. None of this is visible in normal testing, which is exactly why it
persists.

The fixes are cheap and additive: pair colour with a glyph or border so state has
a second carrier, use `Highlight`/`HighlightText`/`Canvas`/`CanvasText` instead of
literal values inside the media query, and re-declare edges that `box-shadow` used
to imply. Roughly 15 lines per component, applied once, and the framework becomes
usable for High Contrast users rather than merely not crashing for them.
