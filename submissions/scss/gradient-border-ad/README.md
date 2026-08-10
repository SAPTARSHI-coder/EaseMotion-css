# Gradient Border mixin

> Issue: [#61721](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/61721)

Animated and static gradient borders that respect `border-radius`, built with mask compositing rather than `border-image`.

## What it does

Paints a gradient into a border-width ring around an element, following the corner radius exactly. The animated variant sweeps the gradient continuously; the static variant emits no keyframes at all.

## Setup

Call the keyframes mixin **once**, at the top level of your stylesheet:

```scss
@include gradient-border-keyframes;
```

This emits the `@property` registration and the spin keyframes. It is separate from the border mixin so that using the border on twenty elements does not emit the keyframes twenty times.

## Mixins

### `gradient-border($width, $radius, $speed, $colors, $fallback)`

```scss
.feature-card {
    @include gradient-border($width: 1px, $radius: 16px, $speed: 6s);
}
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$width` | `Number` | `1px` | Ring thickness. Errors if not a number. |
| `$radius` | `Number` | `12px` | Corner radius. Should match the element's own. |
| `$speed` | `Number` | `6s` | Rotation period. `0s` omits the animation entirely. |
| `$colors` | `List` | cyan → indigo → pink → cyan | Gradient stops. Needs at least 2; first and last should match for a seamless loop. |
| `$fallback` | `Color` | `rgba(148, 163, 184, 0.3)` | Solid colour used where mask compositing is unavailable. |

### `gradient-border-static($width, $radius, $angle, $colors, $fallback)`

Same ring, fixed angle, no animation and no keyframe dependency.

```scss
.chip {
    @include gradient-border-static($width: 2px, $radius: 999px, $angle: 135deg);
}
```

## Configuration

```scss
@use "gradient-border" with (
    $gradient-border-speed: 8s,
    $gradient-border-colors: (#34d399, #22d3ee, #34d399)
);
```

## Why it fits EaseMotion

**`border-image` is the obvious tool and the wrong one.** It ignores `border-radius` completely, so a gradient border on any rounded element renders as a hard-cornered rectangle. The mask approach fills both the border box and the padding box, then subtracts the padding box via `mask-composite: exclude` — leaving only the ring, which follows the radius exactly.

**`@property` is what makes the animation possible at all.** Without registering `--gb-angle-ad` with `syntax: "<angle>"`, the browser treats it as an untyped string, and custom properties of unknown type are not interpolatable. The gradient would jump from `0deg` to `360deg` in a single step rather than sweeping. Registration is what turns it into a real animation.

Animating the angle also avoids the common alternative — animating `background-position` across an oversized gradient image — which repaints a large surface every frame.

The solid `border` is applied unconditionally *before* the `@supports` block, so the element is never border-less on engines without mask compositing; the enhanced path only sets `border-color: transparent` once it knows the ring will render.

An infinitely rotating border is precisely the perpetual motion `prefers-reduced-motion` exists for, so it is **cancelled outright** rather than shortened — the gradient stays visible, it just stops moving. Under `forced-colors: active` the pseudo-element is dropped entirely, since high-contrast mode flattens gradients to solid blocks that would obscure the element.
