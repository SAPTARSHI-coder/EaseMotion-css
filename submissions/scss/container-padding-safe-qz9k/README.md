# container-padding-safe-qz9k

A Sass mixin adding `env(safe-area-inset-*)` on top of a base padding
value, so content isn't clipped by a device notch, home indicator, or
rounded screen corners.

## Usage

```scss
@use 'container-padding-safe' as *;

.page-container {
  @include container-padding-safe(1.5rem);
}

.fixed-bottom-nav {
  @include container-padding-safe($padding: 0.75rem, $sides: (bottom));
}
```

| Param | Default | Description |
|---|---|---|
| `$padding` | `1.25rem` | Base padding, applied on every device regardless of safe-area support. |
| `$sides` | `(top, right, bottom, left)` | Which sides get the safe-area addition. |

## Why is it useful?

`env(safe-area-inset-*)` reports the space a device's own hardware
features (the iPhone notch/Dynamic Island, the home-indicator bar,
rounded display corners) require to keep content clear of — but using it
as a *replacement* for normal padding, rather than additive to it, means
content on a device with zero safe-area inset (most Android phones,
desktop browsers, older iPhones) would end up with no padding at all,
since `env()` resolves to `0px` there. `calc($padding + env(...))` keeps
the intended base padding on every device and adds extra space only where
the device actually needs it — the mixin's fallback value
(`env(safe-area-inset-top, 0px)`) also matters specifically for browsers
that don't support `env()` at all, where the whole function would
otherwise be invalid and the `calc()` would fail closed to nothing.

`$sides` accepts any subset of the four edges specifically because not
every container needs every side protected — a fixed bottom navigation bar
only ever risks being covered by the home-indicator area at the *bottom*
of the screen, so applying the safe-area addition to all four sides there
would be needless extra spacing on the top/left/right where no hardware
feature threatens to clip it.

## Requiring the viewport-fit meta tag

`env(safe-area-inset-*)` only resolves to non-zero values if the page
opts into edge-to-edge rendering via a viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

Without `viewport-fit=cover`, the browser reserves the safe-area space
itself and every `env(safe-area-inset-*)` value resolves to `0px` even on
a device with a notch — this mixin's `calc()` addition would silently do
nothing extra in that case, not because the mixin is broken, but because
the page hasn't requested the edge-to-edge layout mode that makes the
insets meaningful in the first place.

## Applying to individual fixed UI elements

Beyond a page-level container, this mixin is commonly needed on any
individually fixed-position element that sits at a screen edge — a fixed
header, a floating action button, a bottom sheet — each of which can be
covered by a device's notch or home-indicator independently of the page's
own container padding:

```scss
.app-header {
  position: fixed;
  top: 0;
  @include container-padding-safe($padding: 1rem, $sides: (top));
}

.fab-button {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  // Explicit padding-bottom addition isn't quite right for a small
  // floating button -- consider adjusting its bottom OFFSET instead of
  // its padding for elements sized to their content rather than filling
  // the container width.
}
```

The FAB example illustrates a real limitation: this mixin adds *padding*,
which is appropriate for a container whose content should be inset from
its own edges, but a small floating element positioned via `bottom`/`right`
offsets more naturally needs the safe-area addition applied to those
*position* offsets instead, which is a different (if related) calculation
this mixin doesn't cover directly.

## Testing without physical hardware

Safe-area insets can be simulated in desktop browser dev tools (Chrome
and Safari both offer device-frame emulation that includes notch/home-
indicator simulation for supported device presets), which is sufficient
for verifying this mixin's behavior without needing to test on physical
notched hardware for every change.
