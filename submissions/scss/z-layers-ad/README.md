# Z Layers function

> Issue: [#63560](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63560)

Named stacking order, replacing scattered magic z-index numbers with a single declared sequence.

## Functions

### `z-layer($name)` → `Number`

```scss
.modal   { z-index: z-layer(modal); }    // → 60
.tooltip { z-index: z-layer(tooltip); }  // → 90
```

Default order, bottom to top:

`base` · `raised` · `dropdown` · `sticky` · `overlay` · `drawer` · `modal` · `popover` · `toast` · `tooltip`

### `z-above($name, $offset)` / `z-below($name, $offset)`

A value just above or below a named layer, without inventing a new one — for a close button that must sit over its own modal but below toasts.

```scss
.modal__close { z-index: z-above(modal); }  // → 61
```

Offsets at or beyond `$z-layers-step` raise a build error, since that would overtake the next layer.

### `has-z-layer($name)` → `Bool`

Non-throwing membership test.

## Mixins

### `z-layer-vars($prefix)` → `--z-modal: 60` etc.
### `z-layer-utilities($prefix)` → `.z-ad-modal { z-index: 60 }` etc.
### `stacking-context` → `isolation: isolate`

## Configuration

```scss
@use "z-layers" with (
    $z-layers-order: ("base", "dropdown", "modal", "toast"),
    $z-layers-step: 100
);
```

## Why it fits EaseMotion

**The order is a list, not a map of numbers.** That is the load-bearing decision. With a map you write `("modal": 60, "toast": 70)` and inserting a layer between them means renumbering everything above — which is exactly the renumbering churn the module is supposed to eliminate. Deriving the index from list *position* means inserting a layer is a one-line edit with no other value touched.

The `$z-layers-step` gap of 10 exists so `z-above()` has room to work. And `z-above()` validates its offset against that step: an offset of 10 or more would push a layer past the next one up, silently recreating the exact bug — a component that mysteriously renders above something it should sit under — that this module exists to prevent. Failing the build is better than debugging it later.

`stacking-context` is a named mixin because `isolation: isolate` is the only way to create a stacking context **without side effects**. The usual alternatives — a `transform`, an `opacity` below 1, a `will-change` — all create one too, but as a by-product of some other visual change. That is why z-index behaviour so often becomes baffling: someone adds a transform for a hover effect and unrelated layering breaks.
