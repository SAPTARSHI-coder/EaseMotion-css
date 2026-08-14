# Motion Preset Inheritance Utility

## What does this do?

A framework-agnostic SCSS utility for defining hierarchical motion presets, where specialized presets can inherit, extend, and override a shared base preset at compile time, eliminating duplicated transition/animation definitions.

## How is it used?

Import the partial, define a base preset, extend it for specific components, then output the resolved CSS with `use-motion-preset`.

```scss
@import "motion-preset-inheritance";

// 1. Define a base preset
@include define-motion-preset("base-fade", (
  transition-property: opacity, transform,
  transition-duration: 0.3s,
  transition-timing-function: ease-in-out
));

// 2. Extend the base preset, overriding only what's needed
@include extend-motion-preset("base-fade", "card-fade", (
  transition-duration: 0.5s
));

// 3. Nested inheritance — extend an already-extended preset
@include extend-motion-preset("card-fade", "modal-fade", (
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
));

// 4. Output resolved CSS wherever you need it
.ease-card {
  @include use-motion-preset("card-fade");
}

.ease-modal {
  @include use-motion-preset("modal-fade");
}

// 5. One-off override without creating a new named preset
.ease-card--slow {
  @include use-motion-preset("card-fade", (
    transition-duration: 1s
  ));
}
```

Compiles to:

```css
.ease-card {
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}

.ease-modal {
  transition-property: opacity, transform;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-card--slow {
  transition-property: opacity, transform;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
```

### API Reference

| Mixin / Function | Parameters | Description |
|---|---|---|
| `define-motion-preset($name, $properties, $extends: null)` | `$name`: preset identifier · `$properties`: map of CSS property => value · `$extends`: (optional) parent preset name, or list of parent names | Registers a new preset, optionally merging in one or more parent presets first |
| `extend-motion-preset($base-name, $new-name, $overrides: ())` | `$base-name`: preset to inherit from · `$new-name`: new preset identifier · `$overrides`: map of properties to override | Shorthand for creating a new preset that inherits from `$base-name` |
| `use-motion-preset($name, $overrides: ())` | `$name`: preset to output · `$overrides`: map of properties to override at the call site | Outputs the fully resolved CSS declarations for a preset, without mutating the registry |
| `motion-preset-get($name)` | `$name`: preset identifier | Function that returns the resolved property map for a preset |
| `motion-preset-exists($name)` | `$name`: preset identifier | Function that returns `true`/`false` |

## Why is this useful?

EaseMotion CSS already offers reusable motion utilities, but there was no compile-time way to build a *hierarchy* of motion behaviors. Design systems commonly need a base preset (e.g. a standard fade/slide) that specialized components extend and tweak — cards, modals, tooltips, toasts — without redefining the same transition properties over and over. This utility:

- Eliminates duplicated preset definitions across components.
- Supports unlimited nested inheritance (presets can extend presets that extend presets).
- Allows per-usage overrides without creating throwaway presets.
- Is pure SCSS — framework agnostic, no dependency on EaseMotion's core or any other library — and compiles down to plain, reusable CSS.
